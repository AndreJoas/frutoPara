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