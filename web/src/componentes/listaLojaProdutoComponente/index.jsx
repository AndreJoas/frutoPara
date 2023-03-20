import CardLoja from "../cardLojaComponente/index2"
import CardLojaProduto from "../cardLojaProdutoComponente";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function ListaLojaProdutos() {
    const navigate = useNavigate();
    return (
        <div className="lista2">
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>

            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>

            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>

            <br></br>
            
           
            <div className="numero2">
                <a className="lincagem" onClick={ e => navigate("")}><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
            </div>
            <div className="numero2">
                <a className="lincagem" onClick={ e => navigate("")}><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
            </div>
            <div className="numero2">
                <a className="lincagem" onClick={ e => navigate("")}><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
            </div>
            <div className="numero2">
                <a className="lincagem" onClick={ e => navigate("")}><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
            </div>
            <div className="numero2">
                <a className="lincagem" onClick={ e => navigate("")}><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
                <a className="lincagem" ><CardLojaProduto /></a>
            </div>

        </div>
    )
}

export default ListaLojaProdutos