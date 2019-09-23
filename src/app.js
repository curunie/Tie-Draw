const express = require("express");
const app = express();
const http = require('http');
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log("Server is Running... port 3000");
})

app.use(express.static('public'));
app.get('/', function (req,res) {
    res.sendFile(__dirname + '/index.html');
})