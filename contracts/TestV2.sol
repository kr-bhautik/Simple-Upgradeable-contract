// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestV2 {
    uint256 private val;

    // Stores a new value in the contract
    function set(uint256 _val) public {
        val = _val;
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return val;
    }

    function increment() public {
        val++;
    }
}