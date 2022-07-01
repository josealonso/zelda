// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IFinalMarketplace {

    function addCollection(address _nftCollectionAddress) external;

    function chooseCollection(uint256 _collectionIndex) external;

    function addMarketItem(IERC721 _nft, uint256 _tokenId, uint256 _price) external;

    function buyMarketItem(uint256 _itemId) external payable;

    function withdraw() external;

    function getTotalPrice(uint256 _itemId) external view returns (uint256);

    /*
        Struct getters return the members, not the struct itself
        https://github.com/ethereum/solidity/issues/11826
    */
    function getItemsForSale() external returns (
        uint256 itemId,
        IERC721 nftCollection,
        uint256 tokenId,
        uint256 price,
        address payable seller,
        bool forSale
    );

    function getItemsOwnedByUser() external returns (
        uint256 itemId,
        IERC721 nftCollection,
        uint256 tokenId,
        uint256 price,
        address payable seller,
        bool forSale
    );

    function addMakerProductLines(address _maker, address _newProductLine) external;

    function getMakerProductLines(address _maker) external view returns(address[] memory);

    function setMakerContractToAdmin(address _makerContract) external;

    function getMakerContractToAdmin(address _admin) external view returns(address);
}
