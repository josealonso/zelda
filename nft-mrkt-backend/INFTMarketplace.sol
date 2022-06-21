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

    /**
     * @dev Action performed on behalf of the maker.
     */
    function addToken(uint256 collectionId) external;

    /**
     * @dev Action performed on behalf of the maker.
     */
    function removeToken(uint256 collectionId, uint256 tokenId) external;

    /**
     * @dev Action performed on behalf of the maker.
     */
    function updateTokenPrice(uint256 collectionId, uint256 tokenId) external;

    /**
     * @dev Action performed on behalf of the maker.
     */
    function updateMakerAddress(
        uint256 collectionId,
        address oldAddress,
        address newAddress
    ) external;

    function getTokenPrice(uint256 collectionId, uint256 tokenId) external;

    function getMakerAddress(uint256 collectionId) external;

    function getNumMaxOfTokens(uint256 collectionId) external;

    function buyItem(string memory tokenURI, uint256 tokenId)
        external
        returns (uint256);

    function fetchMyNFTs()
        external
        view
        returns (uint256 collectionId, uint256[] memory tokenIds);
}
