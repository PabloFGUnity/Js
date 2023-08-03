const express = require('express');
const userController = require("../controllers/userController")
const userRoute = express.Router();

userRoute.post("/", userController.addUser);
userRoute.post("/login", userController.loginUser)
userRoute.delete("/:id",userController.deleteUser)
userRoute.patch("/:id", userController.updateUser)


module.exports = userRoute;