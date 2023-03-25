import "./styles.css";
import image from "./ft.svg"
import logo from "../logo-header.png"
import { useNavigate } from "react-router-dom";

function InicialComponenteCliente() {
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
                            <h1>Ir para a feira sem sair de casa?</h1>
                            <h1 className="p1">Cadastre-se e compre frutas, legumes</h1>
                            <h1 className="p1">e muito mais no seu conforto!</h1>
                    </div>
                    <div className="botoes2">
                        <a onClick={ e => navigate("/cadastroPage")}><button className="bt2">Cadastrar</button></a>
                        <a onClick={ e => navigate("/loginPage")}><button className="bt3" >Ja tenho cadastro </button></a>
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

export default InicialComponenteCliente;