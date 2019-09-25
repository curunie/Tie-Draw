pragma solidity >=0.5.0 <0.6.0;

contract GameRule {
    uint public result;
    uint public num1;
    uint public num2;

    function game() public returns (uint) {
        for (uint i = 0; i < 2; i++) {
            uint randNum = uint(keccak256(abi.encodePacked(now, msg.sender, i))) % 6;
            randNum = randNum + 1;
            if (i == 0) num1 = randNum;
            else num2 = randNum;
        }

        if (num1 == num2) {
            if (num1 == 6) result = 2;
            else result = 1;
        }
        else result = 0;

        return result;
    }
}