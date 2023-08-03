const express = require("express");
const authRouter = express.Router();
const { USERS_BBDD} = require('../bbdd');
const checkEmailPassword = require("../helpers/checkEmailPassword");

authRouter.get("/public",(req,res) => res.send("Endpoint público"));

authRouter.post("/autenticado", (req, res) => {
    const {email,password} = req.body;

    if(!email || !password) return res.sendStatus(400);
    
    try {
        const user = checkEmailPassword(email, password);

        return res.send(`Usuario ${user.name} autenticado`);

    } catch (err) {
        return res.sendStatus(401)
    };

});

authRouter.post("/autorizado", (req, res) => {
    const {email,password} = req.body;

    if(!email || !password) return res.sendStatus(400);
    try {
        const user = checkEmailPassword(email, password);
        if(user.role !== 'admin') return res.sendStatus(403);
        return res.send(`Usuario administrador ${user.name} `);

    } catch (err) {
        return res.sendStatus(401)
    }

})


module.exports = authRouter;