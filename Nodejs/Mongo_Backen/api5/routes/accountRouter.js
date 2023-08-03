const express = require('express');
const accountRouter = express.Router();
const accountController = require('../controllers/accountController');

accountRouter.use((req,res,next) => {
    console.log("Se ejecuta nuestra función definidia en el middleware de account");
    next();
})

accountRouter.get('/:guid', accountController.listUser);

accountRouter.post('/', accountController.addUser);

accountRouter.patch('/:guid', accountController.updateUser);

accountRouter.delete('/:guid', accountController.deleteUser);

module.exports = accountRouter;
