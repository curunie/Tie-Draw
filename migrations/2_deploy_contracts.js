var GambleChipToken = artifacts.require("./DiceToken.sol");

const _name = "GambleChipToken";
const _symbol = "CHIP"
const _decimals = 18;
const _total_supply = 1000000;

module.exports = function(deployer) {
    deployer.deploy(GambleChipToken, _name, _symbol, _decimals, _total_supply);
};