const path = require("path");

console.log(__dirname);
console.log(__filename);

const file = path.join("Student", "public", "data.txt");
const fileData = path.parse(file);
console.log(fileData);

console.log(path.extname(file));

console.log(path.basename(file));

console.log(path.resolve(file));

console.log(path.sep);

console.log(path.dirname(file));