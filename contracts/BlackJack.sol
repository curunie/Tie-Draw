pragma solidity >=0.5.0 <0.6.0;

contract BlackJack {
    string[] public PlayerHand = ["", "", "", "", ""];
    string[] public DealerHand = ["", "", "", "", ""];
    string[] public Cards = ["H of 2", "H of 3", "H of 4", "H of 5", "H of 6", "H of 7", "H of 8" , "H of 9", "C of 2", "C of 3", "C of 4", "C of 5", "C of 6", "C of 7", "C of 8", "C of 9", "S of 2", "S of 3", "S of 4", "S of 5", "S of 6", "S of 7", "S of 8", "S of 9", "D of 2", "D of 3", "D of 4", "D of 5", "D of 6", "D of 7", "D of 8", "D of 9", "D of 10", "D of Q", "D of J", "D of K", "D of A",  "H of 10", "H of Q", "H of J", "H of K", "H of A", "C of 10", "C of Q", "C of J", "C of K", "C of A", "S of 10", "S of Q", "S of J", "S of K", "S of A"];
    uint256 public PlayerCost = 0;
    uint256 public DealerCost = 0;
    uint256 public Result = 5;
    uint256 public count1 = 0;
    uint256 public count2 = 0;
    uint256 public CountDraw = 0;
    uint256 public random = 0;
    uint256 public countcheck = 0;

    function OverlapCheck() public {
         while(true) {
            if(countcheck != 0) {
                for(uint i = 0; i < countcheck; i++) {
                    if(keccak256(abi.encode(PlayerHand[i])) == keccak256(abi.encode(Cards[random])) || keccak256(abi.encode(DealerHand[i])) == keccak256(abi.encode(Cards[random]))){
                        random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
                        CountDraw++;
                    }
                }
            }
            countcheck++;
            if(countcheck == 4) {
                 countcheck = 0;
                 break;
            }
        }
    }

    function PlayerDraw() public {
        random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
        OverlapCheck(); 
        PlayerHand[count1] = Cards[random];
        
        if(0 <= random && random < 8) PlayerCost = PlayerCost + random + 2;
        else if(7 < random && random < 16) PlayerCost = PlayerCost + random - 6;
        else if(15 < random && random < 24) PlayerCost = PlayerCost + random - 14;
        else if(23 < random && random < 32) PlayerCost = PlayerCost + random - 22;
        else PlayerCost = PlayerCost + 10;
        count1++;
        CountDraw++;
    }

    function DealerDraw() public {
        random = uint(keccak256(abi.encodePacked(now, msg.sender, CountDraw))) % 52;
        OverlapCheck();
        DealerHand[count2] = Cards[random];
        
        if(0 <= random && random < 8) DealerCost = DealerCost + random + 2;
        else if(7 < random && random < 16) DealerCost = DealerCost + random - 6;
        else if(15 < random && random < 24) DealerCost = DealerCost + random - 14;
        else if(23 < random && random < 32) DealerCost = DealerCost + random - 22;
        else DealerCost = DealerCost + 10;
        count2++;
        CountDraw++;
    }

    function BlackJackStart() public {
        require(PlayerCost == 0);
        require(DealerCost == 0);
        PlayerDraw();
        DealerDraw();
        PlayerDraw();
        DealerDraw();
    }

    function BlackJackDraw() public {
        require(PlayerCost < 21);
        PlayerDraw();
        if(DealerCost <= 15) DealerDraw();
    }

    function BlackJackEnd() public {
        require(Result == 5);
        if(DealerCost <= 15) DealerDraw();
        if(PlayerCost > DealerCost) {
            if(PlayerCost > 21) Result = 0;
            else Result = 1;
        }

        if(PlayerCost <= DealerCost) {
            if(DealerCost > 21) {
                if(PlayerCost > 21) Result = 0;
                else Result = 1;
            }
            else Result = 0;
        }
    }

    function BlackJackReset() public {
        PlayerCost = 0;
        DealerCost = 0;
        count1 = 0;
        count2 = 0;
        CountDraw = 0;
        countcheck = 0;
        random = 0;
        PlayerHand = ["", "", "", "", ""];
        DealerHand = ["", "", "", "", ""];
        Result = 5;
    }
}