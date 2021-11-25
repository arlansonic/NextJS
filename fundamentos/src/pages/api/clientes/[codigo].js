export default function cliente(req, res) {
    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        nome: `Arlan Marreiro${codigo}`,
        email: `arlan.marreiro${codigo}@gmail.com`
    })
}