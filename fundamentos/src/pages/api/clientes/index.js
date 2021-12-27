import handler from "../hello"

export default function cliente(req, res) {

    if (req.method === "GET") {
        clienteGet(req, res)
    } else {
        res.status(405).send('Não encontrado')
    }
}

function cliente(req, res) {
    res.status(200).json({
        "id": 1,
        "nome": "Arlan Marreiro",
        "idade": 3
    })
}