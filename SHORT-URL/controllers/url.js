const URL = require('../models/url');
const { nanoid } = require('nanoid');

async function handleGiveUrl(req, res){
    const userId = req.user._id;
    const allDbUrl = await URL.find({createdBy : userId});

    if(!allDbUrl){
        return res.status(500).json({error : "No data stored in db"});
    }

    return res.status(200).json(allDbUrl);
};

module.exports = {handleGiveUrl};