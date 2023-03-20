import "./styles.css";
import image from "./ft.svg"
import logo from "../logo_header.png"

function InicialComponente() {
    return (
        <body>
            <header className="cabeca">
                <div className="botoes1">
                    <div className="logoHeader">
                        <img  className="lo" src={logo} alt="" />
                    </div>
                    <div className="bot">
                        <a href="/loginPage"><button className="bt1">Entrar</button></a>
                        <a href="/cadastroPage"><button className="bt1" >Cadastrar</button></a>
                    </div>
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
                        <a href="/cadastroPage"><button className="bt2">Cadastrar</button></a>
                        <a href="/loginPage"><button className="bt3" >Ja tenho cadastro </button></a>
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

export default InicialComponente;