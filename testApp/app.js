//required middleware from npm
var http = require("http");
var Mustache = require("mustache");
var randomNum = require("./randomnumber");
//your code
var message = Mustache.render("Hello, {{firstname}} {{lastname}} how are you today?? ",
 {firstname: "Jovan", lastname: "Cruz"});

//handle incoming HTTP requests
function reqHandler(req, res)
{
    console.log("We have a server request from " + req.url);
    if(req.url === "/")
    {
        res.end("Welcome to pornhub!");
    }
    else if(req.url === "/about")
    {
        res.end("This is the about page");
    }
    else if(req.url === "/contacts")
    {
        res.end(message + randomNum());
    }
    else{
        res.end("This ain't the porn you wanted")
    }
    
}

 //rendering the result
console.log(message);
console.log(randomNum());
console.log(randomNum());
console.log(randomNum());

//create and start the server
var server = http.createServer(reqHandler);

//starts the server
server.listen(3000);