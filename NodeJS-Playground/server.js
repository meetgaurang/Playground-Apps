console.log("Hello world!");

const express = require("express");
const app = express();
//const __dirName = "./home";

app.listen(3000, function() {
    console.log("Listening on 3000 port..");
    console.log(__dirname);
});

app.get("/", function(req, res) {
    //res.send('Hello World!!');
    res.sendFile(__dirname + "/home/index.html");
});