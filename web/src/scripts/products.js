let port = '7070';
let urlApi = "http://localhost:" + port;

export const addProduto = (data) => {
    fetch(`${urlApi}/api/products/insert`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export const buscaProdutoPorLoja = async (cnpj) => {
    try {
        const response = await fetch(`${urlApi}/api/products/findAll/${cnpj}`, {
            method: "GET"
        });     
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const buscaProdutos = async () => {
    try {
        const response = await fetch(`${urlApi}/api/products/findAll`, {
            method: "GET"
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const buscaProdutoEspecifico = async (codigo) => {
    try {
        const response = await fetch(`${urlApi}/api/products/getOne/${codigo}`, {
            method: "GET"
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}