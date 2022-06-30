import create from "zustand";
import { FinalToken } from "../api/BackendIf";
import { ethers } from "ethers";

interface ItemState {
  item: FinalToken
  setItem: (input: FinalToken) => void
}

export const itemStore = create<ItemState>((set) => ({
  item: {
    id: ethers.BigNumber.from(0),
    ownerAddress: "",
    contract: {
      contractAddress: "",
      maker: {
        companyName: "",
        companyLogoUri: "",
        network: "",
        userAddress: ""
      },
      makerSalePrice: ethers.BigNumber.from(0),
      productUri: "",
      productName: "",
      productMeta: "",
      numberProduced: 0
    },
    forSale: false,
    salePrice: ethers.BigNumber.from(0),
    minted: false
  },
  setItem: (_input: FinalToken) => {
    set(() => ({ item: _input }));
  }
}));
