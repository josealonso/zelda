// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

struct NftToken {
    uint256 tokenId;
    string metadataUri;
    address owner;
    uint256 price;
}

struct NftCollection {
    uint256 nftCollectionId;
    string name;
    string symbol;
    string metadataURI;
    uint256 makerRoyalties; // this field is optional
    address makerAddress;
    address nftContractAddress;
    NftToken[] nftsInCollection;
}

contract RandomMaker is ERC721, Ownable {
    NftCollection randomCollection;

    constructor(NftCollection memory _nftCollection)
        ERC721(_nftCollection.name, _nftCollection.symbol)
    {
        randomCollection.name = _nftCollection.name;
        randomCollection.metadataURI = _nftCollection.metadataURI;
    }
}
