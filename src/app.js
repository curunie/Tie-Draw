const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(8080);

var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/[infura_project_id]")); // 네트워크(메인,ropten) 주소
var proofContract = web3.eth.contract(
    [{"constant":false,"inputs":[{"name":"fileHash","type":"string"}],
    "name":"get","outputs":[{"name":"timestamp","type":"uint256"},{"name":"owner","type":"string"}],
    "payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"string"},
    {"name":"fileHash","type":"string"}],"name":"set","outputs":[],"payable":false,"type":"function"},
    {"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"},
    {"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"owner","type":"string"},
    {"indexed":false,"name":"fileHash","type":"string"}],"name":"logFileAddedStatus","type":"event"}]);
    var proof = proofContract.at(""); // 컨트랙트 주소

app.use(express.static("public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})