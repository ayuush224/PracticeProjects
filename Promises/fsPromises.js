// const { error } = require('console');
// const fs = require('fs');
// const path = require('path');

// const fileName = "data.txt";
// const filePath = path.join(__dirname, fileName);

/*
const dirname = __dirname;

fs.promises.readdir(dirname)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});
*/

/*
const dirname = "../";
fs.promises.readdir(dirname , {withFileTypes : true})
.then((entries) => {
    // console.log(entries);
    let fileCount = 0;
    let dirCount = 0;

    entries.forEach((entry) => {
        if(entry.isDirectory()){
            dirCount += 1;
        }
        else if(entry.isFile()){
            fileCount += 1;
        }
    });

    console.log(`Total no of file = ${fileCount}`);
    console.log(`Total no of directories = ${dirCount}`);
})
.catch((error) => {
    console.log(error);
});
*/

// const user = {
//     then : (resolve) => {
//         setTimeout(() => {
//             resolve({name : "Ayush", age : 21}, {name : "Ayushi" , age : 22});
//         }, 1000);
//     }
// };

// function user(){
//     return {name : "Ayush", age : 21};
// }

// async function consume(){
//     const data = await user();
//     console.log(data);
// };

consume();