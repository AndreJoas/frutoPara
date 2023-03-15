import "./styles.css";
import logo from "../logo_header.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { buscaLogin } from "../../scripts/person.js";


function LoginComponente() {
    const navigate = useNavigate();
    const [email, newValueEmail] = useState("");
    const [senha, newValueSenha] = useState("");
    const [showPass, setShowPass] = useState(false);

    const validateLogin = () => {
        console.warn(email)
        buscaLogin("email").then((data) => {
            console.log(data);
        }).catch((error) => {
            console.error(error);
        });
    };


    const viewPassword = () => {
        setShowPass(!showPass);
    }

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
                        <input
                            className="ip"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={e => newValueEmail(e.target.value)}
                        />
                        <input
                            className="ip"
                            type={showPass ? "text" : "password"}
                            placeholder="Senha"
                            value={senha}
                            onChange={e => newValueSenha(e.target.value)}
                        />
                        <label className="labelCampoCliente">
                            <IMaskInput
                                type="checkbox"
                                onClick={viewPassword}
                            />
                            {showPass ? "Esconder senha" : "Mostrar senha"}
                        </label>
                    </div>
                    <a><button className="entrar" onClick={validateLogin}>Entrar</button></a>
                    <a><button onClick={e => navigate("/cadastroPage")} className="voltar">Voltar</button></a>
                </div>
            </section>
        </body>

    )
};

export default LoginComponente;