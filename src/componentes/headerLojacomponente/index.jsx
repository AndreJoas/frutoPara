import "./styles.css"

function HeaderComponente(props){
    return(
            <header className="head">
                <div className="logo">LOGO</div>
                <div className="headerCenter">
                    <a href=""><h3>Lojas</h3></a>
                    <a href=""><h3>Categoria</h3></a>
                    <a href="/lojaLoginPage"><h3>Voltar</h3></a>
                </div>
                <div className="ajuda">Ajuda</div>
            </header>
    )
}
export default HeaderComponente;