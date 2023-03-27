import "./stylesProdutos.css";
import logo from "../logo-header.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { buscaProdutoPorLoja } from "../../scripts/products.js";

export default function HomeLojaProdutos() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userExist, setUserExist] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const recoveredStore = sessionStorage.getItem("vendedor");

        if(recoveredStore){
            setUserExist(true);
            setUser(JSON.parse(recoveredStore));
        }      
        
        setLoading(false);
    }, []);

    useEffect(() => {
        if(user){
            buscaProdutoPorLoja(user['cnpj']).then((data) => {
                const jsonResult = data['result'];
                setImages(jsonResult);
            }).catch((error) => {
                console.error(error)
            });
        }
    }, [user]);

    return (
        <div>
            <header className="cabeca">
                        <div className="logoHeaderCadastro">
                            <img src={logo} alt="" />
                        </div>
            </header>
            <div className="TituloLojaProdutos">
                <h2>Produtos disponíveis na minha loja</h2>
            </div>
            <div className="allProducts">
                {images.map((element, index) => (
                    <div className="mainProdutos">
                        <div className="produtoEspecifico">
                                <img src={element.imagem_produto}/>
                                <h2>{element.nome}</h2>
                                <p>Categoria: {element.categoria}</p>
                                <p>Preço (unidade): R${element.preco_unidade}</p>
                                <p>Quant. Disponível: {element.quant_disponivel}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
