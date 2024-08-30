// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";


contract CustomToken is ERC20, Ownable, ERC20Burnable, ERC20Pausable{
    bool public isPausable;
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool _isPausable
    ) ERC20(name, symbol) Ownable(owner)
    {
        // vote = _VoteType;
        if (initialSupply > 0){
            _mint(owner, initialSupply * (10 ** decimals()));
        }

        isPausable = _isPausable;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function pause() public onlyOwner {
        require(isPausable, "Token not capapable for pausing");
        _pause();
    }

    function unpause() public onlyOwner {
        require(isPausable, "Token not capapable for unpausing");
        _unpause();
    }


    function _update(address from, address to, uint256 value)
        virtual
        internal
        override(ERC20, ERC20Pausable)
    {
        if (!isPausable){
            ERC20._update(from, to, value);
        }else{
            super._update(from, to, value);
        }
    }
}

contract FlashMintableCustomToken is CustomToken, ERC20FlashMint{
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool _isPausable
    ) CustomToken(name, symbol, initialSupply, owner, _isPausable){}

    function _update(address from, address to, uint256 value) internal virtual override(CustomToken, ERC20){
        super._update(from, to, value);
    }
}

import "@openzeppelin/contracts/access/manager/AccessManaged.sol";
contract ManagedCustomToken is ERC20, AccessManaged, ERC20Burnable, ERC20Pausable{
    bool public isManagedPausable;
    bool public isFlashMintable;
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool _isPausable
    ) ERC20(name, symbol) AccessManaged(owner)
    {
        // vote = _VoteType;
        if (initialSupply > 0){
            _mint(owner, initialSupply * (10 ** decimals()));
        }

        isManagedPausable = _isPausable;
    }

    function mint(address to, uint256 amount) public restricted {
        _mint(to, amount);
    }

    function pause() public restricted {
        require(isManagedPausable, "Token not capapable for pausing");
        _pause();
    }

    function unpause() public restricted {
        require(isManagedPausable, "Token not capapable for unpausing");
        _unpause();
    }


    function _update(address from, address to, uint256 value)
        virtual
        internal
        override(ERC20, ERC20Pausable)
    {
        if (!isManagedPausable){
            ERC20._update(from, to, value);
        }else{
            super._update(from, to, value);
        }
    }
}


contract ManagedFlashMintableCustomToken is CustomToken, ERC20FlashMint{
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner,
        bool _isPausable
    ) CustomToken(name, symbol, initialSupply, owner, _isPausable){}

    function _update(address from, address to, uint256 value) internal virtual override(CustomToken, ERC20){
        super._update(from, to, value);
    }
}