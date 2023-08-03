let usuarios = [];

function insertUsuario(email, password) {
    usuarios.push({ email: email, password: password });
}

function findByEmail(email) {
    for (const u of usuarios) {
        if (u.email === email) {
            return u;
        }
    }

    return false;
}

function clearDatabase(array) {
    array = [];
}

module.exports = { insertUsuario, findByEmail, clearDatabase , usuarios };