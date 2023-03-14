import CardLoja from "../cardLojaComponente/index2"
import "./styles.css";
import { useNavigate } from "react-router-dom";

function ListaLoja() {
    const navigate = useNavigate();
    return (
        <div className="lista">
            <div className="numero1">
                <CardLoja name="NomeLoja1" value="categoria Loja" />
                <CardLoja name="NomeLoja1" value="categoria Loja" />
                <CardLoja name="NomeLoja1" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
            </div>

            <div className="numero1">
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
            </div>
            <div className="numero1">
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
            </div>
            <div className="numero1">
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
            </div>
            <div className="numero1">
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
            </div>
            <div className="numero1">
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
            </div>
            <div className="numero1">
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
                <CardLoja name="NomeLoja" value="categoria Loja" />
            </div>
            <div className="numero1">
                <CardLoja name="Zé variedades" value="Verduras" />
                <CardLoja name="Mix matheus" value="Legumes" />
                <CardLoja name="atacadao" value="fruras" />
                <a onClick={ e => navigate("/HomeLoja")}><CardLoja name="NomeLoja1" value="categoria Loja" /></a>
            </div>
        </div>
    )
}

export default ListaLoja