const mongoose = require('mongoose');

async function connectMongoDb(url){
    try{
        await mongoose.connect(url);
        console.log("Mongo Db Connected");
    }
    catch(err){
        console.log(err);
        throw err;
    }
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
}