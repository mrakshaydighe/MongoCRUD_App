const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    name:String,
    email:String,
    image:String
})

const UserModel = new mongoose.model("user",Userschema)

module.exports = UserModel