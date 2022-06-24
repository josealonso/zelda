import {ethers} from 'ethers'

export type NFTData = {
    address: string
    metadata: string
    tokenId: ethers.BigNumber
    ownerAddress: string
    image: string
    price: ethers.BigNumber
    auction?: Auction
}

// Created by Joey 6/23/22 for displaying token info in manufacturer>main>items component
export type tokenData = {
    name: string
    sold: boolean
    forSale: boolean
    currentOwner: string
}

export type Auction = {
    auctionEnds: number
}

export type SoldNFTData = {
    contractAddress: string
    metadata: string
    tokenID: ethers.BigNumber
    manufacturerAddress: string
    salePrice: ethers.BigNumber
    saleDate: string
    currentOwnerAddress: string
}

export type ManufacturerData = {
    addresses: string[]
    name: string
}

export type CreateManufacturerResponse = {
    contractAddress: string
}
export type CollectionData = {
    productName: string
    makerAddress: string 
    productUri:string 
    price: number
    numberProduced: number
    tokens: tokenData[] // This will need to be an array of objects? Metadat of each token needs to come from somewhere. Should we have a `tokenObj` type?
}

export interface BackendData {
    getUserNFTs(ownerAddress: string): Promise<NFTData[]>

    getNFTsForSale(marketPlaceContractAddress: string): Promise<NFTData[]>

    getCollectionData(manuContractAddress: string): Promise<CollectionData[]>

    getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData>

    /**
     * Returns all sold NFTs
     * @param manufacturerAddress
     */
    getSoldNFTData(manufacturerAddress: string): Promise<SoldNFTData[]>

    buyNFT(address:string): Promise<boolean>


    addCollectionContract(
        productName: string, //Product Line
        makerAddress: string, // Manufacturer address
        productImgUri:string, // Product Image
        productMetadataUri: string,
        price: Number,  // Price
        numberProduced: Number, // Max TokenId
    ): Promise<CreateManufacturerResponse>

    changePrice(contractAddress: string, newPrice: Number): Promise<boolean>
}


