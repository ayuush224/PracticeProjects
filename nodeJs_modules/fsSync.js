const fs = require("fs");
const path = require("path");

const fileName = "test.txt";

//Create file path according to the OS, so the code works for all OS
const filePath = path.join(__dirname, fileName);

//Write in file, if the file not exist then create and write into file
fs.writeFileSync(filePath, "This is the initial data", 'utf-8');

//Append the data into file, if the file not exists then create and write into file
fs.appendFileSync(filePath, "\nThis is the another data and another data", "utf-8");

//Read the data from file
const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);


const newFileName = "testUpdate.txt";
const newFilePath = path.join(__dirname, newFileName);

//Rename the file using oldFilePath and newFilePath
fs.renameSync(filePath, newFilePath);

//Deletes the file
fs.unlinkSync(newFilePath);