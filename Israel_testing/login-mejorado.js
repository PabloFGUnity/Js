let usuarios = [];

function login(email, password) {
    let result = false;

    for (const u of usuarios) {
        if (u.email === email && u.password === password) {
            result = true;
        }
    }

    return result;
}

function registro(email, password) {
    usuarios.push({ email: email, password: password });
}

function clearDatabase() {
    usuarios = [];
}

module.exports =  { login, registro, clearDatabase };