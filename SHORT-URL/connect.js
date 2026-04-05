const mongoose = require('mongoose');

async function connectMogoDB(url){
    return mongoose.connect(url);
}

module.exports = connectMogoDB;
