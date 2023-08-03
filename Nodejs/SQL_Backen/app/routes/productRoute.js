const express = require('express');
const productRoute = express.Router();
const productController = require('../controllers/productController')

productRoute.post("/upload", productController.uploadImage);
productRoute.post("/", productController.addProduct);
productRoute.get("/image/:id", productController.getImage);
productRoute.get("/file/:id", productController.getFile);
productRoute.get("/:id", productController.getProduct)

module.exports = productRoute;