import "./stylesVendas.css";
import logo from "../logo-header.png"
import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { buscaVendasPorLoja } from "../../scripts/sales.js";

export default function HomeLojaProdutos() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userExist, setUserExist] = useState(false);
    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        const recoveredStore = sessionStorage.getItem("vendedor");

        if(recoveredStore){
            setUserExist(true);
            setUser(JSON.parse(recoveredStore));
        }      
        
        setLoading(false);
    }, []);

    useEffect(() => {
        if(user){
            buscaVendasPorLoja(user['cnpj']).then((data) => {
                const jsonResult = data['result'];
                setVendas(jsonResult.map(venda => JSON.parse(venda["json_venda"])));
            }).catch((error) => {
                console.error(error)
            });
        }
    }, [user]);

    if(vendas.length != 0){
        return (
            <div>
                <header className="cabeca">
                            <div className="logoHeaderCadastro">
                                <img src={logo} alt="" />
                            </div>
                </header>
                <div className="TituloLojaProdutos">
                    <h2>Minhas Vendas</h2>  
                </div>
                <div className="allVendas">
                    {vendas.map((element, index) => (
                        <div className="mainVendas">
                            <div className="vendaEspecifica">
                                    <p>Cliente: {element.dadosCliente["nome"]}</p>
                                    <p>Telefone do cliente: {element.dadosCliente["telefone"]}</p>
                                    <p>Endereço: {element.dadosCliente["endereco"]}</p>
                                    <p>Forma de Pagamento: {element.dadosVenda["forma_pagamento"]}</p>
                                    <p>Total: R${element.dadosVenda["total_venda"]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <header className="cabeca">
                            <div className="logoHeaderCadastro">
                                <img src={logo} alt="" />
                            </div>
                </header>
                <div className="TituloLojaProdutos">
                    <h2>Minhas Vendas</h2>
                </div>
                <div className="noProductsCategory">
                    <h2>A sua loja ainda não possui vendas :(</h2>
                </div>
            </div>
        );
    }
}
