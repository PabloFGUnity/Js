let usuarios = [];

function login (email, password) {
    for(let i=0; i < usuarios.length; i++)
    {
        if (email === usuarios[i].email && password === usuarios[i].password)
        {

            return true

        } 
    }

    return false
    
}

function registro (email, password) {
    usuarios.push( { email: email, password: password})
    
}

function borrar ()
{
    usuarios = []
}

module.exports = {login, registro, borrar};
