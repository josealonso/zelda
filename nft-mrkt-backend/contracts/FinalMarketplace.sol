// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract ExampleMarketplace is ReentrancyGuard {
    address payable public immutable feeAccount;
    uint256 public immutable feePercent;
    uint256 public immutable collectionItems;
    Item[] itemsForSale;
    Item[] itemsOwnedByUser;
    uint256 public itemCount;

    struct Item {
        uint256 itemId;
        IERC721 nftCollection;
        uint256 tokenId;
        uint256 price;
        address payable seller;
        bool sold;
    }
    mapping(uint256 => Item) public items;

    event NewItem(
        // "indexed" allows to use that field as a filter
        uint256 itemId,
        address indexed nftCollection,
        uint256 tokenId,
        uint256 price,
        address indexed seller
    );

    event BoughtItem(
        uint256 itemId,
        address indexed nftCollection,
        uint256 tokenId,
        uint256 price,
        address indexed seller,
        address indexed buyer
    );

    constructor(uint256 _collectionItems, uint256 _feePercent) {
        // script ---> .....deploy(1)
        feeAccount = payable(msg.sender); // the account that receives the fees
        feePercent = _feePercent;
        collectionItems = _collectionItems;
    }

    function makeItem(
        IERC721 _nft,
        uint256 _tokenId,
        uint256 _price
    ) external nonReentrant {
        if (_price <= 0) {
            revert("Price must be greater than zero");
        }
        itemCount++;
        // transfer nft. For this to work, the user has to call `approve()` first
        _nft.transferFrom(msg.sender, address(this), _tokenId);
        items[itemCount] = Item(
            itemCount,
            _nft,
            _tokenId,
            _price,
            payable(msg.sender),
            false
        );
        emit NewItem(itemCount, address(_nft), _tokenId, _price, msg.sender);
    }

    function buyItem(uint256 _itemId) external payable nonReentrant {
        uint256 _totalPrice = getTotalPrice(_itemId);
        Item storage item = items[_itemId];
        require(_itemId > 0 && _itemId <= itemCount, "item doesn't exist");
        require(msg.value == _totalPrice, "not enough money");
        require(!item.sold, "item already sold");
        // pay seller and feeAccount
        item.seller.transfer(item.price);
        feeAccount.transfer(_totalPrice - item.price);
        item.sold = true;
        // transfer nft to buyer
        item.nftCollection.transferFrom(
            address(this),
            msg.sender,
            item.tokenId
        );
        emit BoughtItem(
            _itemId,
            address(item.nftCollection),
            item.tokenId,
            item.price,
            item.seller,
            msg.sender
        );
    }

    function getTotalPrice(uint256 _itemId) public view returns (uint256) {
        return (items[_itemId].price * (100 - feePercent / 100));
    }

    function getItemsForSale() public returns (Item[] memory) {
        for (uint256 i = 0; i < collectionItems; ) {
            if (!items[i].sold) {
                itemsForSale.push(items[i]);
            }
            unchecked {
                i++;
            }
        }
        return itemsForSale;
    }

    function getItemsOwnedByUser() public returns (Item[] memory) {
        delete itemsOwnedByUser;
        for (uint256 i = 0; i < collectionItems; ) {
            if (items[i].seller == msg.sender) {  // Not sure
                itemsForSale.push(items[i]);
            }
            unchecked {
                i++;
            }
        }
        return itemsOwnedByUser;
    }
}
