// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

contract StandardImplv2 {
    uint256 public constant VERSION = 2;
    // uint256 public constant VERSION = 2;

    bool public initialized;

    uint256 public value;
    mapping (address => uint256) name;

    modifier initializer() {
        require(!initialized, "Only initialize once");
        _;
        initialized = true;
    }

    function initialize(uint256 _initValue) public initializer {
        value = _initValue;
    }

    function setValue(uint256 _newValue) public {
        value = _newValue * 2;
        name[msg.sender] = value;
    }

    function getValueByAddress(address user) external view returns (uint256) {
        return name[user];
    }
}