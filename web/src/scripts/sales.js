let port = '7070';
let urlApi = "http://localhost:" + port;

export const addVenda = async (data) => {
    try {
        const response = await fetch(`${urlApi}/api/sales/insert`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const buscaVendasPorLoja = async (cnpj) => {
    try {
        const response = await fetch(`${urlApi}/api/sales/findAll/${cnpj}`, {
            method: "GET"
        });     
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}