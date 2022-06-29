import axios from "axios";
import { BigNumber, ethers } from "ethers";
import {
    BackendAPI,
    CollectionData,
    CreateMakerResponse,
    MakerData,
    NFTData,
    SoldNFTData,
    tokenData
} from "./BackendIf";
import Web3Modal from "web3modal";
import MarketplaceContractArtifact from "../artifacts/contracts/StubNFTMarketplaceIf.sol/StubNFTMarketplaceIf.json";
import MakerContractArtifact from "../artifacts/contracts/StubMaker.sol/StubMaker.json";
import { StubMaker, StubNFTMarketplaceImpl } from "../typechain";

const COVALENT_CHAIN_ID = 80001

export default class BackendAPIImpl implements BackendAPI {
    private readonly mpContractAddress: string
    providerFn: () => Promise<ethers.providers.JsonRpcProvider> = async () => {
        const web3Modal = new Web3Modal()
        return new ethers.providers.Web3Provider(await web3Modal.connect())
    }

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

    /**
     * Probably better to use covalent for this
     * @param nftContractAddress
     */
    async getCollectionData(nftContractAddress: string): Promise<CollectionData[]> {
        const prov = await this.providerFn()
        const nftContract = new ethers.Contract(
          nftContractAddress, MakerContractArtifact.abi, prov) as StubMaker
        const currentMaxToken = await nftContract.tokenIds()
        let tokens: tokenData[] = []
        for (let i =1; i<=currentMaxToken.toNumber(); i++ ) {
            tokens.push(
              {
                  tokenId: ethers.BigNumber.from(i),
                  name: "",
                  sold: true,
                  forSale: false,
                  currentOwner: (await nftContract.ownerOf(i)).toString()
              }
            )
        }

        const allData = await this.getNFTsForSale()
        return allData
            .filter(i => {
                return i.address === nftContractAddress
            })
            .map(i => {
                    return {
                        productName: i.productName,
                        makerAddress: i.ownerAddress,
                        productUri: i.metadata,
                        price: i.price.toNumber(),
                        numberProduced: 0,
                        tokens: tokens.map(oldT => {
                            const newT = oldT
                            newT.name = `${i.productName} - id: ${oldT.tokenId.toString()}`
                            return newT
                        }),
                    }
                }
            )
    }

    async addCollectionContract(
        productName: string,
        makerAddress: string,
        productImgUri: string,
        productMetadataUri: string,
        price: Number,
        numberProduced: Number
    ): Promise<CreateMakerResponse> {
        if (productMetadataUri === "") {
            productMetadataUri = "test_product_uri"
        }
        if (productImgUri === "") {
            productImgUri = "test_image_uri"
        }

        const prov = await this.providerFn()
        const signer = await prov.getSigner(makerAddress)
        const cf = new ethers.ContractFactory(MakerContractArtifact.abi, MakerContractArtifact.bytecode, signer);
        const makerContract = await cf.deploy("name", "symbol", numberProduced)

        const mpContract = new ethers.Contract(this.mpContractAddress, MarketplaceContractArtifact.abi, signer) as StubNFTMarketplaceImpl
        const tx = await mpContract.createNftCollectionContract({
            productName: productName,
            price: BigNumber.from(price),
            makerAddress: makerAddress,
            metadataURI: productMetadataUri,
            imageURI: productImgUri,
            symbol: "SYM",
            nftContractAddress: makerContract.address
        })
        await tx.wait()
        return {contractAddress: makerContract.address}
    }

    /**
     * This function will call covalent's api, unlike most of the other functions
     * in this class. Ideally, this should be injected instead to support
     * testing or local development.
     * @param ownerAddress
     */
    async getUserNFTs(ownerAddress: string): Promise<NFTData[]> {
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
                        productName: i["contract_name"],
                        ownerAddress: ownerAddress,
                        address: i["contract_address"],
                        metadata: j["external_data"],
                        tokenId: ethers.BigNumber.from(j["token_id"]),
                        image: j["external_data"]["image"],
                        price: BigNumber.from(0)
                    }
                }
            )
        })
    }

    async buyNFT(nftContractAddress: string, tokenId: ethers.BigNumber): Promise<boolean> {
        const prov = await this.providerFn()
        const signer = await prov.getSigner()
        const contract = new ethers.Contract(this.mpContractAddress, MarketplaceContractArtifact.abi, signer) as StubNFTMarketplaceImpl
        const price = await contract.getPrice(nftContractAddress)
        try {
            const response = await contract.buyItem(nftContractAddress, {value:price, gasLimit:13000000})
            const receipt = await response.wait()
            if (receipt.events) {
                console.log("token id minted", parseInt(receipt.events[0]["topics"][3],16))
            }
            return true
        } catch (e) {
            console.log(e)
            throw new Error(`transaction error ${e}`)
        }
    }

    async changePrice(contractAddress: string, newPrice: Number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async getMakerData(makerAddress: string): Promise<MakerData> {
        const prov = await this.providerFn()
        const mpContract = new ethers.Contract(this.mpContractAddress, MarketplaceContractArtifact.abi, prov) as StubNFTMarketplaceImpl
        const response = await mpContract.getAllCollectionsForSale()
        return {
            addresses: response.filter(i => i.makerAddress === makerAddress).map(i => {
                return i.nftContractAddress
            }),
            name:"something",
            makerLogoUri: "https://gateway.pinata.cloud/ipfs/Qmbf22NGZUcgocx9K2pvM8zyPP1HreFKo72LYa1beRaui9",
        }
    }

    async getNFTsForSale(): Promise<NFTData[]> {
        const prov = await this.providerFn()
        const signer = await prov.getSigner()
        const mpContract = new ethers.Contract(this.mpContractAddress, MarketplaceContractArtifact.abi, signer) as StubNFTMarketplaceImpl
        const response = await mpContract.getAllCollectionsForSale()
        return response.map(i => {
            return {
                productName: i.productName,
                address: i.nftContractAddress,
                image: i.metadataURI,
                metadata: i.metadataURI,
                ownerAddress: i.makerAddress,
                tokenId: BigNumber.from(0),
                price: i.price,
            }
        })
    }

    async getSoldNFTData(makerAddress: string): Promise<SoldNFTData[]> {
        throw new Error('Method not implemented.');
    }
}
