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
