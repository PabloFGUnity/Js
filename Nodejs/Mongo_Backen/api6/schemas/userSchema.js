const mongoose = require('mongoose')

const userChema = mongoose.Schema({
    _id:String,
    name:String,
    email:String,
    password:String,
    role:String,
    sessionId:String
});

const userModel = mongoose.model('User', userChema)

module.exports = userModel