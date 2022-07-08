// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

/**
 * @author The Zelda.xyz Team
 * @dev Despite this name, this contract will probably implement the marketplace functionalities too.
 * Ideally the features common to all the collections would be in a separate contract.
 * But a single contract is likely to be more convenient for the project initial stages.
 * TODO ---> an interface with even more documentation, more functions,
 * data structures containing fields for each token (price, forSale and other fields),
 * data structures relating the marketplace and the collections, unit testing.
 */
contract ZeldaCollection is ERC721Enumerable, Ownable {
  using Strings for uint256;
  // `baseTokenURI` points to the IPFS location containing the folder with all the JSON files, one per token.
  string public baseTokenURI;
  /**
   * @dev The value of the following three variables can be changed anytime only by the marketplace (owner).
   */
  uint256 public maxNumOfItems;
  string public productName;
  address public makerAddress;
  // The price can be different for any token, it is here just a reminder.
  uint256 public _price = 0.01 ether;

  // This is a counter for the minted tokens. Its value can go from 0 to `maxNumOfItems`
  uint256 public numNftsMinted;

  event ChangedProductName(uint256 indexed collectionId, string newValue);

  event ChangedMaxNumOfItems(uint256 indexed collectionId, uint256 newValue);

  event ChangedMakerAddress(uint256 indexed collectionId, address newValue);

  /**
   * @dev Constructor for a new collection.
   * The collection URI is the most important parameter, it points to the IPFS location
   * containing the folder with all the JSON files, one per token. An example here:
   * https://gateway.pinata.cloud//ipfs/QmPJ97MiYZngyNcJTp8VWa97KwtELSPyUzZnz1WuVZM7qy
   * The rest of the parameters can be changed, but not the URI.
   * The _name and _symbol variables have fixed values, serving as a way to indicate
   * an NFT collection is a Zelda collection. Anyone can deploy an NFT contract with these
   * two values, so a more sophisticated technique is needed, likely leveraging cryptography.
   */
  constructor(
    string memory _myBaseURI,
    string memory _productName,
    uint256 _maxNumOfItems,
    address _makerAddress
  ) ERC721("ZeldaNFTs", "ZFTs") {
    baseTokenURI = _myBaseURI;
    productName = _productName;
    maxNumOfItems = _maxNumOfItems;
    makerAddress = _makerAddress;
    // more collection variables can be initialized here
  }

  /**
   * @dev _baseURI overrides the Openzeppelin's ERC721 implementation which by default
   * returned an empty string for the baseURI
   * @return The IPFS location containing the folder with all the JSON files for this collection.
   */
  function _baseURI() internal view virtual override returns (string memory) {
    return baseTokenURI;
  }

  /**
   * @dev This function allows to mint the tokens requested by a maker.
   * It can only be called by the owner, which is the marketplace itself. Hence its name.
   * Improvement: use the 721A library, which allows to mint several tokens at a time.
   * But it comes with a trade-off.
   */
  // function mintForMarketplace(string memory _tokenURI) public onlyOwner {
  function mintForMarketplace(uint256 _amount) public onlyOwner {
    require(totalSupply() < maxNumOfItems, "All NFTs have been minted");
    require(totalSupply() + _amount <= maxNumOfItems, "Mint exceeds max supply");

    uint256 nextTokenId = numNftsMinted + 1;

    for (uint256 i = 0; i < _amount; i++) {
      _safeMint(msg.sender, nextTokenId);
    }
    numNftsMinted += _amount;
  }

  /**
   * @dev tokenURI overrides the Openzeppelin's ERC721 implementation for tokenURI function.
   * @return The URI from where we can extract the metadata for a given tokenId.
   * The token id is concatenated with the base URI.
   * Thus the token URI doesn't need to be stored in a data structure, as it's generated dynamically.
   * The marketplace will query it once per token and keep it in their cache.
   */
  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

    string memory baseURI = _baseURI();
    // Here it checks if the length of the baseURI is greater than 0. If it is return the baseURI and attach
    // the tokenId and `.json` to it so that it knows the location of the metadata json file for a given
    // tokenId stored on IPFS
    // If baseURI is empty return an empty string
    return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
  }

  /**
   * @dev The returned value is the address where this collection is deployed.
   * It really is the most reliable collection identifier, since the same collection can only be deployed once.
   */
  function getCollectionAddress() external view returns (address) {
    return address(this);
  }

  function getMaxNumOfItems() external view returns (uint256) {
    return maxNumOfItems;
  }

  function getMakerAddress() external view returns (address) {
    return makerAddress;
  }

  function getProductName() external view returns (string memory) {
    return productName;
  }

  /**
   * @dev Only the marketplace on behalf of the maker can change this value.
   */
  function setMaxNumOfItems(uint256 _collectionId, uint256 _newMaxNumOfItems) public onlyOwner {
    maxNumOfItems = _newMaxNumOfItems;
    emit ChangedMaxNumOfItems(_collectionId, _newMaxNumOfItems);
  }

  /**
   * @dev Only the marketplace on behalf of the maker can change this value.
   */
  function setMakerAddress(uint256 _collectionId, address _newMakerAddress) public onlyOwner {
    makerAddress = _newMakerAddress;
    emit ChangedMakerAddress(_collectionId, _newMakerAddress);
  }

  /**
   * @dev Only the marketplace on behalf of the maker can change this value.
   */
  function setProductName(uint256 _collectionId, string memory _newProductName) public onlyOwner {
    productName = _newProductName;
    emit ChangedProductName(_collectionId, _newProductName);
  }
}
