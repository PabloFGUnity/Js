const { SignJWT, jwtVerify } = require("jose")
const checkEmailPassword = require("../helpers/checkEmailPassword");
const userModel = require("../schemas/userSchema");


const authTokenController = {}


authTokenController.login = async (req, res) => {

    const {email,password} = req.body;
    if(!email || !password) return res.sendStatus(400);

    try {
        const user = await checkEmailPassword(email, password);
        const jwConstructor = new SignJWT({id: user._id})

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

authTokenController.getProfile = async (req, res) => {
    
    const {authorization} = req.headers;
    console.log(authorization);

    if(!authorization) return res.sendStatus(401);

    try {
        const token = authorization.split(" ")[1];
        const encoder = new TextEncoder();
        console.log(encoder);

        const {payload} = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_SECRET));

        const user = await userModel.findOne({_id: payload.id});

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