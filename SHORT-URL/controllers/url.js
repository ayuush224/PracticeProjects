const URL = require('../models/url');
const { nanoid } = require('nanoid');

async function handleGiveUrl(req, res){
    const userId = req.user._id;

    if(req.user.role == "ADMIN"){
        return handleGiveAllUrls(req, res);
    }

    const allDbUrl = await URL.find({createdBy : userId});

    if(!allDbUrl){
        return res.status(500).json({error : "No data stored in db"});
    }

    return res.status(200).json(allDbUrl);
};

async function handleGiveAllUrls(req, res){
    const allDbUrls = await URL.find({});

    return res.json(allDbUrls);
}

module.exports = {handleGiveUrl};