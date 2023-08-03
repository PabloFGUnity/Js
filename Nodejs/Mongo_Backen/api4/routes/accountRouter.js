const express = require('express');
const accountRouter = express.Router();
const { USERS_BBDD} = require('../bbdd');


accountRouter.use((req,res,next) => {
    console.log("Se ejecuta nuestra función definidia en el middleware de account");
    next();
})

accountRouter.get('/:guid', (req, res) => {
    const {guid} = req.params;
    const user = USERS_BBDD.find(user => user.guid === guid);

    if(!user) return res.status(404).send('La cuenta no existe')

    return res.send(user)
});

accountRouter.post('/', (req, res) => {
    const {guid,name} = req.body;

    if(!guid || !name) return res.status(400).send('Error en el body');

    const user = USERS_BBDD.find(user => user.guid === guid);

    if(user) return res.status(409).send('La cuenta ya existe');

    USERS_BBDD.push({guid,name});

    return res.sendStatus(201);
});

accountRouter.patch('/:guid', (req, res) => {
    const {guid} = req.params;
    const {name} = req.body

    if (!name) return res.status(400);
    const user = USERS_BBDD.find(user => user.guid === guid);
    if (!user) return res.status(404).send("La cuenta no existe");
    user.name = name

    return res.send(user)

});

accountRouter.delete('/:guid', (req, res) => {
    const {guid} = req.params;
    const userIndex = USERS_BBDD.findIndex(user => user.guid === guid);

    if(userIndex === -1) return res.status(404).send('La cuenta no existe');

    USERS_BBDD.splice(userIndex,1);

    return res.sendStatus(200)
});

module.exports = accountRouter;
