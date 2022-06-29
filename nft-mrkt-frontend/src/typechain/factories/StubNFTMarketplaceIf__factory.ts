/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  StubNFTMarketplaceIf,
  StubNFTMarketplaceIfInterface,
} from "../StubNFTMarketplaceIf";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "collectionAddress",
        type: "address",
      },
    ],
    name: "buyItem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "makerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Models.NftCollection",
        name: "_newNftCollection",
        type: "tuple",
      },
    ],
    name: "createNftCollectionContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCollectionsForSale",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "makerAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "nftContractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct Models.NftCollection[]",
        name: "collections",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collectionAddress",
        type: "address",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class StubNFTMarketplaceIf__factory {
  static readonly abi = _abi;
  static createInterface(): StubNFTMarketplaceIfInterface {
    return new utils.Interface(_abi) as StubNFTMarketplaceIfInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StubNFTMarketplaceIf {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StubNFTMarketplaceIf;
  }
}
