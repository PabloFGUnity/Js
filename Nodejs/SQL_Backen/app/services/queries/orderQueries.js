const db = require("../mysql")
const md5 = require('md5')
const moment = require('moment');
const utils = require("../../utils/utils");

const orderQueries = {};

orderQueries.addOrder = async (orderData) => {
    let conn = null;
    try {
        conn = await db.createConnection()
        // Creamos un objeto con los datos del usuario que guardar en la base de datos
        let orderObj = {
            product: orderData.product,
            quantity: orderData.quantity,
            idClient: orderData.idClient,
            orderDate: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        return await db.query("INSERT INTO orders SET ?", orderObj, "insert", conn);
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end()
    };
}
/**
 * Query para añadir una relación entre producto y pedido
 * @param {Obj} rProductOrderData
 * @returns id de la relación
 */
orderQueries.addRProductOrder = async (rProductOrderData) => {
    let conn = null;
    try {
        conn = await db.createConnection()
        // Creamos un objeto con los datos del usuario que guardar en la base de datos
        let rProductOrderObj = {
            idProduct: rProductOrderData.idProduct,
            idOrder: rProductOrderData.idOrder
        }
        return await db.query("INSERT INTO r_products_orders SET ?", rProductOrderObj, "insert", conn);
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end()
    };
}


orderQueries.getClientById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('select * from orders where idClient=?',id, 'select', conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

orderQueries.getOrderByReference = async (reference) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('select * from products where reference=?',reference, 'select', conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}



module.exports = orderQueries