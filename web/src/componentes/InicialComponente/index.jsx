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
                            <h1>Imagine comprar ou vender sem sair de casa...</h1>
                            <p>Você está no lugar certo! O Frutos do Pará é uma plataforma de compra e vendas de alimentos online</p>
                    </div>
                    <div className="botoes2Inicial">
                        <a onClick={ e => navigate("/inicioPageCliente")}><button className="bt2Inicial">Cliente</button></a>
                        <a onClick={ e => navigate("/InicioPageVendedor")}><button className="bt3Inicial" >Vendedor</button></a>
                    </div>
                </div>
            </section>
        </body>
    )
};

export default InicialComponente;