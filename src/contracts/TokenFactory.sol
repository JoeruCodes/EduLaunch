//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./CustomToken.sol";
contract TokenFactory {
    event TokenCreated(address indexed owner, address tokenAddress, string tokenType, string symbol);

    function createCustomToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool isPausable
    ) external returns (address) {
        CustomToken token = new CustomToken(name, symbol, initialSupply, owner, isPausable);
        emit TokenCreated(owner, address(token), name, symbol);
        return address(token);
    }

    function createFlashMintableCustomToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool isPausable
    ) external returns (address) {
        FlashMintableCustomToken token = new FlashMintableCustomToken(name, symbol, initialSupply, owner, isPausable);
        emit TokenCreated(owner, address(token), name, symbol);
        return address(token);
    }

    function createManagedCustomToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool isPausable
    ) external returns (address) {
        ManagedCustomToken token = new ManagedCustomToken(name, symbol, initialSupply, owner, isPausable);
        emit TokenCreated(owner, address(token), name, symbol);
        return address(token);
    }

    function createManagedFlashMintableCustomToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool isPausable
    ) external returns (address) {
        ManagedFlashMintableCustomToken token = new ManagedFlashMintableCustomToken(name, symbol, initialSupply, owner, isPausable);
        emit TokenCreated(owner, address(token), name, symbol);
        return address(token);
    }
}