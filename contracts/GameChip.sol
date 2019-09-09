pragma solidity >=0.5.0 <0.6.0;

/**
 * @title ERC20 Token Contract
 * @dev see https://programtheblockchain.com/posts/2018/01/30/writing-an-erc20-token-contract/
 */
contract GameChip {
    // Track how many tokens are owned by each address.
    mapping (address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    string public name = "Game Chip";
    string public symbol = "CHIP";
    uint8 public decimals = 1;
    uint256 public totalSupply = 1000000000 * (uint256(10) ** uint256(decimals));

    event Transfer(address indexed from, address indexed to, uint256 value);
    // event Approval(address indexed owner, address indexed spender, uint256 value);

    function tokenERC20() public {
        // Initially assign all tokens to the contract's creator.
        balanceOf[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function transfer(address to, uint256 value) public returns (bool success) {
        require(balanceOf[msg.sender] >= value);
        balanceOf[msg.sender] -= value;  // deduct from sender's balance
        balanceOf[to] += value;          // add to recipient's balance
        emit Transfer(msg.sender, to, value);
        return true;
    }

    // function approve(address spender, uint256 value)
    //     public
    //     returns (bool success)
    // {
    //     allowance[msg.sender][spender] = value;
    //     emit Approval(msg.sender, spender, value);
    //     return true;
    // }
}