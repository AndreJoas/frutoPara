import "./styles.css";
import image from "./ft.svg"
import logo from "../logo-header.png"
import { useNavigate } from "react-router-dom";

function InicialComponenteVendedor() {
    const navigate = useNavigate();
    return (
        <body>
            <header className="cabeca">
                <div className="logoHeaderCadastro">
                    <img src={logo} alt="" />
                </div>
            </header>
            <section>
                <div className="div1">
                    <div className="textos">
                        <h1>Olá, parceiro! Chegou o momento da sua loja vender no Frutos do Pará</h1>
                        <p>Cadastra-se e vamos iniciar sua jornada</p>
                    </div>
                    <div className="botoes2">
                        <a onClick={e => navigate("/lojaCadastroPage")}><button className="bt2">Cadastrar</button></a>
                        <a onClick={e => navigate("/loginPage")}><button className="bt3" >Ja tenho cadastro </button></a>
                    </div>
                </div>
                <div className="div2">
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </section>
        </body>
    )
};

export default InicialComponenteVendedor;