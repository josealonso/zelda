import { ERC721TokenData, FinalMakerUser, FinalNFTContract, FinalToken, FinalUser } from "../api/BackendIf";
import { BigNumber } from "ethers";
import { ERC721 } from "../typechain";

export const TestUser: FinalUser = {
  network: "test_network",
  userAddress: "test_user_address"
};
export const TestMakerUser: FinalMakerUser = {
  companyLogoUri: "test_logo_uri",
  companyName: "test_company_name",
  network: "test_network",
  userAddress: "test_user_address"
};
export const TestContract: FinalNFTContract = {
  contractAddress: "test_contract_address",
  maker: TestMakerUser,
  makerSalePrice: BigNumber.from(10),
  numberProduced: 2,
  productMeta: "test_product_meta",
  productName: "test_product_name",
  productUri: "test_product_uri"

};
export const TestToken: FinalToken = {
  contract: TestContract,
  forSale: false,
  id: BigNumber.from(99),
  minted: false,
  ownerAddress: "test_owner_address",
  salePrice: BigNumber.from(100)
};
export const TestERC721Token: ERC721TokenData = {
  contractAddress: TestContract.contractAddress,
  description: "test_desc",
  image: "https://picsum.photos/200",
  name: TestContract.productName,
  id: BigNumber.from(100),
  ownerAddress: "test_owner_address"
};
export function TestTokenWithID(id: number, minted = false ): FinalToken {
  return {
    contract: TestContract,
    forSale: false,
    id: BigNumber.from(id),
    minted: minted,
    ownerAddress: "test_owner_address",
    salePrice: BigNumber.from(100)
  }
}
