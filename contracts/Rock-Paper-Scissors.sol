pragma solidity >=0.5.0 <0.6.0;
contract RockPaperScissors {
    uint256 public result;
    function goRPS(uint256 _input) public payable {
        uint256 i = _input;
        uint256 randNum = uint256(keccak256(abi.encodePacked(now, msg.sender))) % 3;
        int256 com = int256(randNum) - int256(i);
        if (com == 2 || com == -1) result = 2;
        else if (com == 0) result = 1;
        else result = 0;
    }
}