// importamos express
const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();
const checkBody = require("../midlewares/checkBody");

// Endpoint público (no autenticado y no autorizado)
authRouter.get("/public", authController.getPublic);

// Endpoint autenticado para todo usuario registrado
authRouter.post("/autenticado", checkBody, authController.login)

// Endpoint autorizado a administradores
authRouter.post("/autorizado", checkBody, authController.authUser)

module.exports = authRouter;