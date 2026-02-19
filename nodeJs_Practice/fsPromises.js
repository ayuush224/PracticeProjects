const fs = require('fs');
const path = require('path');

fs.promises.readdir(__dirname)
    .then(data => {
    console.log(data);})
    .catch(err => {
    console.log(err);
});

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

fs.promises.writeFile(filePath, "this is my initial data", 'utf-8')
    .then(() => console.log("File Saved Successfully"))
    .catch(err => {
        console.log("Error Occured in writing to file: " + err);
});

fs.promises.appendFile(filePath, "\nThis is the updated data", 'utf-8')
    .then(() => console.log("File Updated Successfully!"))
    .catch(err => {
        console.log("Error Occured in updating the file" + err);
});

fs.promises.readFile(filePath, 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error Occured in reading file: " + err);
});

const newFileName = "testUpdated.txt";
const newPathName = path.join(__dirname, newFileName);

fs.promises.rename(filePath, newPathName)
    .then(() => console.log("File Renamed Successfully"))
    .catch((err) => {
        console.log("Error Occiured in renaming the file: " + err);
});

fs.promises.unlink(newPathName)
    .then(() => console.log("File deleted Successfully"))
    .catch((err) => {
        console.log("File Deletion Failed: " + err);
});

/*
Remember to pass a function in then(() => )because if you
write the console.log() directly then it does not waits to
promises finish, it just runs immediately as scripts starts.
*/

/*
if you are bored to write fs.promises always then
const fs = require('fs/promises');
now fs will works as fs.promises.
*/

/*
Note => The Above approach to write promises is not the best way to
write it becuase hey are not in order, so potentially errors can happen
like reading the file before creation or updation, deleitng the file before
renaming it or renaming the file before creation because it is not synchronus
to use promises properly you should use promises chaining.
*/