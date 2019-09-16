pragma solidity >=0.5.0 <0.6.0;

import './IERC20.sol';
import './SafeMath.sol';
import './GameRule.sol';

contract DiceToken is IERC20, GameRule {
  using SafeMath for uint256;

  GameRule gamerule = new GameRule();

  string public name = 'DiceMoney';
  string public symbol = 'DICE';

  uint256 public totalSupply = 100000;
  uint256 public betAmount = 0;

  address public gameContract = 0x0000000000000000000000000000000000000000;
  address public player =0x0000000000000000000000000000000000000000;

  mapping (address => uint256) balances;
  mapping (address => mapping (address => uint256)) internal allowed;
  event Transfered(address indexed from, address indexed to, uint256 value);

  function Token() external {
    require(balances[msg.sender] == 0);
    balances[msg.sender] = totalSupply;
  }
  
  function setContAddr(address _gameContract) external {
    gameContract = _gameContract;
  }

  function adminSend(uint256 amount) external returns (bool) {
    require(balances[msg.sender] >= amount);
    require(amount > 0);
    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[gameContract] = balances[gameContract].add(amount);
    emit Transfered(msg.sender, gameContract, amount);
    return true;
  }

//   ****************************************************************************
//   ****************************************************************************
//   ****************************************************************************

  function login(address _player) external {
    require(gameContract != 0x0000000000000000000000000000000000000000);
    player = _player;
  }
  
  function balanceOf(address account) external view returns (uint256 balance) {
    return balances[account];
  }
  
  function getTokens() external returns (bool) {
    require(msg.sender == player);  
    require(balances[msg.sender] == 0);
    require(balances[gameContract] >= 5);
    balances[gameContract] = balances[gameContract].sub(5);
    balances[msg.sender] = balances[msg.sender].add(5);
    emit Transfered(gameContract, msg.sender, 5);
    return true;
  }
  
  function betting(uint256 _betAmount) external returns (bool) {
    require(msg.sender == player);
    require(balances[msg.sender] >= _betAmount);
    require(_betAmount > 0);
    require(balances[gameContract] >= _betAmount * 6);
    betAmount = _betAmount;
    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);
    emit Transfered(msg.sender, gameContract, betAmount);
    return true;
  }
  
  function reward() external returns (bool) {

    require(msg.sender == player);
    require(betAmount != 0);
    
    uint256 player_return = 0;
    uint256 result = gamerule.game();
    if(result == 0)     
      return false;
      
    player_return = betAmount*(3*result);
    
    require(balances[gameContract] >= player_return);
    
    balances[gameContract] = balances[gameContract].sub(player_return);
    balances[msg.sender] = balances[msg.sender].add(player_return);
    emit Transfered(gameContract, msg.sender, player_return);
    betAmount = 0;
    return true;
  }
  
//   ****************************************************************************
//   ****************************************************************************
//   ****************************************************************************
  
  function transfer(address recipient, uint256 amount) external returns (bool) {
    require(recipient != address(0));
    require(amount <= balances[msg.sender]);

    // SafeMath.sub will throw if there is not enough balance.
    balances[msg.sender] = balances[msg.sender].sub(amount);
    balances[recipient] = balances[recipient].add(amount);
    emit Transfered(msg.sender, recipient, amount);
    return true;
  }
  
  function allowance(address owner, address spender) external view returns (uint256) {
    return allowed[owner][spender];
  }
  
  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) {
    require(recipient != address(0));
    require(amount <= balances[sender]);
    require(amount <= allowed[sender][msg.sender]);

    balances[sender] = balances[sender].sub(amount);
    balances[recipient] = balances[recipient].add(amount);
    allowed[sender][msg.sender] = allowed[sender][msg.sender].sub(amount);
    return true;
  }
  
  function approve(address spender, uint256 amount) public returns (bool) {
    allowed[msg.sender][spender] = amount;
    return true;
  }
}
