// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTCollection is ERC721 {
    uint256 public maxNumOfItems;
    string public productName;
    address public makerAddress;
    uint256 public tokenCount; // counter

    /* 
        Sale price needs to be defined to work with frontend
        See frontend>src>api>Backend.if>NFTContract type
    */
    uint256 public makerSalePrice;

    /* 
        Product Uri should be set for the contract, not the NFT's.
        Product lines are fungible until first sale.
    */
    string public productUri;

    /* 
        Product metadata needs to be included to function with optional
        fields that we allow to input on contract creation modal
    */
    string public productMeta;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _maxNumOfItems,
        string memory _productName,
        uint256 _makerSalePrice,
        string memory _productMeta
    ) ERC721(_name, _symbol) {
        maxNumOfItems = _maxNumOfItems;
        productName = _productName;
        makerAddress = msg.sender;
        makerSalePrice = _makerSalePrice;
        productMeta = _productMeta;
    }

    function mint() external returns (uint256) {
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        return tokenCount;
    }

    function getNumOfCollectionItems() external view returns (uint256) {
        return maxNumOfItems;
    }

    function getCollectionAddress() external view returns (address) {
        return address(this);
    }

    function getMakerAddress() external view returns (address) {
        return makerAddress;
    }

    function getProductName() external view returns (string memory) {
        return productName;
    }
}
