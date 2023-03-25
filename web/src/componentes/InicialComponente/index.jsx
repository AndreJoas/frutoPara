import "./styles.css";
import logo from "../logo-header.png"
import { useNavigate } from "react-router-dom";

function InicialComponente() {
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
                            <h1>Frutos do Pará é uma plataforma de compra e vendas de alimentos online.</h1>
                            <h1 className="p1">Cadastre-se e compre frutas, legumes</h1>
                            <h1 className="p1">e muito mais no seu conforto!</h1>
                    </div>
                    <div className="botoes2">
                        <a onClick={ e => navigate("/cadastroPage")}><button className="bt2">Cadastrar</button></a>
                        <a onClick={ e => navigate("/loginPage")}><button className="bt3" >Ja tenho cadastro </button></a>
                    </div>
                </div>
            </section>
        </body>
    )
};

export default InicialComponente;