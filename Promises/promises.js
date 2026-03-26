const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise one consumed!\n");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task Two is completed");
        resolve();
    },1000);
})
.then(function(){
    console.log("Promise two consumed! \n");
});




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Ayush" , emai : "ayush@gmail.com"});
    },1000);
});

promiseThree.then(function(user){
    console.log(user, '\n');
});






const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Ayushi" , email : "ayushi@gamil.com"});
        }
        else{
            reject("Error Occured : Something Went Wrong");
        }
    },1000);
});

promiseFour
.then(function(user){
    console.log("User Data ", user, '\n');
})
.catch(function(error){
    console.log(error, '\n');
});

/*
----This is not a valid way to return the value from a promises----
const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
});
console.log(username);
*/

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejectedn\n"));




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username : "tutu" , email : "tutu@gmail.com"});
        }
        else{
            reject("Error Occured : JS went wrong!");
        }
    }, 1000);
});

/*
---- If you handle this way promise and if the promise
throws error or get rejected then it will throw error and crash the program
-----
async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response);
};
*/

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();









/*
----This represents how does the async await actually works
function user(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name : "Ayush", age : 21});
        }, 1000);
    }) 
};

const user = {
    then : (resolve) => {
        setTimeout(() => {
            resolve({name : "Ayush", age : 21});
        }, 1000)
    }
}

async function consume(){
    try{
        const {name , age} = await user;
        console.log(name, age);
    }
    catch(error){
        console.log(error);
    }
};
consume();
*/
