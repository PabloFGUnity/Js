const userModel = require('../schemas/userSchema');
const md5 = require('md5')


const checkEmailPassword = async (email,password) => {
    //validacion del email y password

    const user = await userModel.findOne({email});

    if(!user) throw new Error();
    if(user.password !== md5(password)) throw new Error();

    return user;

};

module.exports = checkEmailPassword;