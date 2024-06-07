const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const connect = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/curd')
        console.log("Connected to database")
    }catch(err){
        console.error("Failed to connect DB", err)
    }
}

module.exports = connect;