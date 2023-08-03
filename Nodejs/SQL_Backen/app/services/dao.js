const orderQueries = require('./queries/orderQueries');
const productQueries = require('./queries/productQueries');
const userQueries = require('./queries/userQueries');

const dao = {};

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);
dao.getUserById = async(id) => await userQueries.getUserById(id);
dao.addUser = async (userData) => await userQueries.addUSer(userData);
dao.deleteUser = async(id) => await userQueries.deleteUser(id);
dao.updateUser = async(id,userData) => await userQueries.updateUser(id,userData)

dao.addImage = async (imageData) => await productQueries.addImage(imageData)
dao.addProduct = async (productData) => await productQueries.addProduct(productData)
dao.getImageById = async(id) => await productQueries.getImageById(id)
dao.getProductById = async(id) => await productQueries.getProductById(id)
dao.getProductByReference = async(reference) => await productQueries.getProductByReference(reference)

dao.addOrder = async(orderData) =>  await orderQueries.addOrder(orderData)
dao.addRProductOrder = async(rProductOrderData) =>  await orderQueries.addRProductOrder(rProductOrderData)


module.exports = dao;