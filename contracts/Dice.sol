pragma solidity >=0.5.0 <0.6.0;

import './IERC20.sol';
import './SafeMath.sol';
import './GameRule.sol';

contract DiceToken is IERC20, GameRule {
  using SafeMath for uint256;

  GameRule gamerule = new GameRule();

  string public name = 'DiceMoney';
  string public symbol = 'DICE';

  uint256 public totalSupply = 1000;
  uint256 public betAmount;

  address public administrator;
  address public gameContract;
  address public player;

  mapping (address => uint256) balances;
  event Transfered(address indexed from, address indexed to, uint256 value);

  constructor() internal {
    administrator = msg.sender;
  }

  function Token() external {
    require(msg.sender == administrator); 
    require(balances[msg.sender] == 0);
    balances[msg.sender] = totalSupply;
  }

  function betting(address _player, uint256 _betAmount) external {
      player = _player;
      betAmount = _betAmount;
  }
  
  function setContAddr(address _gameContract) external {
      gameContract = _gameContract;
  }
  
  function balanceOf(address _owner) external view returns (uint256 balance) {
    return balances[_owner];
  }

  function adminsend(uint256 amount) external returns (bool) {
    require(msg.sender == administrator);
    require(balances[msg.sender] > amount);
    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[gameContract] = balances[gameContract].add(amount);
    emit Transfered(msg.sender, gameContract, amount);
    return true;
  }
  
  function transfer(uint256 amount) external returns (bool) {
    require(msg.sender == player);
    require(balances[msg.sender] > amount);
    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[gameContract] = balances[gameContract].add(amount);
    emit Transfered(msg.sender, gameContract, amount);
    return true;
  }
  
  function getTokens() external returns (bool) {
    require(msg.sender == player);
    require(balances[player] == 0);
    balances[gameContract] = balances[gameContract].sub(5);
    balances[msg.sender] = balances[msg.sender].add(5);
    return true;
  }
  
  function reward() external returns (bool) {

    require(msg.sender == player);
    uint result = gamerule.game();
    if(result == 0)
      return false;
      
    if(result > 0 && result <= 2) {
        balances[gameContract] = balances[gameContract].sub(betAmount * (3 * result));
        balances[player] = balances[player].add(betAmount * (3 * result));
        emit Transfered(gameContract, player, betAmount * (3 * result));
    }
    return true;
  }

  function allowance(address owner, address spender) external view returns (uint256) {

  }

  function approve(address spender, uint256 amount) external returns (bool) {

  }

  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {

  }
}

