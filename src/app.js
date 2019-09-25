const express = require('express');
const app = express();
const fs = require('fs');
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const router = require('./router/main')(app);
// const library = require('./router/library'); 자꾸 Gas가 부족하다는 오류가 남..


app.use('/views', express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// app.use('/lib', library); labrary.js 를 연동 하실때 labrary.js 맨 하단에 module.exports = router; 를 넣어주세염


server.listen(port, function () {
    console.log("Server is Running... port 3000")
});


app.use(express.static('public'));


module.exports = router;