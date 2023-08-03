const checkEmailPassword = require("../helpers/checkEmailPassword");

const authController = {}

authController.getPublic = (req, res) => {
    res.send("Endpoint público")
}

authController.loginAutenticado = async (req, res) => {
    const {email,password} = req.body;

    if(!email || !password) return res.sendStatus(400);
    
    try {
        const user = await checkEmailPassword(email, password);

        return res.send(`Usuario ${user.name} autenticado`)

    } catch (err) {
        return res.sendStatus(401)
    }
}

authController.loginAutorizado = async (req, res) => {
    const {email,password} = req.body;

    if(!email || !password) return res.sendStatus(400);
    try {
        const user = await checkEmailPassword(email, password);
        if(user.role !== 'admin') return res.sendStatus(403);
        return res.send(`Usuario administrador ${user.name} `);

    } catch (err) {
        return res.sendStatus(401)
    }
}

module.exports = authController;