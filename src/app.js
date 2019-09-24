const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;

var library = require('./router/library');

app.use('/views', express.static(__dirname + '/views'));
app.use('/lib', library);

server.listen(port, function () {
    console.log("Server is Running... port 3000")
});