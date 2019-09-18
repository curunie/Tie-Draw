var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var library = require('./library.js');
  


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


server.listen(8080);
console.log("Server is Running...");