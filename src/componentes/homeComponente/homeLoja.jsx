import HeaderComponente from "../headerLojacomponente"
import Procurando from "../procurandoComponente"
import star from "../homeComponente/S.svg"
import "./styles2.css"

export default function HomeLoja() {
    return (
        <body className="corpo">
            <header>
                <HeaderComponente />
            </header>
            <section className="sessao">
                <Procurando />

                <div className="nomeloja">
                    <div className="perfilLoja">
                        <div className="elipse2"></div>
                        <h3>Nome Loja</h3>
                    </div>
                    <div className="divdados">
                        <div className="dados">
                            <img src={star}/>
                            <h2>4.7</h2>
                        </div>
                    </div>
                    <div className="sobre">
                            <h2>Sobre a loja</h2>
                    </div>
                </div>
            </section>
        </body>
    )
}
