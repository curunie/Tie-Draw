pragma solidity >=0.5.0 <0.6.0;
import "./ERC20.sol";

contract Game is ERC20 {
    address public banker;
    address public player;
    uint public betBalance;
    uint public result;
    uint public num1;
    uint public num2;

    function () external payable {}
    
    modifier onlyOwner {
        require(msg.sender == player);
        _;
    }

    function bet(address _player, uint _betBalance) public {
        player = _player;
        betBalance = _betBalance;
    }

    function tieDraw() public payable {
        // require(_player == msg.sender);
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
    }

    function withdrawTokens(address _tokenContract) onlyOwner public {
        require(result != 0);
        ERC20 token = ERC20(_tokenContract);
        if(result == 1) {
            uint tokenBalance = token.balanceOf(address(this));
            uint tokenReward = uint(tokenBalance) * uint(3);
            token.transfer(player, tokenReward);
            WithdrewTokens(_tokenContract, msg.sender, tokenReward);
        }

        if(result == 2) {
            uint tokenBalance = token.balanceOf(address(this));
            uint tokenReward = uint(tokenBalance) * uint(6);
            token.transfer(player, tokenReward);
            WithdrewTokens(_tokenContract, msg.sender, tokenReward);
        }
    }

    function info() public view returns(address, uint) {
        return(player, address(this),balance);
    }

    event Received(address from, uint256 amount);
    event Withdrew(address to, uint256 amount);
    event WithdrewTokens(address tokenContract, address to, uint256 amount);
}