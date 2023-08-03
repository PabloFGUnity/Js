const express = require("express");
const authSessionController = require("../controllers/authSessionController");
const  authSessionRouter = express.Router();

authSessionRouter.post("/login",authSessionController.login);

authSessionRouter.get("/profile", authSessionController.profile);

module.exports = authSessionRouter;