const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const library = require('./library');

app.use('/views', express.static(__dirname + '/views'));
// app.use('/lib', library); labrary.js 를 연동 하실때 labrary.js 맨 하단에 module.exports = router; 를 넣어주세염

server.listen(port, function () {
    console.log("Server is Running... port 3000")
});

// module.exports = router;