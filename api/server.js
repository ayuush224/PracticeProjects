const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');


const dataFilePath = path.join(__dirname, 'data.json');
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended : true}));

function userData(data, email){
    for(let i=0; i<data.length; i++){
        if(data[i].email === email){
            return data[i];
        }
    }
    return null;
};

function deleteUserData(data, details){
    let n = data.length;
    for(let i=0; i<data.length; i++){
        if(data[i].email === details.email){
            data[i].name = data[n - 1].name;
            data[i].email = data[n - 1].email;
            data[i].age = data[n - 1].age;

            data.pop();
            fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
            return true;
        }
    }

    return false;
};

function updateUserData(data, newData){
    for(let i=0; i<data.length; i++){
        if(data[i].email === newData.email){
            data[i].name = newData.name;
            data[i].age = newData.age;

            fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
            return true;
        }
    }

    return false;
};

server.get('/', (req, res) => {
    let content = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
    server.set('json spaces', 2);

    res.json(content);
});

server.get('/register', (req, res) => {
    const filePath = path.join(__dirname, 'register.html');
    res.sendFile(filePath);
});

server.post('/register', (req, res) => {
    let data = req.body;

    let content = fs.readFileSync(dataFilePath, 'utf-8');
    let fileData = content ? JSON.parse(content) : [];
    fileData.push(data);

    fs.writeFileSync(dataFilePath, JSON.stringify(fileData, null, 2), 'utf-8');

    // res.end('Thankyou for registeration');
    res.redirect('/');
});

server.get('/delete', (req, res) => {
    const deleteFile = path.join(__dirname, 'delete.html');
    res.sendFile(deleteFile);
});

server.post('/delete', (req,res) => {
    let data = fs.readFileSync(dataFilePath, 'utf-8');
    data = JSON.parse(data);

    if(deleteUserData(data, req.body) === false){
        res.end("Error Occurred : Invalid user details");
    }
    else{
        res.redirect('/');
    }
});

server.get('/update', (req, res) => {
    const updateFile = path.join(__dirname, 'update.html');
    res.sendFile(updateFile);
});

server.post('/update', (req,res) => {
    let data = fs.readFileSync(dataFilePath, 'utf-8');
    data = JSON.parse(data);

    if(updateUserData(data, req.body) === false){
        res.end("Error Occurred : Invalid user Credential");
    }
    else{
        res.redirect("/");
    }
});

server.get('/:email', (req, res) => {
    const email = req.params.email;
    let data = fs.readFileSync(dataFilePath, 'utf-8');
    data = JSON.parse(data);

    data = userData(data, email);

    if(data == null){
        res.end("Invalid creadential");
    }
    else{
        res.json(data);
    }
});

server.listen(3000, () => {
    console.log("Server is listening");
});