// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract ZeldaCollection is ERC721URIStorage, Ownable {
  using Strings for uint256;
  string _baseTokenURI;

  uint256 public maxNumOfItems;
  string public productName;
  address public makerAddress;
  uint256 public _price = 0.01 ether;

  uint256 public tokenIds;

  // @dev Constructor takes in the baseURI to set _baseTokenURI for the collection.
  constructor(
    string memory _myBaseURI,
    string memory _productName,
    uint256 _maxNumOfItems,
    address _makerAddress
  )
    // These two values (_name and _symbol) are the same for any Zelda collection
    ERC721("ZeldaNFTs", "ZFTs")
  {
    _baseTokenURI = _myBaseURI;
    productName = _productName;
    maxNumOfItems = _maxNumOfItems;
    makerAddress = _makerAddress;
    // more collection variables can be initialized here
  }

  /**
   * @dev _baseURI overrides the Openzeppelin's ERC721 implementation which by default
   * returned an empty string for the baseURI
   */
  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  function mintForMarketplace(string memory _tokenURI) public onlyOwner {
    require(tokenIds < maxNumOfItems, "Exceed maximum supply");
    _safeMint(msg.sender, tokenIds);
    _setTokenURI(tokenIds, _tokenURI);
    tokenIds++;
  }

  /**
   * @dev tokenURI overrides the Openzeppelin's ERC721 implementation for tokenURI function
   * This function returns the URI from where we can extract the metadata for a given tokenId
   */
  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

    string memory baseURI = _baseURI();
    // Here it checks if the length of the baseURI is greater than 0. If it is return the baseURI and attach
    // the tokenId and `.json` to it so that it knows the location of the metadata json file for a given
    // tokenId stored on IPFS
    // If baseURI is empty return an empty string
    return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenIds.toString(), ".json")) : "";
  }

  function getMaxNumOfItems() external view returns (uint256) {
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
