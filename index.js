const express = require("express");
const path = require('path')
const connect = require("./db/config")
const app = express();
const UserModel = require("./models/user")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")
connect()

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/read",async(req,res)=>{
    const users = await UserModel.find()
    res.render('read',{users})
})

app.get("/update/:id",async(req,res)=>{
    const _id = req.params.id
    const user = await UserModel.findOne({_id})
    console.log(user)
    res.render('update',{user})
})
app.post("/update/:id",async(req,res)=>{
    const _id = req.params.id
    const {name,email,image} = req.body
    const user = await UserModel.findOneAndUpdate({_id},{name,email,image})
    res.redirect("/read")
})


app.post("/create",async(req,res)=>{
    const {name,email,image} = req.body
    const user = await UserModel.create({
        name,
        email,
        image
    })
    console.log(user)
    res.redirect("/read")
})

app.get("/delete/:id",async(req,res)=>{
    const _id = req.params.id
    const user = await UserModel.findByIdAndDelete(_id);
    res.redirect("/read")
})

app.listen(8000,()=>{
    console.log(`server is running on 8000`)
})