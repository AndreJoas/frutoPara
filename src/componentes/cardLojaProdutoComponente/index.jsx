import NomeProduto from "./propscard";
import NomeLojas from "./nome";
import NomeVendedores from "./nameVendedores";
import Valor from "./valor";
import ValorRs from "./valor2.jsx";
import Qauntidade from "./quantidade";
import "./styles.css"

function CardLojaProduto() {
    return (
        <div className="cardl">
            <div className="elipsel"></div>
            <div className="card2">
                <NomeProduto name="Nome Produto" />
                <NomeLojas name="Loja"/>
                <NomeVendedores name="Vendedor"/>
            </div>
            <hr />
            <div className="divi1">
                <div className="divi">
                    <ValorRs name="R$" />
                    <Valor name="XXX,xx" />
                </div>
                <Qauntidade name="Quant" />
            </div>
        </div>
    )
}
export default CardLojaProduto;