pragma solidity >=0.5.0 <0.6.0;

import './IERC20.sol';
import './SafeMath.sol';

contract DiceToken is IERC20 {
  using SafeMath for uint256;

  string public name = 'DiceMoney';
  string public symbol = 'DICE';
  uint256 public totalSupply = 1000;
  mapping (address => uint256) balances;
  address gameContract;
  
  event Transfered(address indexed from, address indexed to, uint256 value);

  function Token() external {
    require(balances[msg.sender] == 0); 
    balances[msg.sender] = totalSupply;
  }
  
  function setContAddr(address _gameContract) external {
      gameContract = _gameContract;
  }
  
  function balanceOf(address _owner) external view returns (uint256 balance) {
    return balances[_owner];
  }

  function transfer(uint256 _value) external {
    
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[gameContract] = balances[gameContract].add(_value);
    emit Transfered(msg.sender, gameContract, _value);
  }
  
  function getTokens() external {
    require(balances[msg.sender] == 0);
    balances[gameContract] = balances[gameContract].sub(5);
    balances[msg.sender] = balances[msg.sender].add(5);
  }
  
  function send1(address _to, uint256 _value) external {
    balances[gameContract] = balances[gameContract].sub(_value);
    balances[_to] = balances[_to].add(_value);
    emit Transfered(gameContract, _to, _value);
  }
}

