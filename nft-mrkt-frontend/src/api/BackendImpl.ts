import axios from "axios";
import { BigNumber, ethers } from "ethers";
import { BackendAPI, ERC721TokenData, Maker, NFTContract, Token } from "./BackendIf";
import Web3Modal from "web3modal";
import MarketplaceContractArtifact from "../artifacts/contracts/StubNFTMarketplaceIf.sol/StubNFTMarketplaceIf.json";
import MakerContractArtifact from "../artifacts/contracts/StubMaker.sol/StubMaker.json";
import IERC721MetadataArtifact
    from "../artifacts/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol/IERC721Metadata.json";
import { IERC721Metadata, StubMaker, StubNFTMarketplaceImpl } from "../typechain";
import { GetIPFSGatewayPrefixedLink } from "../models/IPFSUtils";

const COVALENT_CHAIN_ID = 80001
const MAX_TOKENS = 999
const COMPANY_NAME = "My Company Name"
const COMPANY_LOGO = "https://picsum.photos/200"

export default class BackendAPIImpl implements BackendAPI {
    private readonly mpContractAddress: string
    providerFn: () => Promise<ethers.providers.JsonRpcProvider> = async () => {
        const web3Modal = new Web3Modal()
        return new ethers.providers.Web3Provider(await web3Modal.connect())
    }
    private readonly network: string = "mumbai"

    constructor(
        mpContractAddress?: string,
        providerFnOverride?: ()=>Promise<ethers.providers.JsonRpcProvider>
    ) {
        if (mpContractAddress) {
            this.mpContractAddress = mpContractAddress
        } else {
            throw new Error("cannot get marketplace contract address")
        }
        if (providerFnOverride) {
            this.providerFn = providerFnOverride
        }
    }

    async getTokenDetail(contractAddress: string, tokenID: number): Promise<ERC721TokenData> {
        const prov = await this.providerFn()
        const contract = await new ethers.Contract(contractAddress, IERC721MetadataArtifact.abi, prov) as IERC721Metadata
        const tokenURI = await contract.tokenURI(tokenID)
        const owner = await contract.ownerOf(tokenID)
        const httpLink = GetIPFSGatewayPrefixedLink(tokenURI)
        const metadata = await axios.get(httpLink)

        return {
            id: BigNumber.from(tokenID),
            ownerAddress:owner,
            contractAddress: contractAddress,
            name:"name" in metadata.data ? metadata.data["name"] : "",
            description:"description" in metadata.data ? metadata.data["description"] : "",
            image:"image" in metadata.data ? GetIPFSGatewayPrefixedLink(metadata.data["image"]) : "",
        }
    }

    /**
     * Probably better to use covalent for this
     * @param nftContractAddress
     */
    async getCollectionData(nftContractAddress: string): Promise<NFTContract> {
        const prov = await this.providerFn()
        const allData = await this.getNFTsForSale()
        let firstContract : NFTContract | null = null
        if (allData) {
            const first = allData
              .find(i => {
                  return i.contract.contractAddress === nftContractAddress
              })
            if (first) {
                firstContract = first.contract
            }
        }
        if (!firstContract) {
            throw new Error("cannot get contract data")
        }

        const nftContract = new ethers.Contract(
          nftContractAddress, MakerContractArtifact.abi, prov) as StubMaker
        const currentMaxToken = await nftContract.tokenIds()
        let tokens: Token[] = []
        for (let i =1; i<=currentMaxToken.toNumber(); i++ ) {
            tokens.push(
              {
                  id: BigNumber.from(i),
                  ownerAddress: (await nftContract.ownerOf(i)).toString(),
                  contract: firstContract,
                  forSale: false,
                  salePrice: firstContract.makerSalePrice,
                  minted: true,
              }
            )
        }
        firstContract.tokensMinted = tokens
        return firstContract
    }

    async addCollectionContract(
      productName: string, //Product Line
      makerAddress: string, // Manufacturer address
      productImgUri: string, // Product Image
      productMetadata: string,
      makerSalePrice: BigNumber,  // Price
      numberProduced: number // Max TokenId
    ): Promise<NFTContract> {
        if (productMetadata === "") {
            productMetadata = "test_product_meta"
        }
        if (productImgUri === "") {
            productImgUri = "test_image_uri"
        }

        const prov = await this.providerFn()
        const signer = await prov.getSigner(makerAddress)
        const cf = new ethers.ContractFactory(
          MakerContractArtifact.abi,
          MakerContractArtifact.bytecode,
          signer
        );
        const makerContract = await cf.deploy("name", "symbol", numberProduced)

        const mpContract = new ethers.Contract(
          this.mpContractAddress,
          MarketplaceContractArtifact.abi,
          signer
        ) as StubNFTMarketplaceImpl
        const tx = await mpContract.createNftCollectionContract({
            productName: productName,
            price: makerSalePrice,
            makerAddress: makerAddress,
            metadataURI: productMetadata,
            imageURI: productImgUri,
            symbol: "SYM",
            nftContractAddress: makerContract.address
        })
        await tx.wait()
        return {
            contractAddress: makerContract.address,
            maker: {
                companyLogoUri: COMPANY_LOGO,
                companyName: COMPANY_NAME,
                network: this.network,
                userAddress: makerAddress
            },
            makerSalePrice: makerSalePrice,
            numberProduced: numberProduced,
            productMeta: productMetadata,
            productName: productName,
            productUri: productImgUri
        }
    }

