import CardLoja from "../cardLojaComponente/index2"
import CardLojaProduto from "../cardLojaProdutoComponente";
import "./styles.css";

function ListaLojaProdutos() {
    return (
        <div className="lista2">
                <div className="numero2">
                    <CardLojaProduto />
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero2">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero2">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero2">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero2">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>

        </div>
    )
}

export default ListaLojaProdutos