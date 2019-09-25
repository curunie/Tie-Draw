pragma solidity >=0.5.0 <0.6.0;
contract OddEven {
    uint256 public Result = 5;
    uint256 public GameOddEven;

    function OddEvenStart(uint i) public {
        uint256 randNum = uint256(keccak256(abi.encodePacked(now, msg.sender))) % 2;
        randNum = randNum + 1;
        if(randNum % 2 == 0) {
            GameOddEven = 0;
        }
        else GameOddEven = 1;

        if(i == GameOddEven) Result = 1;
        else Result = 0;
    }
}