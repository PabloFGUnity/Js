const {v4: uuidv4 } = require('uuid');
const checkEmailPassword = require("../helpers/checkEmailPassword");
const userModel = require('../schemas/userSchema');
const sessions = [];

const authSessionController = {}


// authSessionController.login = async (req, res) => {
//     const {email,password} = req.body;
//     if(!email || !password) return res.sendStatus(400);

//     try {

//         const {guid} = await checkEmailPassword(email, password);
//         const sessionId = uuidv4();
//         console.log(sessionId);
//         sessions.push({sessionId, guid});
//         res.cookie('sessionId', sessionId, {httpOnly: true})
//         return res.send(`Usuario logeado`);

//     } catch (err) {
//         return res.sendStatus(401);
//     };
// }

authSessionController.login = async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password) return res.sendStatus(400);

    try {

        const user = await checkEmailPassword(email, password);
        console.log(user);
        const sessionId = uuidv4();
        console.log(sessionId);
        await userModel.findByIdAndUpdate(user._id,{sessionId})
        res.cookie('sessionId', sessionId, {httpOnly: true})
        return res.send(`Usuario logeado`);

    } catch (err) {
        return res.sendStatus(401);
    };
}


authSessionController.profile = async (req, res) => {
    const {cookies} = req;
    console.log(cookies);
    if(!cookies.sessionId) return res.sendStatus(401)

    const user = await userModel.findOne({ sessionId: cookies.sessionId });;
    if(!user) return res.sendStatus(401);

    delete user.password
    console.log(user);
    return res.send(user)
}




module.exports = authSessionController;