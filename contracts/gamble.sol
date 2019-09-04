pragma solidity >=0.5.1 <0.6.0;
contract gamble {
    uint public num1;
    uint public num2;
    uint public result;

    function game() public payable {
        // require(_player == msg.sender);
        for (uint i = 0; i < 2; i++) {
            uint randNum = uint(keccak256(abi.encodePacked(now, msg.sender, i))) % 6;
            randNum = randNum + 1;
            if (i == 0) num1 = randNum;
            else num2 = randNum;
        }
        
        if (num1 == num2) result = 1;
        else result = 0;
    }
}