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
                    <div className="textosInicial">
                            <h1>Bem-vindo ao Frutos do Pará é uma plataforma de compra e vendas de alimentos online.</h1>
                    </div>
                    <div className="botoes2Inicial">
                        <a onClick={ e => navigate("/cadastroPage")}><button className="bt2Inicial">Cliente</button></a>
                        <a onClick={ e => navigate("/loginPage")}><button className="bt3Inicial" >Vendedor</button></a>
                    </div>
                </div>
            </section>
        </body>
    )
};

export default InicialComponente;