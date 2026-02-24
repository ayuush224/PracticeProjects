//Event Meastro
const EventEmitter = require('events');
const emitter = new EventEmitter();

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

const data1 = fs.readFileSync(filePath, 'utf-8');
const objEventCount = JSON.parse(data1);

let login = (user) => {
    console.log(`User ${user.name} logged in successfully`);
    objEventCount.login += 1;
};

let logout = (user) => {
    console.log(`User ${user.name} logged out successfully`);
    objEventCount.logout += 1;
};

let purchase = (product) => {
    console.log(`Puchased ${product.quantity} item`);
    objEventCount.purchase += 1;
};

let profileUpdate = (user) => {
    console.log(`Profile update : new name = ${user.name}`);
    objEventCount.profileUpdate += 1;
};

let summary = () => {
    console.log("\nSummary!");
    
    console.log(objEventCount);

    const data = JSON.stringify(objEventCount, null, 2);
    
    fs.writeFileSync(filePath, data, 'utf-8');
}

//it is like defining a function, which get called
//on a particular event
emitter.on('login', login);
emitter.on('logout', logout);
emitter.on('purchase', purchase);
emitter.on('profileUpdate', profileUpdate);


//it is like calling a function
emitter.emit('login', {name: "ayush"});
emitter.emit('logout', {name: "ayush"});
emitter.emit('purchase', {quantity: 10});
emitter.emit('profileUpdate', {name : "tutu"});

emitter.on('summary', summary);
emitter.emit('summary');
