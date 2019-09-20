var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');
var io = require('socket.io')(server);
var library = require('./library.js');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: 'sBld-2eSU-w0gj',
    reserve: false,
    saveUninitialized: true
}));

var server = app.listen(8080, function () {
    console.log("Server is Running... port 8080");
})

var router = require('./router/main')(app, fs);

// 자동 로그인 
function addEventListener() {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  
    getDefault();
};

function getDefault() {

    // 계정 가져오기
    web3.eth.getAccounts(function (err, res) {
        account_address = res[0];
    });

    // 로그인 체크
    if (!account_address) {
        alert('비로그인 상태 입니다.');
        return;
    }
}

// Dice.sol 의 getToken 함수 호출
async function get_token() {
    const game_contract = Contract;
    // 위의 game_contract로부터 getTokens 함수를 call 함수를 통해 반환, record 에 저장
    const record = await game_contract.methods.getTokens().call();
    console.log(record);
}
