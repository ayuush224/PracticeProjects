const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url == "/" && request.method === "GET"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>welcome to Home page</h1>");
    }
    else if(request.url == "/contact" && request.method === "GET"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>You can contact me through these details</h1>")
    }
    else{
        response.statusCode = 404;
        response.end("Error 505 page not found");
    }

    if(request.url === "/" && request.method === "POST"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>How have you send this</h1>")
    }
    else if(request.url === "/contact" && request.method === "POST"){
        response.setHeader("Content-Type", "text/html");
        response.write("<h1>How the hell you have send it</h1>");
    }
    else{
        response.statusCode = 404;
        response.end("Bro what are you doing");
    }
});

const PORT = 3000;
server.listen(3000, () => {
    console.log("Server is running!");
})