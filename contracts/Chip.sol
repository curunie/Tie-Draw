pragma solidity >=0.5.0 <0.6.0;

import './IERC20.sol';
import './SafeMath.sol';
import './BlackJack.sol';
import './Dice.sol';

contract Chip is IERC20, BlackJack, Dice {
  using SafeMath for uint256;

  string public name = 'Gamble Chip Token';
  string public symbol = 'CHIP';

  uint256 public totalSupply = 1000000000000;
  uint256 public betAmount = 0;
  uint256 public DiceResult;
  uint256 public BlackJackResult;

  // address private adminAddr = 0x0000000000000000000000000000000000000000;
  address public gameContract = 0x0000000000000000000000000000000000000000;
  address public player =0x0000000000000000000000000000000000000000;

  mapping (address => uint256) balances;
  mapping (address => mapping (address => uint256)) internal allowed;
  event Transfered(address indexed from, address indexed to, uint256 value);

  function Token() external {
    // require(msg.sender == adminAddr);
    require(balances[msg.sender] == 0);
    balances[msg.sender] = totalSupply;
  }
  
  function SetContAddr(address _gameContract) external {
    // require(msg.sender == adminAddr);
    gameContract = _gameContract;
  }

  function AdminSend(uint256 amount) external returns (bool) {
    // require(msg.sender == adminAddr);
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

  function Login(address _player) external {
    require(gameContract != 0x0000000000000000000000000000000000000000);
    player = _player;
  }
  
  function BalanceOf(address account) external view returns (uint256 balance) {
    return balances[account];
  }
  
  function GetTokens() external returns (bool) {
    require(msg.sender == player);  
    require(balances[msg.sender] == 0);
    require(balances[gameContract] >= 10);
    balances[gameContract] = balances[gameContract].sub(10);
    balances[msg.sender] = balances[msg.sender].add(10);
    emit Transfered(gameContract, msg.sender, 10);
    return true;
  }
  
  function Betting(uint256 _betAmount) external returns (bool) {
    require(msg.sender == player);
    require(balances[msg.sender] >= _betAmount);
    require(_betAmount > 0);
    require(balances[gameContract] >= _betAmount.mul(10));
    betAmount = _betAmount;
    balances[msg.sender] = balances[msg.sender].sub(betAmount);
    balances[gameContract] = balances[gameContract].add(betAmount);
    emit Transfered(msg.sender, gameContract, betAmount);
    return true;
  }
  
  function DiceReward() external returns (bool) {

    require(msg.sender == player);
    require(betAmount != 0);
    require(Result != 0);
    
    uint256 player_return;
    player_return = betAmount.mul(3);
    DiceResult = Result;

    if (DiceResult == 0) false;
    if (DiceResult == 5) false;
    
    require(balances[gameContract] >= player_return);
    
    balances[gameContract] = balances[gameContract].sub(player_return.mul(DiceResult));
    balances[msg.sender] = balances[msg.sender].add(player_return.mul(DiceResult));
    emit Transfered(gameContract, msg.sender, player_return.mul(DiceResult));
    betAmount = 0;
    DiceResult = 5;
    return true;
  }

  function BlackJackReward() external returns (bool) {

    require(msg.sender == player);
    require(betAmount != 0);
    require(Result != 0);
    
    uint256 player_return;
    player_return = betAmount.mul(3);
    BlackJackResult = Result;

    if (BlackJackResult == 0) false;
    if (BlackJackResult == 5) false;
    
    require(balances[gameContract] >= player_return);
    
    balances[gameContract] = balances[gameContract].sub(player_return.mul(BlackJackResult));
    balances[msg.sender] = balances[msg.sender].add(player_return.mul(BlackJackResult));
    emit Transfered(gameContract, msg.sender, player_return.mul(BlackJackResult));
    betAmount = 0;
    BlackJackResult = 5;
    return true;
  }
  
//   ****************************************************************************
//   ****************************************************************************
//   ****************************************************************************
  
  function transfer(address recipient, uint256 amount) external returns (bool) {
    require(recipient != address(0));
    require(amount <= balances[msg.sender]);

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
