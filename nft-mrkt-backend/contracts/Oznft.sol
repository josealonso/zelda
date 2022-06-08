//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract OzNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("OzExampleNft", "ONFT") {}

    function mintToken(address to) public returns(uint256) {
        _tokenIds.increment();
        _mint(to, _tokenIds.current());
        return _tokenIds.current();
    }
}
