const fs = require('fs');

function logReqRes(filename){
    return async function(req, res, next){
        await fs.appendFile(filename,`\n${Date.now().toLocaleString()} : ${req.ip} ${req.method} ${req.path}`, (err) => {
            next();
        })
    }
};

module.exports = {
    logReqRes,
}