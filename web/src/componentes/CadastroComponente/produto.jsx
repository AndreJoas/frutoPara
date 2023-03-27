
import "./styles.css";
import logo from "../logo-header.png";
import { IMaskInput } from "react-imask";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProduto } from "../../scripts/products.js";
import { Base64 } from 'js-base64';

function CadastroProduto() {

    const [nomeProduto, newValueNomeProduto] = useState("");
    const [categoria, newValueCategoria] = useState('');
    const [preco, newValuePreco] = useState("");
    const [quantidade, newValueQuantidade] = useState("");
    const [file, setFile] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [sucess, setSucess] = useState(false);
    const [userExist, setUserExist] = useState(false);
    const navigate = useNavigate();
    let msg = "";

    useEffect(() => {
        const recoveredStore = sessionStorage.getItem("vendedor");

        if(recoveredStore){
            setUserExist(true);
            setUser(JSON.parse(recoveredStore));
        }      
        
        setLoading(false);
    }, []);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && /^image\/(jpe?g|png)$/i.test(selectedFile.type)) {
            const reader = new FileReader(); //API para converter o arquivo enviado em base64   
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                setFile(Base64.encode(reader.result));
            };
        } else {
            setFile(null);
            alert('Por favor, selecione um arquivo JPG, JPEG ou PNG');
        }
    };

    const validateCadastroProduto = () => {

        const jsonReq = {
            "nome": nomeProduto,
            "categoria": categoria,
            "quant_disponivel": quantidade,
            "preco_unidade": preco,
            "imagem_produto": file,
            "nome_loja": user['nome'],
            "cnpj_loja": user['cnpj']
        }

        console.warn(jsonReq)

        if(!nomeProduto){
            msg += "O campo 'Nome do produto' deve ser preenchido. \n";
        }
        if(!categoria){
            msg += "O campo 'Categoria' deve ser preenchido. \n";
        }
        if(!quantidade){
            msg += "O campo 'Quantidade' deve ser preenchido. \n";
        }
        if(!preco){
            msg += "O campo 'Valor em R$ (unidade)' deve ser preenchido. \n";

        }else if(preco <= 0){
            msg += "O preço do produto deve ser maior que 0. \n"
        }
        
        if(!file){
            msg += "É obrigatório o envio da imagem do produto. \n";
        }

        if(!msg){
            addProduto(jsonReq);
            setSucess(true);
        }else{
            alert(msg);
            msg = "";
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
                                <h1>O seu produto foi cadastrado com sucesso!</h1>
                                <p>Agora os seus clientes poderão saborear um pouco do gostinho do Pará.</p>
                        </div>
                        <div className="botoes2Inicial">
                            <a onClick={ e => navigate("/")}><button className="bt2Loja">Visualizar Loja</button></a>
                            <a onClick={ e => navigate("/HomeLoja")}><button className="bt3Inicial" >Voltar</button></a>
                        </div>
                    </div>
                </section>
            </body>
        )
    }else{
        return (
            <body>
                <header className="headerCadastro">
                    <div className="logoHeaderCadastro">
                        <img src={logo} alt="" />
                    </div>
                </header>
                <section className="loginCliente">
                    <div className="forme">
                        <h1 className="bem">Cadastro de produto</h1>
                        <div className="campos">
                            <label className="labelCampoCliente">Nome do produto</label>
                            <IMaskInput
                                className="ip"
                                type="text"
                                placeholder="Nome do produto"
                                value={nomeProduto}
                                onChange={e => newValueNomeProduto(e.target.value)}
                                onKeyPress={(e) => !/[A-Za-z ]/.test(e.key) && e.preventDefault()}
                            />
                            <label className="labelCampoCliente">Categoria</label>
                            <select className="ip" value={categoria} onChange={(event) => newValueCategoria(event.target.value)}>
                                <option value="">Selecione uma opção</option>
                                <option value="fruta">Fruta</option>
                                <option value="verdura">Verdura</option>
                                <option value="legume">Legume</option>
                                <option value="frios">Frios</option>
                            </select>
                            <label className="labelCampoCliente">Valor em R$ (unidade)</label>
                            <IMaskInput
                                className="ip"
                                type="number"
                                placeholder="Ex: 0,00"
                                value={preco}
                                onChange={e => newValuePreco(e.target.value)}
                            />
                            <label className="labelCampoCliente">Quantidade disponível</label>
                            <IMaskInput
                                className="ip"
                                type="text"
                                placeholder="Quantidade disponível"
                                mask="0000"
                                value={quantidade}
                                onChange={e => newValueQuantidade(e.target.value)}
                                onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                            />
                            <label className="labelCampoCliente">Imagem do produto</label>
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleFileChange}
                            />
                        </div>
                        <a><button className="entrar" onClick={validateCadastroProduto}>Cadastrar</button></a>
                        <a><button onClick={e => navigate("/inicioPage")} className="voltar">Voltar</button></a>
                    </div>
                </section>
            </body>
    
        )
    }
};

export default CadastroProduto;