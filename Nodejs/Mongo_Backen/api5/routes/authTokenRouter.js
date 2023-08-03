const express = require("express");
const validateLoginDto = require('../middleware/validateLoginDto');
const authTokenController = require("../controllers/authTokenController");

const  authTokenRouter = express.Router();



authTokenRouter.post("/login",validateLoginDto, authTokenController.login);

authTokenRouter.get("/profile", authTokenController.getProfile)



module.exports = authTokenRouter;