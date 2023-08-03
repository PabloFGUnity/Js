const { insertUsuario, clearDatabase } = require("./modelo");

function login(email, password, findByEmail) {
    const usuario = findByEmail(email);

    return usuario && usuario.password == password;
}

function registro(email, password) {
    insertUsuario(email, password);
}

module.exports =  { login, registro, clearDatabase };