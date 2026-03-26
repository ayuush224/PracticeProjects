const http = require('http');
const url = require('url');
const {parse} = require('querystring');
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

let data;
async function readData(){
    try{
        const filePath = path.join(__dirname, 'userData.json');
        const content = await fs.promises.readFile(filePath, 'utf-8');
        if(!content.trim()){
            data = [];
        }
        else{
            data = await JSON.parse(content);
        }
    }
    catch(error){
        console.log("Error Occured reading data file : ", error);
    }
};
readData();

async function storeData(){
    try{
        const filePath = path.join(__dirname, 'userData.json');
        await fs.promises.writeFile(filePath, data, 'utf-8');
    }
    catch(error){
        console.log("Error occured while storing data into file : ", error);
    }
};

async function deleteUser(user){
    try{
        let deleted = false;
        for(let index=0; index < data.length; index++){
            if(data[index].email === user.email){
                data[index] = data[data.length - 1];
                data.pop();
                deleted = true;
                break;
            }
        }
        if(deleted){
            await storeData();
        }
        else{
            throw new Error("Data not found in dataBase");
        }
    }
    catch(error){
        console.log("Error occured while deleting the file data" , error);
    }
};

async function updateUserData(userData){
    try{
        let updated = false;
        for(let i = 0; i < data.length; i++){
            if(data[i].email === userData.email){
                data[i].name = userData.name;
                data[i].age = userData.age;
                updated = true;
                break;
            }
        }

        if(!updated){
            throw new Error("Data not found in the database");
        }
        await storeData();
    }
    catch(error){
        console.log("Error occured while updating data", error);
    }
}

const server = http.createServer((request, response) => {
    const method = request.method;

    const myUrl = url.parse(request.url, true);
    const query = myUrl.query;
    const pathname = myUrl.pathname;

    const requestType = request.headers["content-type"];

    if(method === "GET"){
        switch(pathname){
            case "/" :
                response.writeHead(200, {"content-type" : "application/json"});
                response.write(JSON.stringify(data, null, 2));
                response.end();
            break;

            case "/home":
                response.writeHead(200, {"content-type" : "text/html"});
                response.end("<h1>Welcome to my website</h1>");
            break;

            case "/user":
                const userMail = query.email;
                let userData = null;

                for(let index = 0; index < data.length; index++){
                    if(data[index].email === userMail){
                        userData = data[index];
                        break;
                    }
                }

                if(userData === null){
                    response.writeHead(404, {"content-type" : "text/plain"});
                    response.end("Error Occured : 404 User Not Fond");
                }
                else{
                    response.writeHead(200, {"content-type" : "application/json"});
                    response.end(JSON.stringify(userData));
                }
            break;

            case "/register" :
                let filePath = path.join(__dirname, "register.html");
                let readable = fs.createReadStream(filePath);
                readable.pipe(response);
            break;

            case "/delete" :
                filePath = path.join(__dirname, "delete.html");
                readable = fs.createReadStream(filePath);
                readable.pipe(response);
            break;

            case "/update" :
                filePath = path.join(__dirname, "/update");
                readable = fs.createReadStream(filePath);
                readable.pipe(response);
            break;

            default:
                readData.writeHead(404, {"Content-type" : "text/plain"});
                response.end("Error occured : Page not found");
            break;
        }
    }

    if(method === "POST"){
        if(pathname === "/register"){
            let body = "";
            request.on("data" , (chunk) => {
                body += chunk.toString();
            });

            request.on("end", async () => {
                let userData = JSON.parse(body);
                data.push(userData);
                await storeData();

                response.writeHead(301, {"location" : "/"});
            });
        }
        else{
            response.writeHead(404, {"content-type" : "text/plain"});
            response.end("Error 404 : Page not found");
        }
    }

    if(method === "PATCH"){
        if(pathname === "/update"){
            let body = "";
            request.on('data', (chunk) => {
                body += chunk.toString();
            })
    
            request.on('end', async function(){
                let userData = JSON.parse(body);
                await updateUserData(userData);
    
                response.writeHead(301, {"location" : "/"});
            });
        }
        else{
            response.writeHead(404, {"content-type" : "text/plain"});
            response.end("404 Page not found");
        }
    }

    if(method === "DELETE"){
        if(pathname === "/delete"){
            let body = "";
            request.on("data", (chunk) => {
                body += chunk.toString();
            });

            request.on("end" , async () => {
                const userData = JSON.parse(body);
                await deleteUser(userData);
            })
            response.writeHead(301, {"location" : "/"});
        }
        else{
            response.writeHead(404, {"content-type" : "text/plain"});
            response.end("404 Page not found");
        }
    }
});

server.listen(8000, () => {
    console.log("Server is listening");
});