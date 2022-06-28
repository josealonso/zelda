import create from "zustand";

import { Item } from "../models/Item";

interface ItemState {
    item: Item
    setItem: (
        contractAddress: string, 
        tokenId: string, 
        forSale: boolean, 
        price: number, 
        name: string, 
        productUri: string | undefined
    ) => void
}

export const itemStore = create<ItemState>((set) => ({
    
    item: {
        contractAddress: "",
        tokenId: "",
        forSale: false,
        price: 0,
        name: "",
        productUri: ""
    },
    
    setItem: (
            _contractAddress: string, 
            _tokenId: string, 
            _forSale: boolean, 
            _price: number, 
            _name: string, 
            _productUri: string | undefined
        ) => {
        set(() => ({
            item: {
                contractAddress: _contractAddress,
                tokenId: _tokenId, 
                forSale: _forSale, 
                price: _price, 
                name: _name, 
                productUri: _productUri
            }
        }))
    }
}))