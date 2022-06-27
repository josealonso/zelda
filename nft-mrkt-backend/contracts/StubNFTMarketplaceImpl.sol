//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Models.sol";
import "./StubNFTMarketplaceIf.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./StubMaker.sol";
import "hardhat/console.sol";

contract StubNFTMarketplaceImpl is StubNFTMarketplaceIf {
    mapping(address => Models.NftCollection) collectionsForSale;
    mapping(uint256 =>address) allAddresses;
    uint256 allAddressesCounter;

    constructor () { }

    // msg.sender is maker's address
    function createNftCollectionContract(
        Models.NftCollection memory _newNftCollection
    ) external override {
        console.log("createNftCollectionContract: msg sender is %s", msg.sender);
        // TODO: deploy maker contract here
        collectionsForSale[_newNftCollection.nftContractAddress] = _newNftCollection;
        allAddresses[allAddressesCounter] = _newNftCollection.nftContractAddress;
        allAddressesCounter += 1;
    }
    // msg.sender is buyer's address
    // msg.value is price sender willing to pay
    function buyItem(address collectionAddress)
    external override payable
    returns (uint256) {
        uint256 price = collectionsForSale[collectionAddress].price;
        console.log("buyItem: msg sender is %s, msg.value is %s, price is %s", msg.sender, msg.value, price);
        require(msg.value > price);
        StubMaker col = StubMaker(collectionAddress);
        uint256 id = col.mint(msg.sender);
        return id;
    }

    function getAllCollectionsForSale()
    external override
    view
    returns (Models.NftCollection[] memory collections) {
        console.log("buyItem: msg sender is %s", msg.sender);
        Models.NftCollection[] memory col = new Models.NftCollection[](allAddressesCounter);
        for (uint256 i = 0; i< allAddressesCounter; i++) {
            col[i]= collectionsForSale[allAddresses[i]];
        }
        return col;
    }
}
