const math = module.require("./math.js");

console.log("10 + 20 = " + math.add(10, 20));

console.log("5 * 2 = " + math.multiply(5, 2));

console.log("30 - 10 = " + math.sub(30, 10));

console.log("math.PI = " + math.PI);

console.log("20 / 10 = " + math.divide(20, 10));


/*
if we want to import all the function in once, then we can do
by this and it is mandatory to use the same function name
that was used in the module.export.
*/
console.log("\nImporting all the function at once");
const {add, multiply, sub, PI, divide} = require("./math.js");

console.log("20 + 20 = " + add(20, 20));
console.log("4 * 3 = " + multiply(4, 3));
console.log("30 / 2 = " + divide(30, 2));
console.log("50 - 20 = " + sub(50, 20));