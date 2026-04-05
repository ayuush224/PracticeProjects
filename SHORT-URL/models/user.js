const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
            unique : true,
        },
        password : {
            type : String,
            requried : true,
        },
        role : {
            type : String,
            requried : true,
            default : "USER",
        }
    },

    {timestamps : true}
);

const USER = mongoose.model("user", userSchema);

module.exports = USER;