    /**
     * This function will call covalent's api, unlike most of the other functions
     * in this class. Ideally, this should be injected instead to support
     * testing or local development.
     * @param ownerAddress
     */
    async getUserNFTs(ownerAddress: string): Promise<Token[]> {
        let url = `https://api.covalenthq.com/v1/${COVALENT_CHAIN_ID}/address/${ownerAddress}/balances_v2/?format=JSON&nft=true&key=${process.env.REACT_APP_COVALENT_API_KEY}`
        let response = await axios.get(url)
        let items = response.data["data"]["items"]
        return items.filter(function (i: any) {
            return i["supports_erc"].includes("erc721")
        }).flatMap(function (i: any) {
            if (!i.hasOwnProperty("nft_data")) {
                return
            }
            return i["nft_data"].map(function (j: any) {
                    return {
                        id: BigNumber.from(j["token_id"]),
                        ownerAddress: ownerAddress,
                        contract: {
                            contractAddress: i["contract_address"],
                            maker: {
                                companyLogoUri: "",
                                companyName: "",
                                network: "",
                                userAddress: ""
                            },
                            makerSalePrice: BigNumber.from(0),
                            productUri: "",
                            productName: "",
                            productMeta: "",
                            numberProduced: 0,
                        },
                        forSale: false,
                        salePrice: BigNumber.from(0),
                        minted: true,
                    }
                }
            )
        })
    }

    async buyNFT(nftContractAddress: string, tokenId: BigNumber): Promise<BigNumber> {
        const prov = await this.providerFn()
        const signer = await prov.getSigner()
        const contract = new ethers.Contract(
          this.mpContractAddress,
          MarketplaceContractArtifact.abi,
          signer
        ) as StubNFTMarketplaceImpl;
        const price = await contract.getPrice(nftContractAddress);
        const response = await contract.buyItem(
          nftContractAddress,
          { value: price, gasLimit: 13000000 }
        );
        const receipt = await response.wait();
        if (receipt.events) {
            const tokenID = parseInt(receipt.events[0]["topics"][3], 16);
            return BigNumber.from(tokenID);
        }
        throw new Error("canont get token id")
    }

    async changePrice(contractAddress: string, newPrice: Number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async getMakerData(makerAddress: string): Promise<NFTContract[]> {
        const prov = await this.providerFn()
        const mpContract = new ethers.Contract(
          this.mpContractAddress,
          MarketplaceContractArtifact.abi,
          prov
        ) as StubNFTMarketplaceImpl
        const response = await mpContract.getAllCollectionsForSale()
        return response.map(i => {
            let t: NFTContract = {
                contractAddress: i.nftContractAddress,
                maker: {
                    companyLogoUri: COMPANY_LOGO,
                    companyName: COMPANY_NAME,
                    network: this.network,
                    userAddress: i.makerAddress
                },
                makerSalePrice: i.price,
                productUri: i.imageURI,
                productName: i.productName,
                productMeta: i.metadataURI,
                numberProduced: MAX_TOKENS
            }
            return t;
        })
    }

    async getNFTsForSale(): Promise<Token[]> {
        const prov = await this.providerFn()
        const signer = await prov.getSigner()
        const mpContract = new ethers.Contract(
          this.mpContractAddress,
          MarketplaceContractArtifact.abi,
          signer
        ) as StubNFTMarketplaceImpl
        const response = await mpContract.getAllCollectionsForSale()
        return response.map(i => {
            let t: Token;
            t = {
                contract: {
                    contractAddress: i.nftContractAddress,
                    maker: {
                        companyLogoUri: COMPANY_LOGO,
                        companyName: COMPANY_NAME,
                        network: this.network,
                        userAddress: i.makerAddress
                    },
                    makerSalePrice: i.price,
                    productUri: i.imageURI,
                    productName: i.productName,
                    productMeta: i.metadataURI,
                    numberProduced: MAX_TOKENS,
                },
                forSale: true,
                id: BigNumber.from(0),
                minted: false,
                ownerAddress: i.makerAddress,
                salePrice: BigNumber.from(i.price)
            };
            return t
        })
    }

    async addMaker(companyName: string, logoIpfsUrl: string): Promise<Maker> {
        throw new Error("not implemented yet");
    }

    async getContractOwner(contractAddress: string): Promise<string> {
        throw new Error("not implemented yet");
    }

    async getMaker(): Promise<Maker> {
        throw new Error("not implemented yet");
    }

    async makerMint(contractAddress: string, tokenUri: string): Promise<BigNumber> {
        throw new Error("not implemented yet");
    }
}
