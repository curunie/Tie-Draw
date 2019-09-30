pragma solidity >=0.5.0 <0.6.0;
contract OddEven {
    uint256 public OddEvenResult = 5;
    uint256 public GameOddEven;

    //홀짝게임, 값이 1이면 승리 값이 0이면 패배 처음에는 무조건 짝을 원하면 0을 홀을 원하면 1을 투입
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