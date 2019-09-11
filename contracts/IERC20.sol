pragma solidity >=0.5.0 <0.6.0;
 
interface IERC20 {
  function balanceOf(address _owner) external view returns (uint256);
  function transfer(uint256 _value) external;
  function send1(address _to, uint256 _value) external;
  event Transfered(address indexed from, address indexed to, uint256 value);

}
