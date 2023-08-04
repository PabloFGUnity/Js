const accountController = require('../controllers/accountController');

// importamos express
const express = require("express");
// importamos el archivo bbdd.js
// Creamos un router
const accountRouter = express.Router();

// Obtener los detalles de una cuenta a partir del guid
accountRouter.get('/:guid', accountController.getUser)
// Crear una nueva cuenta
accountRouter.post('/', accountController.addUser)
// Actualizar el nombre de una cuenta
accountRouter.patch('/:guid', accountController.updateUser)
// Eliminar una cuenta
accountRouter.delete('/:guid', accountController.deleteUser)

module.exports = accountRouter;