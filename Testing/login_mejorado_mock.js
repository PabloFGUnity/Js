
function login(email, password, findByEmail) {
    const usuario = findByEmail(email);

    return usuario && usuario.password == password;
}

function registro(email, password, registro) {
    registro(email,password)
}

function clearDatabase(array, borrar) {
    borrar(array)
}



module.exports =  { login, registro, clearDatabase };