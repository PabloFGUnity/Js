const { SignJWT, jwtVerify } = require("jose")
const checkEmailPassword = require("../helpers/checkEmailPassword");
const { USERS_BBDD } = require("../bbdd");


const authTokenController = {}


authTokenController.login = async (req, res) => {

    const {email,password} = req.body;
    if(!email || !password) return res.sendStatus(400);

    try {
        const {guid} = checkEmailPassword(email, password);
        const jwConstructor = new SignJWT({guid})

        const encoder = new TextEncoder();

        const jwt = await jwConstructor
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(encoder.encode(process.env.JWT_SECRET));

        console.log(jwt);
        return res.send({jwt})

    } catch (err)   {
        return res.sendStatus(401);
    }

}

authTokenController.getProfile = async (req, res) => {
    
    const {authorization} = req.headers;
    console.log(authorization);

    if(!authorization) return res.sendStatus(401);

    try {
        const token = authorization.split(" ")[1];
        const encoder = new TextEncoder();
        console.log(encoder);

        console.log(token);
        const {payload} = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET));

        const user = USERS_BBDD.find((user) => user.guid === payload.guid);

        console.log(payload);
        console.log(user);

        if(!user) return res.sendStatus(401);

        delete user.password;

        return res.send(user);

    } catch (err) {
        console.log(err);
        return res.sendStatus(401);
    }
}






module.exports = authTokenController