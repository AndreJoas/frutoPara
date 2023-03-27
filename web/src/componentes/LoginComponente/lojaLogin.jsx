import "./styles.css";
import logo from "../logo-header.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import { buscaLoja } from "../../scripts/store.js";
import { Base64 } from 'js-base64';


function LoginLoja() {
    const navigate = useNavigate();
    const [CNPJ, newValueCNPJ] = useState("");
    const [senha, newValueSenha] = useState("");
    const [showPass, setShowPass] = useState(false);
    let msg = "";
    let jsonRequest = "";

    const validateLogin = () => {
        buscaLoja(CNPJ).then((data) => {
            jsonRequest = data['result'];
            console.log(jsonRequest)
            console.log("json: ", jsonRequest);
            if (jsonRequest['cnpj']) {
                if (jsonRequest['senha'] != Base64.encode(senha)) {
                    msg += "Senha incorreta. Favor, tente novamente. \n";
                }
            } else {
                msg += "CNPJ inexistente. Realize um cadastro ou tente novamente. \n";
            }
            if (!msg) {
                const storeSession = {
                    cnpj: jsonRequest['cnpj'],
                    nome: jsonRequest['nome'],
                    email: jsonRequest['email'],
                    telefone: jsonRequest['telefone']
                };

                sessionStorage.setItem("vendedor", JSON.stringify(storeSession));
                navigate("/HomeLoja");
            } else {
                alert(msg);
                msg = "";
            }
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
                    <h1 className="bem">Login de vendedor</h1>
                    <div className="campos">
                        <IMaskInput
                            className="ip"
                            type="text"
                            placeholder="CNPJ"
                            mask="00.000.000/0000-00"
                            value={CNPJ}
                            onChange={e => newValueCNPJ(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ''))}
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

export default LoginLoja;