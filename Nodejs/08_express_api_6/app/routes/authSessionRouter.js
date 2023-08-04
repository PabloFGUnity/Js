// importamos express y la función para validar email y password
const express = require("express");
const authSessionController = require("../controllers/authSessionController");
const authSessionRouter = express.Router();
const checkBody = require("../midlewares/checkBody");


// Solicitud para autenticar un usuario, crear una sesión  y enviarla por la cabecera de la cookie
authSessionRouter.post("/login", checkBody, authSessionController.login)

 // Solicitud autenticada con sesión para obtener el perfil del usuario
authSessionRouter.get("/profile", authSessionController.getProfile)

module.exports = authSessionRouter;