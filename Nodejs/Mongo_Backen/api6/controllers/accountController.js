const userModel = require('../schemas/userSchema');
const md5 = require('md5')
const {v4: uuidv4} = require('uuid')

const accountController = {};

accountController.listUser = async (req, res) => {
   
    const user = await userModel.findById(req.params.guid);

    if(!user) return res.status(404).send('La cuenta no existe')

    return res.send(user);
}


accountController.addUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!email || !password) return res.status(400).send();

    const user = await userModel.findOne({ email });

    if(user) return res.status(409).send('La cuenta ya existe');

    const newUser = new userModel({ _id: uuidv4(), name, email, role, password: md5(password) });

    await newUser.save()

    return res.send(newUser);
}

accountController.updateUser = async (req, res) => {
    const {guid} = req.params;

    const {name,location} = req.body

    if (!name) return res.status(400);

    const user = await userModel.findById(guid);
    if (!user) return res.status(404).send("La cuenta no existe");

    user.name = name
    await user.save();

    return res.send(user)
}

accountController.deleteUser = async (req, res) => {
    const {guid} = req.params;

    const user = await userModel.findById(guid);

    if (!user) return res.status(404).send("La cuenta no existe");

    await user.deleteOne()

    return res.send("Usuario eliminado")
}

module.exports = accountController