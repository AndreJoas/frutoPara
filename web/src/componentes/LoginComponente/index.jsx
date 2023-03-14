import "./styles.css";
import logo from "../logo_header.png"
import { useState } from "react";


function LoginComponente() {
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
                    <a href="/HomeCliente"><button className="entrar">Entrar</button></a>
                </div>
            </section>
            <a href="/inicioPage" className="voltar">Voltar</a>
        </body>

    )
};

export default LoginComponente;