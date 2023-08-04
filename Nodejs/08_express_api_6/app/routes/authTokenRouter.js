// importamos express y la función para validar email y password
const express = require("express");
const authTokenController = require("../controllers/authTokenController");
const validateLoginDto = require("../midlewares/validateLoginDto");
const checkBody = require("../midlewares/checkBody");

const authTokenRouter = express.Router();

// Login con email y password generando un token
authTokenRouter.post("/login", checkBody, validateLoginDto, authTokenController.login);

// Solicitud autenticada con token para obtener el perfil del usuario
authTokenRouter.get("/profile", authTokenController.getProfile)

module.exports = authTokenRouter;