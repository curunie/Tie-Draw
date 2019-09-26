pragma solidity >=0.5.0 <0.6.0;
contract OddEven {
    uint256 public OddEvenResult = 5;
    uint256 public GameOddEven;

    function OddEvenStart(uint i) public {
        require(i == 0 || i == 1);
        uint256 randNum = uint256(keccak256(abi.encodePacked(now, msg.sender))) % 2;
        randNum = randNum + 1;
        if(randNum % 2 == 0) {
            GameOddEven = 0;
        }
        else GameOddEven = 1;

        if(i == GameOddEven) OddEvenResult = 1;
        else OddEvenResult = 0;
    }
}