const USER = require("../models/user");
const path = require("path");
const {v4 : uuidv4} = require("uuid");

const {setUser, getUser} = require("../services/auth");

async function handleCreateUser(req, res){
    try{
        const body = req.body;
        const data = await USER.create({
            name : body.name,
            email : body.email,
            password : body.password,
            role : body.role,
        });

        return res.redirect('/');
    }
    catch(err){
        console.log("User Not Created Successfully : " + err);
        return res.status(500).json({err : "Error Occured Creating user"});
    }
}

const filePath = path.resolve("./views/signup.html");

async function handleUserSignup(req, res){
    return res.sendFile(filePath);
}

async function handleUserSignIn(req, res){
    try{
        const body = req.body;
        const user = await USER.findOne({email : body.email, password : body.password});

        if(!user){
            return res.redirect("/user/signin");
        }

        // const sessionId = uuidv4();
        // setUser(sessionId, user);
        const token = setUser(user);
        res.cookie("uid", token);

        res.redirect("/");
    }
    catch(err){
        console.log("User was not able to signIn" + err);
        return res.status(500).json({err : "Internal error"});
    }
}

async function handleSendSigninPage(rea, res){
    return res.sendFile(path.resolve("./views/signin.html"));
}

module.exports = {handleCreateUser, handleUserSignup,
handleUserSignIn,handleSendSigninPage};