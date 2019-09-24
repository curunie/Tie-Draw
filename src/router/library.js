var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/572765d2b955435da0d957225d819dc8"));
var Tx = require('ethereumjs-tx').Transaction;
var contract = require("truffle-contract");

/*
var privateKey = Buffer.from('41c66908c123f04a7567b6ce71f441e0ae189b7ec93d6fef2bbaf9aced9b6e7f', 'hex');
var rawTx = {
    gasPrice: '0x5AF3107A4000',
    gasLimit: '0x2710',
    to: '0xf6516CC850c653169700105208CAE2a456767602',
    value: '0x1',
    nonce: '0x07D0'
}
var tx = new Tx(rawTx, {'chain': 'rinkeby'});
tx.sign(privateKey);
var serializedTx = tx.serialize();*/

// contract 끌어오기

const TieDrawAddresss = "0x569fbb05968a1038e4352be754edb4259829de3e"
const TieDrawsABI =
        [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "adminSend",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_betAmount",
                        "type": "uint256"
                    }
                ],
                "name": "betting",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "getTokens",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_player",
                        "type": "address"
                    }
                ],
                "name": "login",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "reward",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_gameContract",
                        "type": "address"
                    }
                ],
                "name": "setContAddr",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "Token",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfered",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "betAmount",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "gameContract",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "num1",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "num2",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "player",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "result",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ];
TieDraw = new web3.eth.Contract(TieDrawsABI, TieDrawAddresss);

//남은 토큰 조회
function balance() {
    return web3.eth.getBalance(address, function(err, result) {
        balance = result    
    })
}

//getTokens 함수
/*function getGamemoney() {
    var amount = web3.utils.toHex(1e16);
    web3.eth.getAccounts(function (error, result) {
        web3.eth.sendTransaction({
            from: '0xFF0ca6eC70cA25432Cc8c44dEb4286B583Dad62b',
            to: '0xf6516CC850c653169700105208CAE2a456767602',
            value: "10000000000000",
            gasPrice: web3.utils.toHex(2 * 1e9),
            gasLimit: web3.utils.toHex(210000),
            data: TieDraw.methods.transfer('0xf6516CC850c653169700105208CAE2a456767602', amount).encodeABI(),
            
        }, function (err, transactionHash) {
            if (!err) {
                console.log(transactionHash + "success");
            }
        })
    })

}*/

function getGamemoney() {
    return web3.eth.accounts.signTransaction({
        from: "0xFF0ca6eC70cA25432Cc8c44dEb4286B583Dad62b",
        to: "0xf6516CC850c653169700105208CAE2a456767602",
        gasPrice: "20000000000",
        gas: "21000",
        value: "1000000000000000",
        data: ""
    }, '0x41c66908c123f04a7567b6ce71f441e0ae189b7ec93d6fef2bbaf9aced9b6e7f').then(console.log);
}

function getToken() {
    let message = TieDraw.methods.getTokens().call();
    return message;
}

//betting 함수
function bet() {
    let balanceOfContract = amount.times(web3.toBigNumber(10).pow(decimals));
    TieDraw.transfer()
}

getToken()