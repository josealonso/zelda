import {ethers} from 'ethers'

export type NFTData = {
    address: string
    metadata: string
    tokenId: ethers.BigNumber
    ownerAddress: string
    image: string
    price: ethers.BigNumber
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
    name:string
    logoUri:string
    address: string
    productLine:string
    productName:string
    price: Number
    numberProduced: Number
    image: string
}

export type CreateManufacturerResponse = {
    contractAddress: string
}

export interface BackendData {
    getUserNFTs(ownerAddress: string): Promise<NFTData[]>

    getNFTsForSale(marketPlaceContractAddress: string): Promise<NFTData[]>

    getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData>

    /**
     * Returns all sold NFTs
     * @param manufacturerAddress
     */
    getSoldNFTData(manufacturerAddress: string): Promise<SoldNFTData[]>

    buyNFT(address:string): Promise<boolean>

    addManufacturer(
        name:string,
        logoUri:string,
        address: string,
        productLine:string,
        productName:string,
        price: Number,
        numberProduced: Number,
        image: string
    ): Promise<CreateManufacturerResponse>

    changePrice(contractAddress: string, newPrice: Number): Promise<boolean>
}


