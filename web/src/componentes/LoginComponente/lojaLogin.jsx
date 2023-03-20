import "./styles.css";
import { useNavigate } from "react-router-dom";


function LoginLoja() {
    const navigate = useNavigate();
    return (
        <body>
            <header>
                <div className="logo">logo</div>
            </header>
            <section className="login">
                <div className="forme">
                    <h1 className="bem">Bem vindo ao Login</h1>
                    <div className="perfil">
                        <button id="btt"><a onClick={ e => navigate("/loginPage")} style={{ textDecoration: "none", color: "#000000" }}>Cliente/PF</a></button>
                        <button id="btt2" ><a onClick={ e => navigate("/lojaLoginPage")} style={{ textDecoration: "none", color: "#000000" }}>Loja/PJ</a></button>
                    </div>
                    <div className="campos">
                        <input className="ip" type="name" placeholder="nome" />
                        <input className="ip" type="senha" placeholder="senha Loja" />
                    </div>
                    <a onClick={ e => navigate("/HomeLoja")}><button className="entrar">Entrar</button></a>
                </div>
            </section>
            <a onClick={ e => navigate("/inicioPage")} className="voltar">Voltar</a>
        </body>

    )
};

export default LoginLoja;