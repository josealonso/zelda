//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * For the first MVP, let's assume there is only one maker with only one collection.
 */
struct NftToken {
    uint256 tokenId;
    string metadataUri;
    address owner;
    uint256 price;
}

/**
 * @dev An array is easier than a mapping/dictionary, although the lookup is not as efficient.
 */
struct NftCollection {
    string name;
    string symbol;
    string collectionMetadataURI;
    uint256 makerRoyalties;
    address makerAddress;
    address nftContractAddress;
    NftToken[] nftsInCollection;
}

interface IMarketplace {
    /**
     * @dev Emitted when a collection is added to the marketplace.
     * A contract is created per collection.
     */
    event CreateNftCollectionContract(uint256 indexed collectionId);

    /**
     * @dev Emitted when a token price is modified.
     */
    event UpdateTokenPrice(
        uint256 indexed collectionId,
        uint256 indexed tokenId,
        uint256 indexed newPrice
    );

    /**
     * @dev Emitted when the royalties of an existing collection are modified.
     */
    event UpdateSellerRoyalties(
        uint256 indexed collectionId,
        uint256 sellerPercentage
    );

    /**
     * @dev Emitted when the royalties of the marketplace are modified.
     */
    event UpdateMarketplaceRoyalties(uint256 marketpacePercentage);

    /**
     * @dev Emitted when a maker address is updated.
     */
    event UpdateMakerAddress(
        uint256 indexed collectionId,
        address indexed newAddress
    );

    /**
     * @dev Adds a collection to the marketplace.
     * Emits a {CreateNftCollectionContract} event.
     */
    function createNftCollectionContract(
        address makerAddress,
        string memory collectionURI,
        uint256 sellerRoyalties
    ) external;

    function setCollectionURI(uint256 collectionId, string memory collectionURI)
        external;

    /**
     * @dev Change the price of an existing token.
     * Action performed on behalf of the maker.
     * Emits a {UpdateTokenPrice} event.
     */
    function updateTokenPrice(
        uint256 collectionId,
        uint256 tokenId,
        uint256 newPrice
    ) external;

    function setSellerRoyalties(
        uint256 collectionId,
        uint256 sellerPercentage,
        uint256 marketplacePercentage
    ) external;

    function setMarketplaceRoyalties(uint256 marketplacePercentage) external;

    /**
     * @dev Change the wallet address of a maker that is already registered on the marketplace.
     * Action performed on behalf of the maker.
     * Emits a {UpdateMakerAddress} event.
     */
    function updateMakerAddress(
        uint256 collectionId,
        address oldAddress,
        address newAddress
    ) external;

    /**
     * @dev Returns the price of the `tokenId` token of the `collectionId` collection.
     *
     *  * Requirements:
     *
     * - `collectionId` must exist.
     * - `tokenId` must exist.
     */
    function getTokenPrice(uint256 collectionId, uint256 tokenId)
        external
        returns (uint256);

    function getMakerAddress(uint256 collectionId) external returns (address);

    function getMarketplaceRoyalties()
        external
        returns (uint256 marketplacePercentage);

    function getSellerRoyalties(uint256 collectionId)
        external
        returns (uint256 sellerPercentage);

    function buyItem(uint256 collectionId, uint256 tokenId)
        external
        returns (uint256);

    /**
     * @dev Returns only the tokens of a `collectionId` collection that can be sold.
     * Assume there is no secondary market (the NFTs can't be reselled).
     * This information is needed by the frontend because the token is not minted until it's sold ("lazy minting" technique)
     */
    function getTokensForSale(uint256 collectionID)
        external
        returns (uint256[] memory tokenIds);

    /**
     * @dev Returns only the tokens that a user has purchased.
     */
    function fetchMyNFTs()
        external
        view
        returns (uint256 collectionId, uint256[] memory tokenIds);
}
