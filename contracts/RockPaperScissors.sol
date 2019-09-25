pragma solidity >=0.5.0 <0.6.0;
contract RockPaperScissors {
    uint256 public Result = 5;
    uint256 public hand;

    function StartRPS(uint RPS) public {
        require(1 < RPS && RPS < 4);
        uint a;
        uint b;
        uint c;
        uint256 randNum = uint256(keccak256(abi.encodePacked(now, msg.sender))) % 3;
        randNum = randNum + 1;
        if(randNum == 1) hand = a;
        else if(randNum == 2) hand = b;
        else hand = c;

        if(RPS == 1) {
            if(hand == a || hand == b) Result = 0;
            else Result = 1;
        }

        if(RPS == 2) {
            if(hand == b || hand == c) Result = 0;
            else Result = 1;
        }

        if(RPS == 3) {
            if(hand == c || hand == a) Result = 0;
            else Result = 1;
        }

    }
}


/////////////////////////// 보류