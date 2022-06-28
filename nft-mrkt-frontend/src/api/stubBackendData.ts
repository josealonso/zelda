import {BackendAPI, CollectionData, CreateMakerResponse, MakerData, NFTData, SoldNFTData} from "./BackendIf";
import {BigNumber, ethers} from "ethers";

export default class StubBackendData implements BackendAPI {

    // I changed this from an array param to a single string. We will need to query
    // with contract address and then return the info below. I couldn't get it to return correctly // not as an array tho.
    // Thats fine, I'll just access the 0 index for now
    async getCollectionData(makerContractAddress: string): Promise<CollectionData[]> {
        return [
            {   
                // NETWORK: POLYGON
                productName: "Golden Tickets",
                makerAddress: "0x123...456",
                productUri: "https://gateway.pinata.cloud/ipfs/QmSEDNjgtMagXZNciEbQt4HNqekEeg1DdV7jLXuyCvo64G", // Weird pic of my dog
                price: 12,
                numberProduced: 5,
                tokens: [ // We're missing tokenID. I added it 6/27/22.
                    {  
                        tokenId: ethers.BigNumber.from(1),
                        name: "Ticket 1",
                        sold: true,
                        forSale: false,
                        currentOwner: "0x987...654"
                    },
                    {   
                        tokenId: ethers.BigNumber.from(2),
                        name: "Ticket 2",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xABC...DEF"
                    },
                    {   
                        tokenId: ethers.BigNumber.from(3),
                        name: "Ticket 3",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xBCD...EFG"
                    },
                    {   
                        tokenId: ethers.BigNumber.from(4),
                        name: "Ticket 4",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xAAA...AAA"
                    },
                    {   
                        tokenId: ethers.BigNumber.from(5),
                        name: "Ticket 5",
                        sold: true,
                        forSale: false,
                        currentOwner: "0xBBB...BBB"
                    }
                ], // Added
            },
        ];
    }

    // Added field for maker logo 6/27/22
    async getMakerData(makerAddress: string): Promise<MakerData> {
        return {
            addresses: ["0x123...345", "0x234...567"],
            name: "Wonka Industries",
            makerLogoUri: "https://gateway.pinata.cloud/ipfs/Qmbf22NGZUcgocx9K2pvM8zyPP1HreFKo72LYa1beRaui9" // Weirder pic of my dog
            // Added Name so that I can populate the storefront page
        }
    }
    async getSoldNFTData(makerAddress: string): Promise<SoldNFTData[]> {
        return [{
            contractAddress: "string",
            metadata: "string",
            tokenID: ethers.BigNumber.from(1),
            makerAddress: "testAddress",
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
    ): Promise<CreateMakerResponse> {
        return {
            contractAddress: "test_address"
        }
    }
    async changePrice(contractAddress: string, newPrice: Number): Promise<boolean> {
        return true
    }
    async getUserNFTs(ownerAddress: string): Promise<NFTData[]> {
        return [{
            productName: "product_name",
            ownerAddress: ownerAddress,
            address: "contractAddress",
            metadata: "test",
            tokenId: ethers.BigNumber.from(1),
            image: "https://picsum.photos/200/300",
            price: BigNumber.from(0)
        }]
    }

    async getNFTsForSale(): Promise<NFTData[]> {
        return [{
            productName: "product_name",
            ownerAddress: "test_mp_address",
            address: "contractAddress1",
            metadata: "test1",
            tokenId: ethers.BigNumber.from(1),
            image: "https://picsum.photos/200/300",
            price: BigNumber.from(1)
        }, {
            productName: "product_name",
            ownerAddress: "test_mp_address",
            address: "contractAddress2",
            metadata: "test2",
            tokenId: ethers.BigNumber.from(2),
            image: "https://picsum.photos/200/300",
            price: BigNumber.from(2)
        }]
    }

    // 6/27/22 - we need to figure out what is being passed here. I believe it needs to be `tokenId` adn`address.
    // getNFTsForSale() returns an ethers.BigNumber for tokenID, so I changed its type to that.
    async buyNFT(address: string, tokenId: ethers.BigNumber): Promise<boolean> {
        alert("bought!")
        return true
    }
}
