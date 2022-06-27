/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OzNFT, OzNFTInterface } from "../OzNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mintToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002ad838038062002ad8833981810160405281019062000037919062000197565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b50505050506200037a565b82805462000083906200029f565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c620001368462000233565b6200020a565b9050828152602081018484840111156200015557600080fd5b6200016284828562000269565b509392505050565b600082601f8301126200017c57600080fd5b81516200018e84826020860162000125565b91505092915050565b60008060408385031215620001ab57600080fd5b600083015167ffffffffffffffff811115620001c657600080fd5b620001d4858286016200016a565b925050602083015167ffffffffffffffff811115620001f257600080fd5b62000200858286016200016a565b9150509250929050565b60006200021662000229565b9050620002248282620002d5565b919050565b6000604051905090565b600067ffffffffffffffff8211156200025157620002506200033a565b5b6200025c8262000369565b9050602081019050919050565b60005b83811015620002895780820151818401526020810190506200026c565b8381111562000299576000848401525b50505050565b60006002820490506001821680620002b857607f821691505b60208210811415620002cf57620002ce6200030b565b5b50919050565b620002e08262000369565b810181811067ffffffffffffffff821117156200030257620003016200033a565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61274e806200038a6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636352211e11610097578063a9059cbb11610066578063a9059cbb14610296578063b88d4fde146102b2578063c87b56dd146102ce578063e985e9c5146102fe576100f5565b80636352211e146101fc57806370a082311461022c57806395d89b411461025c578063a22cb4651461027a576100f5565b8063081812fc116100d3578063081812fc14610178578063095ea7b3146101a857806323b872dd146101c457806342842e0e146101e0576100f5565b806301173a74146100fa57806301ffc9a71461012a57806306fdde031461015a575b600080fd5b610114600480360381019061010f91906117a9565b61032e565b6040516101219190611f0d565b60405180910390f35b610144600480360381019061013f9190611950565b61035e565b6040516101519190611d10565b60405180910390f35b610162610440565b60405161016f9190611d2b565b60405180910390f35b610192600480360381019061018d91906119a2565b6104d2565b60405161019f9190611ca9565b60405180910390f35b6101c260048036038101906101bd9190611914565b610557565b005b6101de60048036038101906101d9919061180e565b61066f565b005b6101fa60048036038101906101f5919061180e565b6106cf565b005b610216600480360381019061021191906119a2565b6106ef565b6040516102239190611ca9565b60405180910390f35b610246600480360381019061024191906117a9565b6107a1565b6040516102539190611f0d565b60405180910390f35b610264610859565b6040516102719190611d2b565b60405180910390f35b610294600480360381019061028f91906118d8565b6108eb565b005b6102b060048036038101906102ab9190611914565b610901565b005b6102cc60048036038101906102c7919061185d565b610910565b005b6102e860048036038101906102e391906119a2565b610972565b6040516102f59190611d2b565b60405180910390f35b610318600480360381019061031391906117d2565b610a19565b6040516103259190611d10565b60405180910390f35b600061033a6006610aad565b61034d826103486006610ac3565b610ad1565b6103576006610ac3565b9050919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610439575061043882610cab565b5b9050919050565b60606000805461044f90612132565b80601f016020809104026020016040519081016040528092919081815260200182805461047b90612132565b80156104c85780601f1061049d576101008083540402835291602001916104c8565b820191906000526020600020905b8154815290600101906020018083116104ab57829003601f168201915b5050505050905090565b60006104dd82610d15565b61051c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051390611e8d565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610562826106ef565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ca90611ecd565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105f2610d81565b73ffffffffffffffffffffffffffffffffffffffff16148061062157506106208161061b610d81565b610a19565b5b610660576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065790611e0d565b60405180910390fd5b61066a8383610d89565b505050565b61068061067a610d81565b82610e42565b6106bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b690611eed565b60405180910390fd5b6106ca838383610f20565b505050565b6106ea83838360405180602001604052806000815250610910565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f90611e4d565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610812576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080990611e2d565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461086890612132565b80601f016020809104026020016040519081016040528092919081815260200182805461089490612132565b80156108e15780601f106108b6576101008083540402835291602001916108e1565b820191906000526020600020905b8154815290600101906020018083116108c457829003601f168201915b5050505050905090565b6108fd6108f6610d81565b8383611187565b5050565b61090c338383610f20565b5050565b61092161091b610d81565b83610e42565b610960576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095790611eed565b60405180910390fd5b61096c848484846112f4565b50505050565b606061097d82610d15565b6109bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b390611ead565b60405180910390fd5b60006109c6611350565b905060008151116109e65760405180602001604052806000815250610a11565b806109f084611367565b604051602001610a01929190611c85565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3890611e6d565b60405180910390fd5b610b4a81610d15565b15610b8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8190611d8d565b60405180910390fd5b610b9660008383611514565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610be69190611fc1565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610ca760008383611519565b5050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610dfc836106ef565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610e4d82610d15565b610e8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8390611ded565b60405180910390fd5b6000610e97836106ef565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610ed95750610ed88185610a19565b5b80610f1757508373ffffffffffffffffffffffffffffffffffffffff16610eff846104d2565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610f40826106ef565b73ffffffffffffffffffffffffffffffffffffffff1614610f96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8d90611d6d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611006576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffd90611dad565b60405180910390fd5b611011838383611514565b61101c600082610d89565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461106c9190612048565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110c39190611fc1565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611182838383611519565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ed90611dcd565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112e79190611d10565b60405180910390a3505050565b6112ff848484610f20565b61130b8484848461151e565b61134a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134190611d4d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156113af576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061150f565b600082905060005b600082146113e15780806113ca90612195565b915050600a826113da9190612017565b91506113b7565b60008167ffffffffffffffff811115611423577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156114555781602001600182028036833780820191505090505b5090505b600085146115085760018261146e9190612048565b9150600a8561147d91906121de565b60306114899190611fc1565b60f81b8183815181106114c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856115019190612017565b9450611459565b8093505050505b919050565b505050565b505050565b600061153f8473ffffffffffffffffffffffffffffffffffffffff166116b5565b156116a8578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611568610d81565b8786866040518563ffffffff1660e01b815260040161158a9493929190611cc4565b602060405180830381600087803b1580156115a457600080fd5b505af19250505080156115d557506040513d601f19601f820116820180604052508101906115d29190611979565b60015b611658573d8060008114611605576040519150601f19603f3d011682016040523d82523d6000602084013e61160a565b606091505b50600081511415611650576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161164790611d4d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116ad565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60006116eb6116e684611f4d565b611f28565b90508281526020810184848401111561170357600080fd5b61170e8482856120f0565b509392505050565b600081359050611725816126bc565b92915050565b60008135905061173a816126d3565b92915050565b60008135905061174f816126ea565b92915050565b600081519050611764816126ea565b92915050565b600082601f83011261177b57600080fd5b813561178b8482602086016116d8565b91505092915050565b6000813590506117a381612701565b92915050565b6000602082840312156117bb57600080fd5b60006117c984828501611716565b91505092915050565b600080604083850312156117e557600080fd5b60006117f385828601611716565b925050602061180485828601611716565b9150509250929050565b60008060006060848603121561182357600080fd5b600061183186828701611716565b935050602061184286828701611716565b925050604061185386828701611794565b9150509250925092565b6000806000806080858703121561187357600080fd5b600061188187828801611716565b945050602061189287828801611716565b93505060406118a387828801611794565b925050606085013567ffffffffffffffff8111156118c057600080fd5b6118cc8782880161176a565b91505092959194509250565b600080604083850312156118eb57600080fd5b60006118f985828601611716565b925050602061190a8582860161172b565b9150509250929050565b6000806040838503121561192757600080fd5b600061193585828601611716565b925050602061194685828601611794565b9150509250929050565b60006020828403121561196257600080fd5b600061197084828501611740565b91505092915050565b60006020828403121561198b57600080fd5b600061199984828501611755565b91505092915050565b6000602082840312156119b457600080fd5b60006119c284828501611794565b91505092915050565b6119d48161207c565b82525050565b6119e38161208e565b82525050565b60006119f482611f7e565b6119fe8185611f94565b9350611a0e8185602086016120ff565b611a17816122cb565b840191505092915050565b6000611a2d82611f89565b611a378185611fa5565b9350611a478185602086016120ff565b611a50816122cb565b840191505092915050565b6000611a6682611f89565b611a708185611fb6565b9350611a808185602086016120ff565b80840191505092915050565b6000611a99603283611fa5565b9150611aa4826122dc565b604082019050919050565b6000611abc602583611fa5565b9150611ac78261232b565b604082019050919050565b6000611adf601c83611fa5565b9150611aea8261237a565b602082019050919050565b6000611b02602483611fa5565b9150611b0d826123a3565b604082019050919050565b6000611b25601983611fa5565b9150611b30826123f2565b602082019050919050565b6000611b48602c83611fa5565b9150611b538261241b565b604082019050919050565b6000611b6b603883611fa5565b9150611b768261246a565b604082019050919050565b6000611b8e602a83611fa5565b9150611b99826124b9565b604082019050919050565b6000611bb1602983611fa5565b9150611bbc82612508565b604082019050919050565b6000611bd4602083611fa5565b9150611bdf82612557565b602082019050919050565b6000611bf7602c83611fa5565b9150611c0282612580565b604082019050919050565b6000611c1a602f83611fa5565b9150611c25826125cf565b604082019050919050565b6000611c3d602183611fa5565b9150611c488261261e565b604082019050919050565b6000611c60603183611fa5565b9150611c6b8261266d565b604082019050919050565b611c7f816120e6565b82525050565b6000611c918285611a5b565b9150611c9d8284611a5b565b91508190509392505050565b6000602082019050611cbe60008301846119cb565b92915050565b6000608082019050611cd960008301876119cb565b611ce660208301866119cb565b611cf36040830185611c76565b8181036060830152611d0581846119e9565b905095945050505050565b6000602082019050611d2560008301846119da565b92915050565b60006020820190508181036000830152611d458184611a22565b905092915050565b60006020820190508181036000830152611d6681611a8c565b9050919050565b60006020820190508181036000830152611d8681611aaf565b9050919050565b60006020820190508181036000830152611da681611ad2565b9050919050565b60006020820190508181036000830152611dc681611af5565b9050919050565b60006020820190508181036000830152611de681611b18565b9050919050565b60006020820190508181036000830152611e0681611b3b565b9050919050565b60006020820190508181036000830152611e2681611b5e565b9050919050565b60006020820190508181036000830152611e4681611b81565b9050919050565b60006020820190508181036000830152611e6681611ba4565b9050919050565b60006020820190508181036000830152611e8681611bc7565b9050919050565b60006020820190508181036000830152611ea681611bea565b9050919050565b60006020820190508181036000830152611ec681611c0d565b9050919050565b60006020820190508181036000830152611ee681611c30565b9050919050565b60006020820190508181036000830152611f0681611c53565b9050919050565b6000602082019050611f226000830184611c76565b92915050565b6000611f32611f43565b9050611f3e8282612164565b919050565b6000604051905090565b600067ffffffffffffffff821115611f6857611f6761229c565b5b611f71826122cb565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611fcc826120e6565b9150611fd7836120e6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561200c5761200b61220f565b5b828201905092915050565b6000612022826120e6565b915061202d836120e6565b92508261203d5761203c61223e565b5b828204905092915050565b6000612053826120e6565b915061205e836120e6565b9250828210156120715761207061220f565b5b828203905092915050565b6000612087826120c6565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561211d578082015181840152602081019050612102565b8381111561212c576000848401525b50505050565b6000600282049050600182168061214a57607f821691505b6020821081141561215e5761215d61226d565b5b50919050565b61216d826122cb565b810181811067ffffffffffffffff8211171561218c5761218b61229c565b5b80604052505050565b60006121a0826120e6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121d3576121d261220f565b5b600182019050919050565b60006121e9826120e6565b91506121f4836120e6565b9250826122045761220361223e565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6126c58161207c565b81146126d057600080fd5b50565b6126dc8161208e565b81146126e757600080fd5b50565b6126f38161209a565b81146126fe57600080fd5b50565b61270a816120e6565b811461271557600080fd5b5056fea264697066735822122036e7ee7b129a0c6a98f6b038a261eebe30b09bbe3f37e873099e89751fa77e3d64736f6c63430008040033";

export class OzNFT__factory extends ContractFactory {
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
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OzNFT> {
    return super.deploy(
      _tokenName,
      _tokenSymbol,
      overrides || {}
    ) as Promise<OzNFT>;
  }
  getDeployTransaction(
    _tokenName: string,
    _tokenSymbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenName,
      _tokenSymbol,
      overrides || {}
    );
  }
  attach(address: string): OzNFT {
    return super.attach(address) as OzNFT;
  }
  connect(signer: Signer): OzNFT__factory {
    return super.connect(signer) as OzNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OzNFTInterface {
    return new utils.Interface(_abi) as OzNFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OzNFT {
    return new Contract(address, _abi, signerOrProvider) as OzNFT;
  }
}