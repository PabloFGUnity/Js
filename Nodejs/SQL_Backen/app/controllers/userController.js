const dao = require("../services/dao")
const { SignJWT, jwtVerify } = require("jose")
const md5 = require('md5')


const userController = {};

userController.addUser = async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;


    if(!name || !email || !password) return res.status(400).send("Error al recibir el body")

    try {
        const user = await dao.getUserByEmail(email)
        if ( user.length > 0) return res.status(409).send("usuario ya registrado");

        const addUSer = await dao.addUser(req.body)
        console.log(addUSer);
        if (addUSer) return res.send(`Usuario ${name} con id: ${addUSer} registrado`)
    } catch(e) {
        console.log(e.message);
        throw new Error(e)
    }

}

userController.loginUser = async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password) return res.sendStatus(400);
    try {

        let user = await dao.getUserByEmail(email);
        [ user ]= user;
        if(!user) return res.status(404).send("Usuario no econtrado")
        if(md5(password) !== user.password) return res.status(401).send("password incorrecta")
        const jwConstructor = new SignJWT({
            id: user.id,
            userRole: user.userRole  
        })

        const encoder = new TextEncoder();

        const jwt = await jwConstructor
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));

        console.log(user);
        return res.send({jwt})

    } catch (err)   {
        console.log(err);
        return res.sendStatus(401);
    }
}


userController.deleteUser = async (req, res) => {
    const {id} = req.params

    const {authorization} = req.headers

    if(!authorization) return res.sendStatus(401);

    const token = authorization.split(" ")[1]

    let user = await dao.getUserById(id);
    [user] = user;
    if(!user) return res.status(400).send("El usuario no existe")

    try {

        const encoder = new TextEncoder();

        const {payload} = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
        )
        console.log(payload);
        if(!payload.userRole) return res.status(409).send("no tiene permiso de administrador")

        const user = await dao.getUserById(id)

        if(user.length <= 0) return res.status(404).send("El usuario no existe")
        
        const deleteUser = await dao.deleteUser(id);

        if(deleteUser) return res.send(`Usuario eliminado con id ${id} eliminado`);
        else return  res.sendStatus(204)
        
    } catch (err)   {
        console.log(err.message);
        throw new Error(err)
    }
}

userController.updateUser = async (req, res) => {
    const { id } = req.params

    const {authorization} = req.headers;

    if(!authorization) return res.sendStatus(401);

    if(Object.entries(req.body).length === 0) return res.status(400).send("Error al recibir el body")

    const token = authorization.split(" ")[1]

    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET)
            );
        console.log(payload.id);
        console.log(id);
        if(payload.id !== Number(id)) return res.status(401).send("Usuario no autorizado")

        const updateUser = await dao.updateUser(id, req.body)
        if ( updateUser) return res.send(`Usuario con id ${id} actualizado`)

    } catch (err)   {
        console.log(err);
        throw new Error(err.message);
    }

}


module.exports = userController;