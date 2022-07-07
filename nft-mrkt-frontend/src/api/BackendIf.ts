import { BigNumber } from "ethers";
import StubBackendData from "./stubBackendData";
import BackendAPIImpl from "./BackendImpl";
import configJson from "../config.json"

export type FinalToken = {
    id: BigNumber
    ownerAddress: string
    contract: FinalNFTContract
    forSale: boolean
    salePrice: BigNumber
    minted: boolean
}

/**
 * ERC721TokenData is the on chain data retrieved. This token data differs from
 * the other representation as it should relate only to what is mentioned in the
 * ERC721 standards or Opensea's https://docs.opensea.io/docs/metadata-standards
 *
 * This is not fully implemented but should be a strict subset of what data
 * is available on-chain.
 */
export type ERC721TokenData = {
    contractAddress: string,
    name: string,
    id: BigNumber,
    ownerAddress: string,
    description?: string,
    image?: string,
}

export type FinalNFTContract = {
    contractAddress: string
    maker: FinalMakerUser
    makerSalePrice: BigNumber
    productUri: string
    productName: string
    productMeta: string
    numberProduced: number
    tokensMinted?: FinalToken[]
}

export type FinalUser = {
    network: string
    userAddress: string
}

export type FinalMakerUser = FinalUser & {
    companyName: string
    companyLogoUri: string
}

export interface BackendAPI {
    getUserNFTs(ownerAddress: string): Promise<FinalToken[]>

    getNFTsForSale(): Promise<FinalToken[]>

    getCollectionData(nftContractAddress: string): Promise<FinalNFTContract>

    // contracts address - get a list
    // name - get name from first contract
    // logo - get logo from first contract
    getMakerData(manufacturerAddress: string): Promise<FinalNFTContract[]>

    buyNFT(address: string, tokenId: BigNumber): Promise<BigNumber>

    addCollectionContract(
        productName: string, //Product Line
        makerAddress: string, // Manufacturer address
        productImgUri:string, // Product Image
        productMetadata: string,
        makerSalePrice: BigNumber,  // Price
        numberProduced: number, // Max TokenId
    ): Promise<FinalNFTContract>

    changePrice(contractAddress: string, newPrice: Number): Promise<boolean>

    getTokenDetail(contractAddress: string, tokenID: number): Promise<ERC721TokenData>
}

export function GetInstance(): BackendAPI {
    if (process.env.REACT_APP_DATA_SOURCE && process.env.REACT_APP_DATA_SOURCE === "static") {
        console.log("Using static data source")
        return new StubBackendData()
    }
    if (process.env.REACT_APP_DATA_SOURCE && process.env.REACT_APP_DATA_SOURCE === "mumbai") {
        if (configJson.mumbai_marketplace_address) {
            return new BackendAPIImpl(configJson.mumbai_marketplace_address)
        }
        throw new Error("cannot get mumbai market place contract address")
    }
    if (process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS) {
        return new BackendAPIImpl(process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS)
    }
    throw new Error("cannot find REACT_APP_MARKETPLACE_CONTRACT_ADDRESS in env file")
}
