// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./FinalCollection.sol";

// Need to add function to update fee

contract FinalMarketplace is ReentrancyGuard, Ownable {
    address payable public immutable feeAccount;
    NFTCollection[] public nftCollectionsArray;
    uint256 public immutable feePercent;
    uint256 public collectionItems;


    MarketItem[] itemsForSale;
    MarketItem[] itemsOwnedByUser;
    uint256 public itemCount;

    struct MarketItem {
        uint256 itemId;
        IERC721 nftCollection; // this parameter is a ERC721 contract, so all the ERC721 functions can be used here
        uint256 tokenId;
        uint256 price;
        address payable seller;
        bool forSale; // sold => forSale. Its more informative. Technically every NFT is sold.
    }
    mapping(uint256 => MarketItem) public items;
    mapping(NFTCollection => uint256) public collectionToItemId;

    event MarketItemAdded(
        // "indexed" applied to a field allows to use that field as a filter
        uint256 itemId,
        address indexed nftCollection,
        uint256 tokenId,
        uint256 price,
        address indexed seller
    );

    event MarketItemPurchase(
        uint256 itemId,
        address indexed nftCollection,
        uint256 tokenId,
        uint256 price,
        address indexed seller,
        address indexed buyer
    );

    constructor() {
        feeAccount = payable(msg.sender); // the account that receives the fees
        feePercent = 2;
        // The first collection of the array will be used.
        // uint256 collectionId = collectionToItemId[nftCollectionsArray[0]];
        // collectionItems = nftCollectionsArray[collectionId]
        //     .getNumOfCollectionItems();
    }

    function addCollection(address _nftCollectionAddress) public {
        NFTCollection nftCollection = NFTCollection(_nftCollectionAddress);
        nftCollectionsArray.push(nftCollection);
    }

    // Not used
    function chooseCollection(uint256 _collectionIndex) public {
        uint256 collectionId = collectionToItemId[
            nftCollectionsArray[_collectionIndex]
        ];
        collectionItems = nftCollectionsArray[collectionId]
            .getNumOfCollectionItems();
        // MarketItem storage currentMarketItem = items[collectionItems];
    }

    function addMarketItem(
        IERC721 _nft,
        uint256 _tokenId,
        uint256 _price
    ) external nonReentrant {
        if (_price <= 0) {
            revert("Price must be greater than zero");
        }
        itemCount++;
        // transfer nft. For this to work, the user has to call `setApprovalForAll()` first
        _nft.transferFrom(msg.sender, address(this), _tokenId);
        items[itemCount] = MarketItem(
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            true
        );
        emit MarketItemAdded(
            itemCount,
            address(_nft),
            _tokenId,
            _price,
            msg.sender
        );
    }

    function buyMarketItem(uint256 _itemId) external payable nonReentrant {
        uint256 _totalPrice = getTotalPrice(_itemId);
        MarketItem storage item = items[_itemId];
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(msg.value == _totalPrice, "not enough money");
        require(!item.forSale, "item not for sale!");
        // pay seller and feeAccount
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);
        item.forSale = false;
        // transfer nft to buyer
        item.nftCollection.transferFrom(
            address(this),
            msg.sender,
            item.tokenId
        );
        emit MarketItemPurchase(
            _itemId,
            address(item.nftCollection),
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        );
    }

    function withdraw() public onlyOwner {
        // TODO
    }

    function getTotalPrice(uint256 _itemId) public view returns (uint256) {
        return (items[_itemId].price * (100 - feePercent / 100));
    }

    function getItemsForSale() public returns (MarketItem[] memory) {
        for (uint256 i = 0; i < collectionItems; ) {
            if (items[i].forSale) {
                itemsForSale.push(items[i]);
            }
            unchecked {
                i++;
            }
        }
        return itemsForSale;
    }

    function getItemsOwnedByUser() public returns (MarketItem[] memory) {
        delete itemsOwnedByUser;
        for (uint256 i = 0; i < collectionItems; ) {
            if (items[i].seller == msg.sender) {
                // Not sure
                itemsOwnedByUser.push(items[i]);
            }
            unchecked {
                i++;
            }
        }
        return itemsOwnedByUser;
    }



    // This if for a fresh compile


    /*
        This is so that we can find all makers
    */
    address[] collections;

    /*
        Added for implementation of maker contract
        Used store all of a makers product lines in an accessable way
        implemented in `getMakerProductLines()` below
    */
    mapping(address => address[]) makerContractToProductLines;

    /*
        adder function for maker contract's product lines
    */
    function addMakerProductLines(address _maker, address _newProductLine) external {
        // require msg.sender == admin[i];
    makerContractToProductLines[_maker].push(_newProductLine);
    }

    /*
        Getter function for maker contract's product lines
    */
    function getMakerProductLines(address _maker) external view returns(address[] memory) {
        return makerContractToProductLines[_maker];
    }

    /*
        Added to associate admins with their MakerContract
    */
    mapping(address => address) adminToMaker; // Does not allow one account to have many 'makers'

    function setMakerContractToAdmin(address _makerContract) external {
        /*
            we have to add control here. Maybe allow this only to called
            by other admins. We would pass another parameter and change the 
            mapping's key to that instead of msg.sender
        */
        adminToMaker[msg.sender] = _makerContract;
    } 

    function getMakerContractToAdmin(address _admin) external view returns(address) {
        return adminToMaker[_admin];
    }
}
