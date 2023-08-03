const db = require("../mysql")
const md5 = require('md5')
const moment = require('moment');
const utils = require("../../utils/utils");

const productQueries = {};

productQueries.addImage = async (imagenData) => {
    let conn = null;
    try {
        conn = await db.createConnection();

        let imageObj = {
            name: imagenData.name,
            path: imagenData.path,
            productId: imagenData.productId,
            registerDate : moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        return await db.query("INSERT INTO images SET ?", imageObj, "insert", conn);

    } catch (err) {
        console.log(err.message);
        throw new Error (err);
    } finally {
        conn && (await conn.end());
    }
};

productQueries.addProduct = async ( productData) => {
    let conn = null;
    try {
        conn = await db.createConnection();

        let productObj = {
            name: productData.name,
            description: productData.description,
            reference: productData.reference,
            stock: productData.stock,
            price: productData.price,
            registerDate : moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        await utils.removeUndefinedKeys(productObj)

        return await db.query("INSERT INTO products SET ?", productObj, "insert", conn);

    } catch (err) {
        console.log(err.message);
        throw new Error (err);
    } finally {
        conn && (await conn.end());
    }
}

productQueries.getImageById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('select * from images where id=?',id, 'select', conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}
productQueries.getProductByReference = async (reference) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('select * from products where reference=?', reference, 'select', conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

productQueries.getProductById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('select * from products where id=?', id, 'select', conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}




module.exports = productQueries