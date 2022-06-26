// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/*
 * This contract uses batch minting, specifically the ERC721A standard
 * instead of the ERC721Enumerable one.
 * It is a collection of seven NFTs whose metadata are hosted on Pignata
 * Its only purpose to test the getTokensForSale() function, calling it from the frontend
 * The buyToken() function has not been implemented yet
 * WARNING: functions not tested yet.
 */

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

struct NftCollection {
    // Not used
    address nftContractAddress; // collection identifier
    string name;
    string symbol;
    string metadataURI;
    uint256 numOfNfts;
    uint256 price;
    address makerAddress;
    // NftToken[] nftsInCollection;    // Not used
}

contract ObjectNFTsV2 is ERC721A, Ownable, ReentrancyGuard {
    using Strings for uint256;
    /**
     * @dev _baseTokenURI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`.
     */
    struct NftToken {
        uint256 tokenId;
        string metadataUri;
        address owner;
        uint256 price;
        // mapping(uint256 => uint256) collectionIdToTokenId;
    }
    NftToken nftToken;
    NftToken[] nftTokenArray;
    NftToken[] nftTokensForSale;

    string public collectionName;
    string public collectionSymbol;
    string public baseURI;
    uint256 public numOfNfts = 7;
    // address public makerAddress;
    // NftToken[] nftsInCollection;

    // total number of minted tokens
    uint256 public mintedTokens;

    mapping(uint256 => NftToken) idToCollectionTokens;

    /*************************************************************
     * This will come from the backend (maker flow)
     **************************************************************/
    function _populateArray() internal returns (NftToken[] memory) {
        nftToken = NftToken(0, "", owner(), 3);
        // idToCollectionTokens[0] = nftToken;
        // NftToken[] storage nftTokenArray;
        nftTokenArray.push(nftToken);
        nftToken = NftToken(1, "", owner(), 3);
        nftTokenArray.push(nftToken);
        nftToken = NftToken(2, "", owner(), 5);
        nftTokenArray.push(nftToken);
        nftToken = NftToken(3, "", owner(), 1);
        nftTokenArray.push(nftToken);
        nftToken = NftToken(4, "", owner(), 4);
        nftTokenArray.push(nftToken);
        nftToken = NftToken(5, "", owner(), 3);
        nftTokenArray.push(nftToken);
        nftToken = NftToken(6, "", owner(), 2);
        nftTokenArray.push(nftToken);
        return nftTokenArray;
    }

    //**************************************************************/

    /**
     * @dev ERC721 constructor takes in a `name` and a `symbol` to the token collection.
     * Constructor takes in the baseURI to set _baseTokenURI for the collection.
     */
    constructor(
        string memory _collectionName,
        string memory _collectionSymbol,
        string memory _baseURI
    )
        // address _makerAddress,
        // NftToken[] memory _nftsInCollection
        ERC721A(_collectionName, _collectionSymbol)
    {
        collectionName = _collectionName;
        collectionSymbol = _collectionSymbol;
        baseURI = _baseURI;
        // nftsInCollection = _nftsInCollection;  // compile error
        _populateArray();
        // _initCollectionTokens(_nftsInCollection);
        // makerAddress = _makerAddress;
    }

    //  Not used
    function _initCollectionTokens(NftToken[] memory _nftTokens) internal {
        // NftToken memory nftToken;
        // for (uint256 i = 0; i < numOfNfts; ) {
        //     nftToken.tokenId = i;
        //     nftToken.metadataUri = _nftTokens[i].metadataUri;
        //     nftToken.price = _nftTokens[i].price;
        //     nftToken.owner = owner();
        //     idToCollectionTokens[i] = nftToken;
        //     unchecked {
        //         i++;
        //     }
        // }
    }

    /**
     * @dev The collection owner can pre mint all the NFTs.
     */
    function preMint() public payable onlyOwner {
        require(mintedTokens == 0, "Can't do batch minting");
        _safeMint(msg.sender, numOfNfts);
        mintedTokens = numOfNfts;
    }

    // @dev Function used to update the baseURI
    function updateBaseURI(string memory _newBaseURI) public {
        baseURI = _newBaseURI;
    }

    // @dev Function used to update the price
    // function updatePrice(uint256 _newPrice) public {
    //     price = _newPrice;
    // }

    function getTokensForSale() public returns (NftToken[] memory) {
        // NftToken[] storage nftTokens;
        for (uint256 i = 0; i < numOfNfts; ) {
            if (nftTokenArray[i].owner == owner()) {
                nftTokensForSale.push(nftTokenArray[i]);
            }
            unchecked {
                i++;
            }
        }
        return nftTokensForSale;
    }

    function buyToken(NftToken memory _nftToken) public {
        // TODO
    }

    /**
     * @dev tokenURI overrides the ERC721A implementation for tokenURI function
     * This function returns the URI from where we can extract the metadata for a given tokenId
     */
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        // baseURI = _baseURI();

        // Here it checks if the length of the baseURI is greater than 0, if it is return the baseURI and attach
        // the tokenId and `.json` to it so that it knows the location of the metadata json file for a given
        // tokenId stored on IPFS
        // If baseURI is empty return an empty string
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
                : "";
    }

    /**
     * @dev withdraw sends all the ether in the contract
     * to the owner of the contract
     */
    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
}
