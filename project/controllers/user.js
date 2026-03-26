const User = require("../models/user");

async function handleGetAllUser(req, res){
    const allUserData = await User.find({});
    res.setHeader("Content-Type" , "application/json");

    return res.status(200).json(allUserData, null, 2);
};

async function handleGetUserById(req, res){
    try{
        const user = await User.findById(req.params.id);
        
        if(!user){
            return res.status(404).json({error : "User not Found"});
        }
    
        return res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg : "Some Internal error"});
    }
};

async function handleUpdateUserById(req, res){
    try{
        await User.findByIdAndUpdate(req.params.id, {lastName : "changed"});
        return res.status(200).json({Status : "Success"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg : "Some Intername error"});
    }
};

async function handleDeleteUserById(req, res){
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({msg : "User not found"});
        }

        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({Status : "Success"});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error : "Some Internal Error"});
    }
};

async function handleCreateUser(req, res){
    const body = req.body;
    if(!valid(body)){
        return res.status(400).json({msg : "All fields are required to fill.."});
    }

    await User.create({
        firstName : body.firstName,
        lastName : body.lastName ? body.lastName : "",
        email : body.email,
        jobTitle : body.jobTitle,
        gender : body.gender
    });
    
    return res.status(201).json({ msg : "User created successfully"});
}

function valid(body){
    console.log(body);
    if(!body.firstName || !body.email || !body.jobTitle || !body.gender){
        return false;
    }

    return true;
};

module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
};