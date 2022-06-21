//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

struct CollectionData {
    uint256 numMaxOfTokens;
    address makerAddress;
    mapping(uint256 => uint256) idToTokenPrice;
}

/**
 * @dev An integer is the collection identifier.
 * mapping (uint256 => CollectionData) public idToCollectionData;
 */

interface IMarketplace {
    
    function addCollection(CollectionData memory collectionData) external;

    function addToken() external onlyMaker;

    function removeToken() external onlyMaker;

    function updateTokenPrice() external onlyMaker;

    function updateMakerAddress() external onlyMaker;

    function getTokenPrice() external {}

    modifier onlyMaker() {
        _;
    }

    function buyItem(string memory tokenURI, uint256 tokenId)
        external
        returns (uint256)
    {}

    // .......................
}
