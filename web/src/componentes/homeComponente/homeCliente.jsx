// Responsivo

import Destaques from "../DestaquesComponente";
import Procurando from "../procurandoComponente";
import wel from "../homeComponente/w.svg";
import manga1 from "../homeComponente/E1.png";
import manga2 from "../homeComponente/E2.png";
import loja from "../homeComponente/lojas.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


import "./styles.css"
import ListaLoja from "../listaLojaComponente";

export default function HomeCliente() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userExist, setUserExist] = useState(false);
    useEffect(() => {
        const recoveredUser = sessionStorage.getItem("usuario");

        if(recoveredUser){
            setUserExist(true);
            setUser(JSON.parse(recoveredUser));
        }      
        
        setLoading(false);
    }, []);
    if(loading){
        return <div className="loading">Carregando...</div>
    }else if(!userExist){
        return navigate("/loginPage");
    }else{
        return (
            <body className="cliente">
                <header>
                    <div className="logo">logo</div>
                    <div className="headerCenter">
                        <a onClick={ e => navigate("")}><h3>Lojas</h3></a>
                        <a onClick={ e => navigate("")}><h3>Categoria</h3></a>
                        <a onClick={ e => navigate("/lojaCadastroPage")}><h3>Cadastrar Loja</h3></a>
                    </div>
                </header>
                <section className="sessao">
                    <div className="divisao1">
                        <div className="subdivisao">
                            <div className="frutas">
                                <div style={{ position: 'relative', marginTop: '-2.3rem' }}><img className="ft" src={manga1} alt="" /></div>
                                <div style={{ marginTop: '-17.3rem', marginLeft: '3.4rem' }} ><img className="ft2" src={manga2} alt="" /></div>
                            </div>
                            <div className="textos2">
                                <h2>Olá {user['nome']}! Bem-vindo ao Frutos do Pará,</h2>
                                <h2 className="tx2">Aproveite e boas compras!</h2>
                            </div>
                        </div>
                        <div className="image"><img className="wel" src={wel} alt="" /></div>
                    </div>
                    <Procurando />
                    <Destaques />
                    <div className="lojasparte">
                        <div className="pesquLojas">
                            <div><img src={loja} />LOJAS</div>
                            <div className="divip"><input  className="ip1" type="text" name="" value="" placeholder="Encontra uma loja" /></div>
                        </div>
                        <hr />
                        <ListaLoja/>
                    </div>
                </section>
    
            </body>
        );
    }
}