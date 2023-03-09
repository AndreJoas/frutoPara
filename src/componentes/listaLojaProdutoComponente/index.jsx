import CardLoja from "../cardLojaComponente/index2"
import CardLojaProduto from "../cardLojaProdutoComponente";
import "./styles.css";

function ListaLojaProdutos() {
    return (
        <div className="lista">
                <div className="numero1">
                    <CardLojaProduto />
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero1">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero1">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero1">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>
                <div className="numero1">
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                    <CardLojaProduto/>
                </div>

        </div>
    )
}

export default ListaLojaProdutos