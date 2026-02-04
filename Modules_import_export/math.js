const add = (a, b) => {
    return a + b;
}

const multiply = (a, b) => {
    return a * b;
}

const sub = (a, b) => {
    return a - b;
}

/*
if we export our function like this then every time we export
the module.export object get override and the last exported 
function only gets exported, rest all get override;

module.exports = add;
module.exports = multiply;
module.exports = sub;
*/


/*to export multiple("The Bundel") function at once we must do this
or add the function one by one int the object, and make sure to not override it
*/
module.exports = { add, multiply, sub };

//way to add a variable in module.export object
module.exports.PI = 3.124;

//this is the way to add one more function in module.export object
module.exports.divide = (a, b) => {
    if(a == 0 || b == 0){
        return -1;
    }

    return a / b;
}