pragma solidity >=0.5.0 <0.6.0;
contract testGame {
    uint256 public result;
    function game(uint256 _a) public payable {
        uint256 a = _a;
        uint256 randNum = uint256(keccak256(abi.encodePacked(now, msg.sender))) % 2;
        randNum = randNum + 1;
        if(a == randNum) result = 2;
        else result = 0;
    }
}