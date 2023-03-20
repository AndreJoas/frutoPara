import "./styles.css"
import log from "./logo_header.png"

function HeaderProdutos(){
    return(
            <header className="head">
                <div className="logo"><img src={log} alt="" /></div>
                <div className="headerCenter">
                    <a href=""><h3>Lojas</h3></a>
                    <a href=""><h3>Categoria</h3></a>
                    <a href="/HomeLoja"><h3>Voltar</h3></a>
                </div>
                <div className="ajuda">Ajuda</div>
            </header>
    )
}
export default HeaderProdutos;