import "./styles.css";
import logo from "../logo_header.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginComponente() {
    const navigate = useNavigate();
    const [email, newValueEmail] = useState("")

    return (
        <body>
            <header className="headerLogin">
                <div className="logoHeaderLogin">
                    <img src={logo} alt="" />
                </div>
            </header>
            <section className="login">
                <div className="forme">
                    <h1 className="bem">Bem vindo ao Login</h1>
                    <div className="campos">
                        <input className="ip" type="text" placeholder="Email" value={email} onChange={e => newValueEmail(e.target.value)} />
                        <input className="ip" type="password" placeholder="senha" />
                    </div>
                    <a onClick={ e => navigate("/HomeCliente")}><button className="entrar">Entrar</button></a>
                    <a onClick={ e => navigate("/cadastroPage")} className="voltar">Voltar</a>
                </div>
            </section>
        </body>

    )
};

export default LoginComponente;