import axios from 'axios'
import {BigNumber, ethers} from "ethers";
import {
    BackendData,
    CollectionData,
    CreateManufacturerResponse,
    ManufacturerData,
    NFTData,
    SoldNFTData
} from "./BackendIf";

const CHAIN_ID = 80001

export default class BackendImpl implements BackendData {
    getCollectionData(manuContractAddress: string[]): Promise<CollectionData[]> {
        throw new Error('Method not implemented.');
    }
    addManuContract(productName: string, makerAddress: string, productUri: string, price: Number, numberProduced: Number): Promise<CreateManufacturerResponse> {
        throw new Error('Method not implemented.');
    }

    async getUserNFTs(ownerAddress: string): Promise<NFTData[]> {
        let url = `https://api.covalenthq.com/v1/${CHAIN_ID}/address/${ownerAddress}/balances_v2/?format=JSON&nft=true&key=${process.env.REACT_APP_COVALENT_API_KEY}`
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
        throw new Error('Method not implemented.');
    }

    async buyNFT(address: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async changePrice(contractAddress: string, newPrice: Number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

    async getManufacturerData(manufacturerAddress: string): Promise<ManufacturerData> {
        throw new Error('Method not implemented.');
    }

    async getNFTsForSale(marketPlaceContractAddress: string): Promise<NFTData[]> {
        throw new Error('Method not implemented.');
    }

    async getSoldNFTData(manufacturerAddress: string): Promise<SoldNFTData[]> {
        return Promise.resolve([]);
    }
}
