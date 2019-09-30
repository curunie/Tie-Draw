const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const router = require('./router/main')(app);


app.use('/views', express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


server.listen(port, function () {
    console.log("Server is Running... port 3000")
});


module.exports = router;