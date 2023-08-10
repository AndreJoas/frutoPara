let port = '7070';
let urlApi = "http://localhost:" + port;

export const createTrailEvent = async (codigo_venda) => {
    try {
        const response = await fetch(`${urlApi}/api/trail/insert/${codigo_venda}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
