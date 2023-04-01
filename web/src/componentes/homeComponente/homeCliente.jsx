import "./styles.css";
import logo from "../logo-header.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { buscaProdutos } from "../../scripts/products.js";
import { Link } from "react-router-dom";

export default function HomeLojaProdutos() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userExist, setUserExist] = useState(false);
    const [images, setImages] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const imagensFiltradas = categoriaSelecionada ? images.filter((produto) => produto.categoria === categoriaSelecionada).sort(() => Math.random() - 0.5) : images.sort(() => Math.random() - 0.5);

    useEffect(() => {
        const recoveredStore = sessionStorage.getItem("usuario");

        if(recoveredStore){
            setUserExist(true);
            setUser(JSON.parse(recoveredStore));
        }
        
        setLoading(false);
    }, []);

    useEffect(() => {
        if(user){
            buscaProdutos().then((data) => {
                const jsonResult = data['result'];
                setImages(jsonResult);
            }).catch((error) => {
                console.error(error)
            });
        }
    }, [user]);

    const handleCategoriaClick = (categoria) => {
        setCategoriaSelecionada(categoria);
    };

    return (
        <div>
            <header className="cabeca">
                        <div className="logoHeaderCadastro">
                            <img src={logo} alt="" />
                        </div>
            </header>
            <div className="TituloLojaProdutos">
                <h2>Olá { user ? user['nome'] : null}! Boas compras.</h2>
            </div>
            <div className="categorias">
                <h2 onClick={() => handleCategoriaClick("Frios")}><a>Frios</a></h2>
                <h2 onClick={() => handleCategoriaClick("Frutas")}><a>Frutas</a></h2>
                <h2 onClick={() => handleCategoriaClick("Legumes")}><a>Legumes</a></h2>
                <h2 onClick={() => handleCategoriaClick("Verduras")}><a>Verduras</a></h2>
                <h2 onClick={() => handleCategoriaClick(false)}><a>Todas as categorias</a></h2>
            </div>
            <div className="allProducts">
                {imagensFiltradas.map((element, index) => (
                    <div className="mainProdutos">
                        <Link to={`/Produto/${element.codigo}`}>
                            <div className="produtoEspecifico">
                                    <img src={element.imagem_produto}/>
                                    <h2>{element.nome}</h2>
                                    <p>Categoria: {element.categoria}</p>
                                    <p>Quant. Disponível: {element.quant_disponivel}</p>
                                    <p>Preço (unidade): R${element.preco_unidade}</p>
                                    <p>Nome da Loja: {element.nome_loja}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
