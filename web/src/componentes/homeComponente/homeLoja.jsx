import "./styles2.css";
import logo from "../logo-header.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeLoja() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userExist, setUserExist] = useState(false);
    useEffect(() => {
        const recoveredStore = sessionStorage.getItem("vendedor");

        if(recoveredStore){
            setUserExist(true);
            setUser(JSON.parse(recoveredStore));
        }      
        
        setLoading(false);
    }, []);

    if(loading){
        return <div className="loading">Carregando...</div>
    }else if(!userExist){
        return navigate("/lojaLoginPage");
    }else{
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
                                <h1>Bem-vindo ao dashboard do(a) {user['nome']}!</h1>
                                <p>Aqui você pode cadastrar um novo produto ou verificar o estoque atual do seu hortifruti.</p>
                        </div>
                        <div className="botoes2Inicial">
                            <a onClick={ e => navigate("/cadastroProduto")}><button className="bt2Loja">Cadastrar Produto</button></a>
                            <a onClick={ e => navigate("/produtosLoja")}><button className="bt3Inicial" >Ver Loja</button></a>
                        </div>
                    </div>
                </section>
            </body>
        )
    }
};