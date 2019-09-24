pragma solidity >=0.5.0 <0.6.0;

contract Dice {
    uint public Result = 5;
    uint public DiceComNum1;
    uint public DiceMyNum2;

    function DiceGameStart(uint number) public {
        uint i = 0;
        uint randNum = uint(keccak256(abi.encodePacked(now, msg.sender, i))) % 6;
        randNum = randNum + 1;
        DiceComNum1 = randNum;
        DiceMyNum2 = number;
    
        if (DiceComNum1 == DiceMyNum2) {
            if (DiceMyNum2 == 6) Result = 2;
            else Result = 1;
        }
        else Result = 0;
    }
}