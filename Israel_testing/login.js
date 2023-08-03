const usuarios = [{ email: "israel@mail.com", password: "12345678" }];

function login(email, password) {
    if (email === usuarios[0].email && password === usuarios[0].password) {
        return true;
    } else {
        return false;
    }
}

module.exports = login;