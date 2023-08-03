const express = require('express');
const orderRoute = express.Router();
const orderController = require('../controllers/orderController')

orderRoute.post("/", orderController.addOrder);


module.exports = orderRoute;