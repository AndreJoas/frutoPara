import HeaderComponente from "../headerLojacomponente"
import Procurando from "../procurandoComponente"
import star from "../homeComponente/S.svg"
import bag from "../procurandoComponente/bag.svg";
import heart from "../procurandoComponente/heart.svg";
import user from "../procurandoComponente/user.svg";
import "./styles2.css"
import ListaLoja from "../listaLojaComponente";
import ListaLojaProdutos from "../listaLojaProdutoComponente";

export default function HomeLoja() {
    return (
        <body className="corpo">
            <header>
                <HeaderComponente />
            </header>
            <section className="sessao">

                <div className="nomeloja">
                    <div className="perfilLoja">
                        <div className="elipse2"></div>
                        <h3>Nome Loja</h3>
                    </div>
                    <div className="divdados">
                        <div className="dados">
                            <img src={star} />
                            <h2>4.7</h2>
                        </div>
                    </div>
                    <div className="sobre">
                        <h2>Sobre a loja</h2>
                    </div>
                </div>

                <div className="selects">
                    <div className="divisor">
                        <div className="selec1">
                            <h3>Categorias</h3>
                            <select >
                                <option value=""></option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                        <div className="selec1">
                            <h3>Menor Preço</h3>
                            <select >
                                <option value=""></option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                        <div className="selec1">
                            <h3>Mais vendido</h3>
                            <select >
                                <option value=""></option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="icons2">
                        <div className="imgcard2"><img src={user} alt="" /></div>
                        <div className="imgcard2"><img src={heart} alt="" /></div>
                        <div className="imgcard2"><img src={bag} alt="" /></div>
                    </div>
                </div>

                <ListaLojaProdutos/>
            </section>
        </body>
    )
}
