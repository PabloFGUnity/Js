const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

authRouter.get("/public",authController.getPublic);

authRouter.post("/autenticado", authController.loginAutenticado);

authRouter.post("/autorizado", authController.loginAutorizado)


module.exports = authRouter;