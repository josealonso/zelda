import axios from 'axios'
import {BigNumber, ethers} from "ethers";
import {
    BackendAPI,
    CollectionData,
    CreateManufacturerResponse,
    ManufacturerData,
    NFTData,
    SoldNFTData
} from "./BackendIf";
import Web3Modal from "web3modal";
import MarketplaceContractArtifact from '../artifacts/contracts/StubNFTMarketplaceIf.sol/StubNFTMarketplaceIf.json'
import MakerContractArtifact from '../artifacts/contracts/StubMaker.sol/StubMaker.json'
import {StubNFTMarketplaceImpl} from '../typechain'

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

    async getCollectionData(manuContractAddress: string): Promise<CollectionData[]> {
        const allData = await this.getNFTsForSale()
        return allData
            .filter(i => {
                return i.ownerAddress === manuContractAddress
            })
            .map(i => {
                    return {
                        productName: i.productName,
                        makerAddress: manuContractAddress,
                        productUri: i.metadata,
                        price: i.price.toNumber(),
                        numberProduced: 0,
                        tokens: [],
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
    ): Promise<CreateManufacturerResponse> {
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
        await mpContract.createNftCollectionContract({
            productName: productName,
            price: BigNumber.from(price),
            makerAddress: makerAddress,
            metadataURI: productMetadataUri,
            imageURI: productImgUri,
            symbol: "SYM",
            nftContractAddress: makerContract.address
        })
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
        try {
            const response = await contract.buyItem(nftContractAddress, {value:1000, gasLimit:23000000})
            const receipt = await response.wait()
            if (receipt.events) {
                console.log("token id minted", parseInt(receipt.events[0]["topics"][3],16))
            }
            return true
        } catch (e) {
            console.log(e)
            throw new Error(`transaction error ${e}`)
        }
        throw new Error("fail")
    }

    async changePrice(contractAddress: string, newPrice: Number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData> {
        const prov = await this.providerFn()
        const mpContract = new ethers.Contract(this.mpContractAddress, MarketplaceContractArtifact.abi, prov) as StubNFTMarketplaceImpl
        const response = await mpContract.getAllCollectionsForSale()
        return {
            addresses: response.filter(i => i.makerAddress === manufacturerAddress).map(i => {
                return i.nftContractAddress
            }),
            name:"something",
            manufacturerLogoUri: "https://gateway.pinata.cloud/ipfs/Qmbf22NGZUcgocx9K2pvM8zyPP1HreFKo72LYa1beRaui9",
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
                price: i.price
            }
        })
    }

    async getSoldNFTData(manufacturerAddress: string): Promise<SoldNFTData[]> {
        throw new Error('Method not implemented.');
    }
}
