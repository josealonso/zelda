import { BigNumber, ethers } from "ethers";
import StubBackendData from "./stubBackendData";
import BackendAPIImpl from "./BackendImpl";

export type Token = {
    id: BigNumber
    ownerAddress: string
    contract: NFTContract
    forSale: boolean
    salePrice: BigNumber
    minted: boolean
}

export type NFTContract = {
    contractAddress: string
    maker: Maker
    makerSalePrice: BigNumber
    productUri: string
    productName: string
    productMeta: string
    numberProduced: number
    tokensMinted?: Token[]
}

export type User = {
    network: string
    userAddress: string
}

export type Maker = {
  network: string;
  makerAddress: string;
  companyName: string;
  companyLogoUri: string;
};

export interface BackendAPI {
    getUserNFTs(ownerAddress: string): Promise<Token[]>

    getNFTsForSale(): Promise<Token[]>

    getCollectionData(nftContractAddress: string): Promise<NFTContract>

    // contracts address - get a list
    // name - get name from first contract
    // logo - get logo from first contract
    getMakerData(manufacturerAddress: string): Promise<NFTContract[]>

    buyNFT(address: string, tokenId: BigNumber): Promise<BigNumber>

    addMaker(companyName: string, logoIpfsUrl: string): Promise<Maker>

    getMaker(makerAdminAddress: string): Promise<Maker | boolean>

    addCollectionContract(
        productName: string, //Product Line
        makerAddress: string, // Manufacturer address
        productImgUri:string, // Product Image
        productMetadata: string,
        makerSalePrice: BigNumber,  // Price
        numberProduced: number, // Max TokenId
    ): Promise<NFTContract>

    changePrice(contractAddress: string, newPrice: Number): Promise<boolean>
}

export function GetInstance(): BackendAPI {
    if (process.env.REACT_APP_DATA_SOURCE && process.env.REACT_APP_DATA_SOURCE === "static") {
        console.log("Using static data source")
        return new StubBackendData()
    }
    if (process.env.REACT_APP_DATA_SOURCE && process.env.REACT_APP_DATA_SOURCE === "mumbai") {
        if (process.env.REACT_APP_MUMBAI_MARKETPLACE_CONTRACT_ADDRESS) {
            return new BackendAPIImpl(process.env.REACT_APP_MUMBAI_MARKETPLACE_CONTRACT_ADDRESS)
        }
        throw new Error("cannot get mumbai market place contract address")
    }
    if (process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS) {
        return new BackendAPIImpl(process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS)
    }
    throw new Error("cannot find REACT_APP_MARKETPLACE_CONTRACT_ADDRESS in env file")
}
