const {getUser} = require("../services/auth");

function checkAuthentication(req, res, next){
    const tokenCookie = req.cookies?.uid;

    if(!tokenCookie){
        return res.redirect("/user/signin");
    }

    const user = getUser(tokenCookie);

    if(!user){
        return res.redirect("/user/signin");
    }

    req.user = user;
    next();
}

function restrictTo(roles = []){
    return function (req, res, next){
            if(!roles.includes(req.user.role)){
                return res.end("Unauthorized");
            }
            next();
        }
}

module.exports = {checkAuthentication, restrictTo};