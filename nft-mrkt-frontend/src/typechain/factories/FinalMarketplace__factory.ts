/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FinalMarketplace,
  FinalMarketplaceInterface,
} from "../FinalMarketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collectionItems",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feePercent",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftCollection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "MarketItemAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftCollection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "MarketItemPurchase",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collectionItems",
        type: "uint256",
      },
    ],
    name: "addCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "addMarketItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "buyMarketItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "collectionItems",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "collectionItemsArray",
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
  {
    inputs: [],
    name: "feeAccount",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feePercent",
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
  {
    inputs: [],
    name: "getItemsForSale",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "contract IERC721",
            name: "nftCollection",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct FinalMarketplace.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getItemsOwnedByUser",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "contract IERC721",
            name: "nftCollection",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct FinalMarketplace.MarketItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "getTotalPrice",
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
  {
    inputs: [],
    name: "itemCount",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        internalType: "contract IERC721",
        name: "nftCollection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001b4e38038062001b4e8339818101604052810190620000379190620000e3565b60016000819055503373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060a081815250508160018190555062000098600154620000a060201b60201c565b505062000148565b600281908060018154018082558091505060019003906000526020600020016000909190919091505550565b600081519050620000dd816200012e565b92915050565b60008060408385031215620000f757600080fd5b60006200010785828601620000cc565b92505060206200011a85828601620000cc565b9150509250929050565b6000819050919050565b620001398162000124565b81146200014557600080fd5b50565b60805160601c60a0516119cf6200017f600039600081816109de01526110bc0152600081816107ad01526109b401526119cf6000f3fe6080604052600436106100a75760003560e01c80638e1de4b2116100645780638e1de4b21461019d578063a23f2bab146101c8578063a741bc6514610205578063b77f62c414610230578063bfb231d214610259578063ca7dd3751461029b576100a7565b8063064ddd04146100ac57806330817659146100d7578063351901c31461010057806365e17c9d1461011c5780636bfb0d01146101475780637fd6f15c14610172575b600080fd5b3480156100b857600080fd5b506100c16102d8565b6040516100ce91906114e9565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f99190611247565b6105b9565b005b61011a60048036038101906101159190611247565b6105e5565b005b34801561012857600080fd5b506101316109b2565b60405161013e9190611497565b60405180910390f35b34801561015357600080fd5b5061015c6109d6565b60405161016991906115ab565b60405180910390f35b34801561017e57600080fd5b506101876109dc565b60405161019491906115ab565b60405180910390f35b3480156101a957600080fd5b506101b2610a00565b6040516101bf91906114e9565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea9190611247565b610d31565b6040516101fc91906115ab565b60405180910390f35b34801561021157600080fd5b5061021a610d55565b60405161022791906115ab565b60405180910390f35b34801561023c57600080fd5b50610257600480360381019061025291906111f8565b610d5b565b005b34801561026557600080fd5b50610280600480360381019061027b9190611247565b61102d565b604051610292969594939291906115c6565b60405180910390f35b3480156102a757600080fd5b506102c260048036038101906102bd9190611247565b6110b6565b6040516102cf91906115ab565b60405180910390f35b606060005b600154811015610476576006600082815260200190815260200160002060040160149054906101000a900460ff16610469576003600660008381526020019081526020016000209080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028201548160020155600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004820160149054906101000a900460ff168160040160146101000a81548160ff02191690831515021790555050505b80806001019150506102dd565b506003805480602002602001604051908101604052809291908181526020016000905b828210156105b057838290600052602060002090600502016040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff16151515158152505081526020019060010190610499565b50505050905090565b600281908060018154018082558091505060019003906000526020600020016000909190919091505550565b6002600054141561062b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106229061158b565b60405180910390fd5b6002600081905550600061063e826110b6565b9050600060066000848152602001908152602001600020905060008311801561066957506005548311155b6106a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069f9061154b565b60405180910390fd5b8134146106ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e19061156b565b60405180910390fd5b8060040160149054906101000a900460ff161561073c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107339061150b565b60405180910390fd5b8060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600301549081150290604051600060405180830381858888f193505050501580156107aa573d6000803e3d6000fd5b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc8260030154846107f59190611733565b9081150290604051600060405180830381858888f19350505050158015610820573d6000803e3d6000fd5b5060018160040160146101000a81548160ff0219169083151502179055508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd303384600201546040518463ffffffff1660e01b81526004016108a3939291906114b2565b600060405180830381600087803b1580156108bd57600080fd5b505af11580156108d1573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff168160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f30e831f2896cfdd24fb857606a44415b35b884c197eda621db44cdffef181e32868560020154866003015460405161099d93929190611627565b60405180910390a45050600160008190555050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60055481565b7f000000000000000000000000000000000000000000000000000000000000000081565b606060046000610a109190611119565b60005b600154811015610bee573373ffffffffffffffffffffffffffffffffffffffff166006600083815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610be1576004600660008381526020019081526020016000209080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015481600001556001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028201548160020155600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506004820160149054906101000a900460ff168160040160146101000a81548160ff02191690831515021790555050505b8080600101915050610a13565b506004805480602002602001604051908101604052809291908181526020016000905b82821015610d2857838290600052602060002090600502016040518060c0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016004820160149054906101000a900460ff16151515158152505081526020019060010190610c11565b50505050905090565b60028181548110610d4157600080fd5b906000526020600020016000915090505481565b60015481565b60026000541415610da1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d989061158b565b60405180910390fd5b600260008190555060008111610dec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de39061152b565b60405180910390fd5b60056000815480929190610dff906117f7565b91905055508273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610e41939291906114b2565b600060405180830381600087803b158015610e5b57600080fd5b505af1158015610e6f573d6000803e3d6000fd5b505050506040518060c0016040528060055481526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff168152602001600015158152506006600060055481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160040160146101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fb54cfb19ffaa1fa935ff42ab669df81eab47ebe90fb3bcb92ace1d123dd176bb600554858560405161101893929190611627565b60405180910390a36001600081905550505050565b60066020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905086565b600060647f00000000000000000000000000000000000000000000000000000000000000006110e591906116a8565b60646110f19190611733565b600660008481526020019081526020016000206003015461111291906116d9565b9050919050565b508054600082556005029060005260206000209081019061113a919061113d565b50565b5b808211156111ca576000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905560038201600090556004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556004820160146101000a81549060ff02191690555060050161113e565b5090565b6000813590506111dd8161196b565b92915050565b6000813590506111f281611982565b92915050565b60008060006060848603121561120d57600080fd5b600061121b868287016111ce565b935050602061122c868287016111e3565b925050604061123d868287016111e3565b9150509250925092565b60006020828403121561125957600080fd5b6000611267848285016111e3565b91505092915050565b600061127c83836113fe565b60c08301905092915050565b61129181611779565b82525050565b6112a081611779565b82525050565b6112af81611767565b82525050565b60006112c08261166e565b6112ca8185611686565b93506112d58361165e565b8060005b838110156113065781516112ed8882611270565b97506112f883611679565b9250506001810190506112d9565b5085935050505092915050565b61131c8161178b565b82525050565b61132b8161178b565b82525050565b61133a816117d3565b82525050565b611349816117d3565b82525050565b600061135c601183611697565b91506113678261189e565b602082019050919050565b600061137f601f83611697565b915061138a826118c7565b602082019050919050565b60006113a2601283611697565b91506113ad826118f0565b602082019050919050565b60006113c5601083611697565b91506113d082611919565b602082019050919050565b60006113e8601f83611697565b91506113f382611942565b602082019050919050565b60c0820160008201516114146000850182611479565b5060208201516114276020850182611331565b50604082015161143a6040850182611479565b50606082015161144d6060850182611479565b5060808201516114606080850182611288565b5060a082015161147360a0850182611313565b50505050565b611482816117c9565b82525050565b611491816117c9565b82525050565b60006020820190506114ac6000830184611297565b92915050565b60006060820190506114c760008301866112a6565b6114d460208301856112a6565b6114e16040830184611488565b949350505050565b6000602082019050818103600083015261150381846112b5565b905092915050565b600060208201905081810360008301526115248161134f565b9050919050565b6000602082019050818103600083015261154481611372565b9050919050565b6000602082019050818103600083015261156481611395565b9050919050565b60006020820190508181036000830152611584816113b8565b9050919050565b600060208201905081810360008301526115a4816113db565b9050919050565b60006020820190506115c06000830184611488565b92915050565b600060c0820190506115db6000830189611488565b6115e86020830188611340565b6115f56040830187611488565b6116026060830186611488565b61160f6080830185611297565b61161c60a0830184611322565b979650505050505050565b600060608201905061163c6000830186611488565b6116496020830185611488565b6116566040830184611488565b949350505050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006116b3826117c9565b91506116be836117c9565b9250826116ce576116cd61186f565b5b828204905092915050565b60006116e4826117c9565b91506116ef836117c9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561172857611727611840565b5b828202905092915050565b600061173e826117c9565b9150611749836117c9565b92508282101561175c5761175b611840565b5b828203905092915050565b6000611772826117a9565b9050919050565b6000611784826117a9565b9050919050565b60008115159050919050565b60006117a282611767565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006117de826117e5565b9050919050565b60006117f0826117a9565b9050919050565b6000611802826117c9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561183557611834611840565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f6974656d20616c726561647920736f6c64000000000000000000000000000000600082015250565b7f5072696365206d7573742062652067726561746572207468616e207a65726f00600082015250565b7f6974656d20646f65736e27742065786973740000000000000000000000000000600082015250565b7f6e6f7420656e6f756768206d6f6e657900000000000000000000000000000000600082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b61197481611797565b811461197f57600080fd5b50565b61198b816117c9565b811461199657600080fd5b5056fea2646970667358221220521b88d4019c27ced4116a2d77c1517c6b39156bc34d5b12a5ab9df550154fa664736f6c63430008040033";

export class FinalMarketplace__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _collectionItems: BigNumberish,
    _feePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FinalMarketplace> {
    return super.deploy(
      _collectionItems,
      _feePercent,
      overrides || {}
    ) as Promise<FinalMarketplace>;
  }
  getDeployTransaction(
    _collectionItems: BigNumberish,
    _feePercent: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _collectionItems,
      _feePercent,
      overrides || {}
    );
  }
  attach(address: string): FinalMarketplace {
    return super.attach(address) as FinalMarketplace;
  }
  connect(signer: Signer): FinalMarketplace__factory {
    return super.connect(signer) as FinalMarketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FinalMarketplaceInterface {
    return new utils.Interface(_abi) as FinalMarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FinalMarketplace {
    return new Contract(address, _abi, signerOrProvider) as FinalMarketplace;
  }
}