import {BackendData, CollectionData, CreateManufacturerResponse, ManufacturerData, NFTData, SoldNFTData} from "./BackendIf";
import {BigNumber, ethers} from "ethers";

export default class StubBackendData implements BackendData {
    async getCollectionData(manuContractAddress: string[]): Promise<CollectionData[]> {
        return [];
    }

    async getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData> {
        return {
            addresses: []
        }
    }
    async getSoldNFTData(manufacturerAddress: string): Promise<SoldNFTData[]> {
        return [{
            contractAddress: "string",
            metadata: "string",
            tokenID: ethers.BigNumber.from(1),
            manufacturerAddress: "testAddress",
            salePrice: ethers.BigNumber.from(1),
            saleDate: "2022-01-01",
            currentOwnerAddress: "test_address"
        }]
    }
    async addManuContract(
        productName: string,
        makerAddress: string,
        productUri:string, 
        price: Number,
        numberProduced: Number,
    ): Promise<CreateManufacturerResponse> {
        return {
            contractAddress: "test_address"
        }
    }
    async changePrice(contractAddress: string, newPrice: Number): Promise<boolean> {
        return true
    }
    async getUserNFTs(ownerAddress: string): Promise<NFTData[]> {
        return [{
            ownerAddress: ownerAddress,
            address: "contractAddress",
            metadata: "test",
            tokenId: ethers.BigNumber.from(1),
            image: "https://picsum.photos/200/300",
            price: BigNumber.from(0)
        }]
    }

    async getNFTsForSale(marketPlaceContractAddress: string): Promise<NFTData[]> {
        return [{
            ownerAddress: marketPlaceContractAddress,
            address: "contractAddress1",
            metadata: "test1",
            tokenId: ethers.BigNumber.from(1),
            image: "https://picsum.photos/200/300",
            price: BigNumber.from(1)
        }, {
            ownerAddress: marketPlaceContractAddress,
            address: "contractAddress2",
            metadata: "test2",
            tokenId: ethers.BigNumber.from(2),
            image: "https://picsum.photos/200/300",
            price: BigNumber.from(2)
        }]
    }

    async buyNFT(address:string): Promise<boolean> {
        alert("bought!")
        return true
    }
}
