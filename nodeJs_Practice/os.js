const os = require("os");

//return the platform os os
console.log(os.platform());

//return the architecture of the os
console.log(os.arch());

//free memory in bytes
console.log(os.freemem());

//total memory in bytes
console.log(os.totalmem());

//time in seconds for which os is running
console.log(os.uptime());

//returns the location of temp directory
console.log(os.tmpdir());

//returns the location of home directory
console.log(os.homedir());

//return the host name
console.log(os.hostname());

//returnsthe whole network data
console.log(os.networkInterfaces());

//all cpu core data
console.log(os.cpus());