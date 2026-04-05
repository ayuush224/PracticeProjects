const express = require('express');
const path = require("path");
const URL = require('../models/url');
const { nanoid } = require('nanoid');

const router = express.Router();

router.route("/")
.get((req, res) => {
    return res.sendFile(path.resolve("./views/home.html"));
})
.post(async (req, res) => {
    const body = req.body;

    if(!body.url){
        return res.status(400).json({msg : "Url is Required"});
    }

    const result = await URL.create({
        shortId : nanoid(8),
        redirectURL : body.url,
        visitHistory : [],
        createdBy : req.user._id,
    })

    return res.status(201).json({shortId : `${result.shortId}`});
});

module.exports = router;