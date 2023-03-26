let port = '7070';
let urlApi = "http://localhost:" + port;

export const addLoja = (data) => {
    fetch(`${urlApi}/api/store/insert`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export const buscaLoja = async (cnpj) => {
    try {
        const response = await fetch(`${urlApi}/api/store/getOne/${cnpj}`, {
            method: "GET"
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}