const usuarios = [{ email: "@email.com", password: "1234"}];

function login (email, password) {
    if (email === usuarios[0].email && password === usuarios[0].password)
    {
        return true
    } else {
        return false
    }
}



module.exports = login;