var Blackjack = artifacts.require("./BlackJack.json");
var Chip = artifacts.require("./Chip.json")

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
