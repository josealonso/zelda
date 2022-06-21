import {BackendData, CreateManufacturerResponse, ManufacturerData, NFTData, SoldNFTData} from "./BackendIf";
import {BigNumber, ethers} from "ethers";

export default class StubBackendData implements BackendData {

    async getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData> {
        return {
            address: "testAddress",
            image: "https://picsum.photos/200/300",
            logoUri: "https://picsum.photos/200/300",
            name: "test name",
            numberProduced: 100,
            price: 1,
            productLine: "line 1",
            productName: "name 1"
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
    async addManufacturer(
        name: string,
        logoUri: string,
        address: string,
        productLine: string,
        productName: string,
        price: Number,
        numberProduced: Number,
        image: string
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
