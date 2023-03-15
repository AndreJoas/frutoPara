let port = '7070';
let urlApi = "http://localhost:" + port;

export const addPessoa = (data) => {
    fetch(`${urlApi}/api/persons/insert/CLIENTE`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export const buscaLogin = async (email) => {
    try {
        const response = await fetch(`${urlApi}/api/persons/getOne/${email}`, {
            method: "GET"
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}