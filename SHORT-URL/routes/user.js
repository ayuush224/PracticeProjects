const express = require("express");
const {handleCreateUser, handleUserSignup
,handleUserSignIn,handleSendSigninPage} = require("../controllers/user");

const router = express.Router();

router.route("/signup")
.get(handleUserSignup)
.post(handleCreateUser);

router.route("/signin")
.get(handleSendSigninPage)
.post(handleUserSignIn);

module.exports = router;