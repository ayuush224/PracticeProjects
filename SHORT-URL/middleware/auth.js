const {getUser} = require("../services/auth");

async function restrictToLoggedUserOnly(req, res, next){
    const uid = req.cookies.uid;

    if(!uid){
        return res.redirect("/user/signin");
    }

    const user = getUser(uid);

    if(!user){
        return res.redirect("/user/signin");
    }

    req.user = user;
    next();
}

module.exports = {restrictToLoggedUserOnly};