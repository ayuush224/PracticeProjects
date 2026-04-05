// function setUserName(username){
//     this.username = username;
// }


// function createUser(username, email, password){
//     setUserName.call(this, username);
//     this.email = email
//     this.password = password;
// }

// const chai = new createUser("ayush", "ayush@gmail.com", "123");

// console.log(chai);

// class User{
//     constructor(username){
//         this.username = username;
//     }

//     logMe(){
//         console.log(`Logged in ${this.username}`);
//     }
// };

// class Teacher extends User{
//     constructor(username, email, password){
//         super(username);
//         this.email = email;
//         this.password = password;
//     }

//     addCourse(course){
//         this.course = course;
//     }
// };

// const Chai = new Teacher("Chai", "chai@gmail.com", "123");

// const tea = new User("tea");

// console.log(tea instanceof Teacher);


// class User{
//     constructor(name, password){
//         this.name = name;
//         this.password = password;
//     }

//     get password(){
//         return this._name;
//         // return this.something;
//     }

//     set password(value){
//         this._name = value.toUpperCase();
//     }
// }


// function User(email, password){
//     Object.defineProperty(this, "email", {
//         get : function(){
//             return this._email.toUpperCase();
//         },
        
//         set : function(value){
//             this._email = value;
//         }
//     });
    
//     Object.defineProperty(this, "password", {
//         get : function(){
//             return this._password.toUpperCase();
//         },
        
//         set : function(value){
//             this._password = value;
//         }
//     });
    
//     this.email = email
//     this.password = password
// }

// const User = {
//     _email : "ayush",
//     _password : "ayush",

//     get email(){
//         return this._email.toUpperCase();
//     },

//     set email(value){
//         this._email = value;
//     }
// }

// const user = Object.create(User);

// console.log(user.email);


// function Outer(){
//     const username = "ayush";

//     function Inner(){
//         const username = "tutu";
//         console.log(username);
//     }
//     return Inner;
// }

// const func = new Outer();
// func();


// const obj = {
//     name : "Ayush",
//     greet : function(){
//         console.log(this.name);
//     }
// };

// const chai = {
//     name : "ayush"
// };

// chai.greet = obj.greet;
// const masalaChai = chai.greet.bind(obj);
// masalaChai();

// const obj = (a, b) => {
//     return{
//         "a" : a + b,
//         "b" : a * b,
//     }
// }

// console.log(obj(10, 20));



let nums = [1, 2, 3, 4, 5];

for(let [key, values] of nums){
    console.log(`${key} : ${values}`);
}