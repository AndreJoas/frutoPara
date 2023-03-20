import "./styles.css";
import { useNavigate } from "react-router-dom";

function HeaderComponente(props){
    const navigate = useNavigate();
    return(
            <header className="head">
                <div className="logo">LOGO</div>
                <div className="headerCenter">
                    <a onClick={ e => navigate("")}><h3>Lojas</h3></a>
                    <a onClick={ e => navigate("")}><h3>Categoria</h3></a>
                    <a onClick={ e => navigate("/HomeCliente")}><h3>Voltar</h3></a>
                </div>
                <div className="ajuda">Ajuda</div>
            </header>
    )
}
export default HeaderComponente;