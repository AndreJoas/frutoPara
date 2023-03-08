import Destaques from "../DestaquesComponente"
import Procurando from "../procurandoComponente"
import wel from "../homeComponente/w.svg";
import manga1 from "../homeComponente/E1.png";
import manga2 from "../homeComponente/E2.png";
import loja from "../homeComponente/lojas.svg"


import "./styles.css"
import ListaLoja from "../listaLojaComponente";

export default function HomeCliente() {
    return (
        <body className="cliente">
            <header>
                <div className="logo">logo</div>
                <div className="headerCenter">
                    <a href=""><h3>Lojas</h3></a>
                    <a href=""><h3>Categoria</h3></a>
                    <a href="/lojacadastroPage"><h3>Cadastrar Loja</h3></a>
                </div>
            </header>
            <section className="sessao">
                <div className="divisao1">
                    <div className="subdivisao">
                        <div className="frutas">
                            <div style={{ position: 'relative', marginTop: '-2.3rem' }}><img className="ft" src={manga1} alt="" /></div>
                            <div style={{ marginTop: '-17.3rem', marginLeft: '3.4rem' }} ><img className="ft2" src={manga2} alt="" /></div>
                        </div>
                        <div className="textos2">
                            <h2>Bem vindo ao Frutos do Pará,</h2>
                            <h2 className="tx2">aproveite e boas compras!!</h2>
                        </div>
                    </div>
                    <div className="image"><img className="wel" src={wel} alt="" /></div>
                </div>
                <Procurando />
                <Destaques />
                <div className="lojasparte">
                    <div className="pesquLojas">
                        <div><img src={loja} />LOJAS</div>
                        <div className="divip"><input  className="ip1" type="text" name="" value="" placeholder="Encontra uma loja" /></div>
                    </div>
                    <hr />
                    <ListaLoja/>
                </div>
            </section>

        </body>
    )
}