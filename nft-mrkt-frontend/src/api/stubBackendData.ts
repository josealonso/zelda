import {BackendData, CollectionData, CreateManufacturerResponse, ManufacturerData, NFTData, SoldNFTData} from "./BackendIf";
import {BigNumber, ethers} from "ethers";

export default class StubBackendData implements BackendData {

    // I changed this from an array param to a single string. We will need to query 
    // with contract address and then return the info below. I couldn't get it to return correctly not as an array tho.
    // Thats fine tho, I'll just access the 0 index for now
    async getCollectionData(manuContractAddress: string): Promise<CollectionData[]> {
        return [
            {
                productName: "Golden Tickets",
                makerAddress: "0x123...456",
                productUri: "photo",
                price: 12,
                numberProduced: 5,
                tokens: [
                    {
                        name: "Ticket 1",
                        sold: true,
                        forSale: false,
                        currentOwner: "0x987...654"
                    },
                    {
                        name: "Ticket 2",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xABC...DEF"
                    },
                    {
                        name: "Ticket 3",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xBCD...EFG"
                    },
                    {
                        name: "Ticket 4",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xAAA...AAA"
                    },
                    {
                        name: "Ticket 5",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xBBB...BBB"
                    }
                ], // Added
            },
        ];
    }

    async getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData> {
        return {
            addresses: ["0x123...345", "0x234...567"],
            name: "Wonka Industries"
            // Added Name so that I can populate the storefront page
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
    async addCollectionContract(
        productName: string,
        makerAddress: string,
        productImgUri: string,
        productMetadataUri: string,
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
