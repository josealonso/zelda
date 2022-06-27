// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./Models.sol";
import "hardhat/console.sol";

contract StubMaker is ERC721, Ownable {
    uint256 public maxTokenId;
    uint256 public tokenIds;

    constructor(string memory name_, string memory symbol_, uint256 maxTokenId_)
    ERC721(name_, symbol_)
    {
        maxTokenId = maxTokenId_;
    }

    function mint(address toOwner) public payable returns (uint256) {
        require(tokenIds < maxTokenId, "Exceed maximum supply");
        console.log("mint: msg sender is %s, msg.value is %s", msg.sender, msg.value);
        tokenIds += 1;
        _safeMint(toOwner, tokenIds);
        return tokenIds;
    }
}
