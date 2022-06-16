import create from "zustand";

import { Manufacturer } from "../models/Manufacturer";

interface ManuState {
  manufacturer: Manufacturer
//   setName: (name: string) => void
//   setHasContract: (hasContract: boolean) => void
//   setNftCount: (nftCount: number) => void
//   setNftName: (nftName: string) => void
//   setNftSymbol: (nftSymbol: symbol) => void
    setState: (name: string, nftCount: number, nftName: string, nftSymbol: string) => void
}

export const useStore = create<ManuState>((set) => ({
  // initial state
  manufacturer: {
    name: "", 
    hasContract: false, 
    nftCount: 0, 
    nftName: "", 
    nftSymbol: ""
},
  // methods for manipulating state
  setState: (name: string, nftCount: number, n) => {
    set((state) => ({
      manufacturer: {
        name: "testName",
        hasContract: true,
        nftCount: 1,
        nftName: "testNFT",
        nftSymbol: "tst"
      }
    }));
  }
}));