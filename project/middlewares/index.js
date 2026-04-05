const fs = require('fs');

function logReqRes(filename){
    return async function(req, res, next){
        const currTime = new Date();
        await fs.appendFile(filename,`\n${currTime.toLocaleString()} : ${req.ip} ${req.method} ${req.path}`, (err) => {
            next();
        })
    }
};

module.exports = {
    logReqRes,
}