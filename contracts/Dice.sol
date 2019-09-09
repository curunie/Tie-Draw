pragma solidity ^0.4.18;

import './IERC20.sol';
import './SafeMath.sol';

contract DiceToken is IERC20 {
  using SafeMath for uint256;

  string public name = 'DiceMoney';
  string public symbol = 'DICE';
//   uint8 public constant decimals = 1;
//   uint256 public constant decimalFactor = 10 ** uint256(decimals);
  uint256 public totalSupply = 1000;
  mapping (address => uint256) balances;
  uint256 public get = 1;
  address gameContract;
  
  event Transfered(address indexed from, address indexed to, uint256 value);

  function DiceToken() public {
    balances[msg.sender] = totalSupply;
  }
    
  function setContAddr(address _gameContract) public {
      gameContract = _gameContract;
  }
  
  function balanceOf(address _owner) public view returns (uint256 balance) {
    return balances[_owner];
  }

  function transfer(address _to, uint256 _value) public returns (bool) {
    
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfered(msg.sender, _to, _value);
    return true;
  }
  
  function getTokens(uint256 _aaaa) public returns (bool) {
    require(balances[msg.sender] == 0);
    balances[gameContract] = balances[gameContract].sub(get);
    balances[msg.sender] = balances[msg.sender].add(get);
    return true;
  }
  
    function send1(address _owner, address _to, uint256 _value) public returns (bool) {
    balances[_owner] = balances[_owner].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfered(_owner, _to, _value);
    return true;
  }
}
