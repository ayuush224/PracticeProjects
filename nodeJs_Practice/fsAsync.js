const fs = require('fs');
const path = require('path');

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "this is the initial data", 'utf-8', (err) => {
    if(err){
        console.error("Error occured in writing file => " + err);
        return;
    }
    else{
        console.log("Saved data to file successfully");
    }
 }
);

fs.appendFile(filePath, "This is the updated data", 'utf-8', (err) => {
    if(err){
        console.error("Error occured in Updating the data to file => " + err);
        return;
    }
    else{
        console.log("file Updated Successfully");
    }
 }
);

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        console.error("Unanble to read the file => " + err);
        return;
    }
    else{
        console.log("File read Successfule => \n" + data);
    }
});

const newFileName = "testUpdate.txt";
const newFilePath = path.join(__dirname, newFileName);

fs.rename(filePath, newFilePath, (err) => {
    if(err){
        console.error("Unable to rename the file => " + err);
        return;
    }
    else{
        console.log("File renamed Successfully");
    }
});

fs.unlink(filePath, (err) => {
    if(err){
        console.error("Unable to delete the file => " + err);
        return;
    }
    else{
        console.log("Deleted file Successfully");
    }
});