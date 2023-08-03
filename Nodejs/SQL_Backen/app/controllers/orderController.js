const path = require("path");
const fs = require("fs");
const dao = require("../services/dao");
const mime = require("mime");
const { jwtVerify } = require("jose");


const orderController = {};

orderController.addOrder = async (req, res) => {
    // Obtenemos la cabezara para coger el token
    const { authorization } = req.headers
    // Si no existe el token enviamos un 401 (unauthorized)
    if (!authorization) return res.sendStatus(401)
    // Obtenemos el token (eliminamos 'bearer')
    const token = authorization.split(' ')[1]
    // Si no existe el body enviamos un 400 (bad request)
    if (Object.entries(req.body).length === 0) return res.sendStatus(400)
    // Extraemos el body de la petición
    const { product, quantity } = req.body
    try {
        // Obtenemos el id del usario
        const encoder = new TextEncoder()
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        )
        const idClient = payload.id //id del usuario que hace el pedido
        // Obtenemos el id del producto por la referencia (product)
        const getProduct = await dao.getProductByReference(product)
        if (getProduct.length === 0 ) return res.sendStatus(404)
        const idProduct = getProduct[0].id
        // Añadimos la orden
        const idOrder = await dao.addOrder({ product, quantity, idClient})
        if(!idOrder) return res.sendStatus(500);

        const addRpo = await dao.addRProductOrder({ idProduct, idOrder});
        if(!addRpo) return res.sendStatus(500);

        return res.sendStatus(200)

    } catch (e) {
        console.log(e.message)
    }
}

module.exports = orderController;