const {v4: uuidv4 } = require('uuid');
const checkEmailPassword = require("../helpers/checkEmailPassword");
const { USERS_BBDD } = require("../bbdd");

const sessions = [];

const authSessionController = {}


authSessionController.login = (req, res) => {
    const {email,password} = req.body;
    if(!email || !password) return res.sendStatus(400);

    try {

        const {guid} = checkEmailPassword(email, password);
        const sessionId = uuidv4();
        console.log(sessionId);
        sessions.push({sessionId, guid});
        res.cookie('sessionId', sessionId, {httpOnly: true})
        return res.send(`Usuario logeado`);

    } catch (err) {
        return res.sendStatus(401);
    };
}

authSessionController.profile = (req, res) => {
    const {cookies} = req;
    console.log(cookies);
    if(!cookies.sessionId) return res.sendStatus(401)

    const userSession = sessions.find((session) => session.sessionId === cookies.sessionId);
    if(!userSession) return res.sendStatus(401);

    const user = USERS_BBDD.find((user) => user.guid === userSession.guid);
    if(!user) return res.sendStatus(401);

    delete user.password

    return res.send(user)
}




module.exports = authSessionController;