// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Usdc is ERC20, Ownable {
    constructor() ERC20("Usdc", "USDC") {}

    // payable so we can send tokens
    function mint(address to, uint256 amount) public payable {
        _mint(to, amount);
    }

    // for excepting eth
    receive() external payable {

    }
}