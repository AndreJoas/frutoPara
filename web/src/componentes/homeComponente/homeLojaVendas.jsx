import "./stylesVendas.css";
import logo from "../logo-header.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { buscaVendasPorLoja } from "../../scripts/sales.js";

export default function HomeLojaProdutos() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userExist, setUserExist] = useState(false);
    const [vendas, setVendas] = useState([]);
    const [sortByDateAsc, setSortByDateAsc] = useState(true);

    useEffect(() => {
        const recoveredStore = sessionStorage.getItem("vendedor");

        if (recoveredStore) {
            setUserExist(true);
            setUser(JSON.parse(recoveredStore));
        }

        setLoading(false);
    }, []);

    useEffect(() => {
        if (user) {
            buscaVendasPorLoja(user['cnpj']).then((data) => {
                const jsonResult = data['result'];
                setVendas(jsonResult.map(venda => {
                    const parsedVenda = JSON.parse(venda["json_venda"]);
                    parsedVenda.timestamp = venda["timestamp"];
                    return parsedVenda;
                }));
            }).catch((error) => {
                console.error(error);
            });
        }
    }, [user]);

    const handleSortByDate = () => {
        const sortedVendas = [...vendas];
        sortedVendas.sort((a, b) => {
            if (sortByDateAsc) {
                return new Date(a.timestamp) - new Date(b.timestamp);
            } else {
                return new Date(b.timestamp) - new Date(a.timestamp);
            }
        });
        setVendas(sortedVendas);
        setSortByDateAsc(!sortByDateAsc);
    };

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
                {vendas.length !== 0 ? (
                    <table className="vendasTable">
                        <thead>
                            <tr>
                                <th onClick={handleSortByDate}>Data<span className={`sort-arrow ${sortByDateAsc ? "asc" : "desc"}`}></span>
                                </th>
                                <th>Hora</th>
                                <th>Cliente</th>
                                <th>Telefone</th>
                                <th>Endereço</th>
                                <th>Forma de Pagamento</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vendas.map((element, index) => (
                                <tr key={index}>
                                    <td>{element.timestamp ? new Date(element.timestamp).toLocaleDateString() : "Sem registro"}</td>
                                    <td>{element.timestamp ? new Date(element.timestamp).toLocaleTimeString() : "Sem registro"}</td>
                                    <td>{element.dadosCliente["nome"]}</td>
                                    <td>{element.dadosCliente["telefone"]}</td>
                                    <td>{element.dadosCliente["endereco"]}</td>
                                    <td>{element.dadosVenda["forma_pagamento"]}</td>
                                    <td>R$ {parseFloat(element.dadosVenda["total_venda"]).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="noProductsCategory">
                        <h2>A sua loja ainda não possui vendas :(</h2>
                    </div>
                )}
            </div>
        </div>
    );
}
