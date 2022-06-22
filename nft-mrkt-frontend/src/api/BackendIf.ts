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
}

export type CreateManufacturerResponse = {
    contractAddress: string
}
export type CollectionData = {
    productName: string
    maker: string 
    productUri:string 
    price: Number
    numberProduced: Number
}

export interface BackendData {
    getUserNFTs(ownerAddress: string): Promise<NFTData[]>

    getNFTsForSale(marketPlaceContractAddress: string): Promise<NFTData[]>

    getCollectionData(manuContractAddress: string[]): Promise<CollectionData[]>

    getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData>

    /**
     * Returns all sold NFTs
     * @param manufacturerAddress
     */
    getSoldNFTData(manufacturerAddress: string): Promise<SoldNFTData[]>

    buyNFT(address:string): Promise<boolean>


    addManuContract(
        productName: string, //Product Line
        makerAddress: string, // Manufacturer address
        productUri:string, // Product Image
        price: Number,  // Price
        numberProduced: Number, // Max TokenId
    ): Promise<CreateManufacturerResponse>

    changePrice(contractAddress: string, newPrice: Number): Promise<boolean>
}


