import { BackendAPI, Maker, NFTContract, Token, User } from "./BackendIf";
import { BigNumber, ethers } from "ethers";
import { TestContract, TestTokenWithID, TestUser, TestMakerUser } from "../models/TestModels";

export default class StubBackendData implements BackendAPI {
  async addMaker(companyName: string, logoIpfsUrl: string): Promise<Maker> {
    return TestMakerUser;
  }

  async getMaker(makerAdminAddress: string): Promise<Maker> {
    return TestMakerUser;
  }

  async getCollectionData(manuContractAddress: string): Promise<NFTContract> {
    const tokens = [
      TestTokenWithID(10, true),
      TestTokenWithID(11, true),
      TestTokenWithID(12, true),
    ]
    let contract = TestContract
    contract.tokensMinted = tokens
    return contract;
  }

  async getMakerData(makerAddress: string): Promise<NFTContract[]> {
    return [TestContract];
  }

  async addCollectionContract(
    productName: string,
    makerAddress: string,
    productImgUri: string,
    productMetadataUri: string,
    price: ethers.BigNumber,
    numberProduced: number
  ): Promise<NFTContract> {
    return TestContract;
  }

  async changePrice(contractAddress: string, newPrice: Number): Promise<boolean> {
    return true;
  }

  async getUserNFTs(ownerAddress: string): Promise<Token[]> {
    return [{
      id: ethers.BigNumber.from(10),
      ownerAddress: ownerAddress,
      contract: TestContract,
      forSale: false,
      salePrice: ethers.BigNumber.from(0),
      minted: true
    }];
  }

  async getNFTsForSale(): Promise<Token[]> {
    return [{
      id: ethers.BigNumber.from(10),
      ownerAddress: TestUser.userAddress,
      contract: TestContract,
      forSale: true,
      salePrice: ethers.BigNumber.from(1),
      minted: true
    }, {
      id: ethers.BigNumber.from(13),
      ownerAddress: TestUser.userAddress,
      contract: TestContract,
      forSale: true,
      salePrice: ethers.BigNumber.from(2),
      minted: true
    }];
  }

  async buyNFT(address: string, tokenId: ethers.BigNumber): Promise<BigNumber> {
    alert("bought!");
    return BigNumber.from(22);
  }
}
