// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract VeraLUXDrop is ERC1155, Ownable {
    
    mapping (uint256 => string) private _uris;

    constructor() public ERC1155("https://bafybeidfg7hoacjzc4gq2liiivispscrgjcrjjkrk3w23j4miy6e4mjmlq.ipfs.nftstorage.link/{id}.json") {}
    
    function uri(uint256 tokenId) override public view returns (string memory) {
        return(_uris[tokenId]);
    }
    
    function setTokenUri(uint256 tokenId, string memory uri) public onlyOwner {
        require(bytes(_uris[tokenId]).length == 0, "Cannot set uri twice"); 
        _uris[tokenId] = uri; 
    }
}