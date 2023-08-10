import "./styles.css";
import logo from "../logo-header.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { buscaProdutoEspecifico } from "../../scripts/products.js";
import { addVenda } from "../../scripts/sales.js";
import { createTrailEvent } from "../../scripts/trail.js";
import emailjs from "@emailjs/browser";

export default function ProductItem() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userExist, setUserExist] = useState(false);
    
    const [produto, setProduto] = useState([]);
    const [quantidade, setQuantidade] = useState(0);
    const [pixChecked, setPixChecked] = useState(false);
    const [debitoChecked, setDebitoChecked] = useState(false);
    const [sucess, setSucess] = useState(false);
    
    const url = window.location.href.split("/");
    const idAlbum = url.length - 1;
    const urlParam = url[idAlbum];

    let msg = "";

    useEffect(() => {
        const recoveredStore = sessionStorage.getItem("usuario");

        if(recoveredStore){
            setUserExist(true);
            setUser(JSON.parse(recoveredStore));
        }      
        
        setLoading(false);
    }, []);

    useEffect(() => {
        if(user){
            buscaProdutoEspecifico(urlParam).then((data) => {
                const jsonResult = data['result'];
                setProduto(jsonResult[0]);
            }).catch((error) => {
                console.error(error)
            });
        }
    }, [user]);

    const handlePixChange = (event) => {
        setPixChecked(event.target.checked);
        setDebitoChecked(false);
    };
      
    const handleDebitoChange = (event) => {
        setDebitoChecked(event.target.checked);
        setPixChecked(false);
    };

    let totalCompra = (quantidade * produto["preco_unidade"]).toFixed(2);
    
    function sendEmail(e){
        e.preventDefault();

        const templateParams = {
            nome_cliente: user['nome'],
            loja_nome: produto["nome_loja"],
            forma_pagamento: pixChecked ? "PIX" : "Débito",
            preco_compra: totalCompra.toString(),
            email_cliente: user["email"]
        }
        emailjs.send("service_frutosdopara", "template_m0ma7af", templateParams, "E3kbGRJI7j9xVBiVO")
        .then((response) => {
            console.log("EMAIL ENVIADO => ", response.status, response.text);
        }).catch((err) => {
            console.log("FALHA AO ENVIAR EMAIL => ", err)
        })
    }

    const validateCompra = async (e) => {
        if(!msg){
            let jsonVenda = {
                dadosCliente: {
                    nome: user["nome"],
                    cpf: user["cpf"],
                    email: user["email"],
                    endereco: user["endereco"],
                    telefone: user["telefone"]
                },
                dadosLoja: {
                    nome: produto["nome_loja"],
                    cnpj: produto["cnpj_loja"]
                },
                dadosVenda: {
                    forma_pagamento: pixChecked ? "PIX" : "Débito",
                    total_venda: totalCompra,
                    produtos: {
                        nome: produto["nome"],
                        valor_unidade: produto["preco_unidade"],
                        categoria: produto["categoria"],
                        quantidade_comprada: quantidade
                    }
                }
            }
        
            let insertVenda = {
                nome_comprador: user["nome"],
                nome_loja: produto["nome_loja"],
                cnpj_loja: produto["cnpj_loja"],
                json_venda: JSON.stringify(jsonVenda)
            }
            
            setSucess(true);

            try {
                const saleResponse = await addVenda(insertVenda);
                
                if (saleResponse && saleResponse.result.codigo) {
                    const codigoVenda = saleResponse.result.codigo;
                    
                    try {
                        const trailEventResponse = await createTrailEvent(
                            codigoVenda
                        );
                            
                        if (trailEventResponse && trailEventResponse.result.codigo) {
                            setSucess(true);
                            sendEmail(e);
                        } else {
                            console.error("Falha ao criar event trail");
                        }
                    } catch (trailError) {
                        console.error("Erro ao criar event trail:", trailError);
                    }
                } else {
                    console.error("Falha ao adicionar venda");
                }
            } catch (saleError) {
                console.error("Erro ao adicionar venda:", saleError);
            }
        }
    }

    if(sucess){
        return (
            <body>
                <header className="cabeca">
                    <div className="logoHeaderCadastro">
                        <img src={logo} alt="" />
                    </div>
                </header>
                <section>
                    <div className="div1">
                        <div className="textosLoja">
                                <h1>A sua compra está a 1 passo de ser realizada!</h1>
                                <p>Você receberá um e-mail com maiores detalhes sobre a sua compra.</p>
                        </div>
                        <div className="botoes2Inicial">
                            <a onClick={ e => navigate("/homeCliente")}><button className="bt2Loja">Comprar mais</button></a>
                            <a onClick={ e => navigate("/loginPage")}><button className="bt3Inicial" >Sair</button></a>
                        </div>
                    </div>
                </section>
            </body>
        )
    }else{
        return (
            <div>
                <header className="cabeca">
                    <div className="logoHeaderCadastro">
                        <img src={logo} alt="" />
                    </div>
                </header>
                <div className="allProductsItem">
                    <div className="produtoEspecificoItem">
                        <div className="imagemProduto">
                            <img src={produto["imagem_produto"]}/>
                        </div>
                        <div className="dadosProduto">
                            <h2>{produto["nome"]}</h2>
                            <p>Venda e entrega por: {produto["nome_loja"]}</p>
                            <h2>Preço (unidade): R${produto["preco_unidade"]}</h2>
                            <p>Categoria: {produto["categoria"]}</p>
                            <p><label>Quantidade:
                                <input className="quantidadeInput"
                                    type="number"
                                    value={quantidade}
                                    onChange={(event) => setQuantidade(event.target.value)}
                                />
                                ({produto["quant_disponivel"]} disponiveis)
                            </label></p>
                            <p> Forma de pagamento: 
                                <input
                                    type="checkbox"
                                    checked={pixChecked}
                                    onChange={handlePixChange}
                                />
                                PIX
                                <input
                                    type="checkbox"
                                    checked={debitoChecked}
                                    onChange={handleDebitoChange}
                                />
                                Débito
                            </p>
                            <a><button className="comprar" onClick={validateCompra}>Comprar!</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
