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
import type { StubMaker, StubMakerInterface } from "../StubMaker";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "maxTokenId_",
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
    inputs: [],
    name: "maxTokenId",
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
        internalType: "address",
        name: "toOwner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "mint",
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
    inputs: [],
    name: "tokenIds",
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
  "0x60806040523480156200001157600080fd5b50604051620031b0380380620031b08339818101604052810190620000379190620001b6565b82828160009080519060200190620000519291906200007d565b5080600190805190602001906200006a9291906200007d565b50505080600781905550505050620003d2565b8280546200008b90620002dd565b90600052602060002090601f016020900481019282620000af5760008555620000fb565b82601f10620000ca57805160ff1916838001178555620000fb565b82800160010185558215620000fb579182015b82811115620000fa578251825591602001919060010190620000dd565b5b5090506200010a91906200010e565b5090565b5b80821115620001295760008160009055506001016200010f565b5090565b6000620001446200013e8462000267565b6200023e565b9050828152602081018484840111156200015d57600080fd5b6200016a848285620002a7565b509392505050565b600082601f8301126200018457600080fd5b8151620001968482602086016200012d565b91505092915050565b600081519050620001b081620003b8565b92915050565b600080600060608486031215620001cc57600080fd5b600084015167ffffffffffffffff811115620001e757600080fd5b620001f58682870162000172565b935050602084015167ffffffffffffffff8111156200021357600080fd5b620002218682870162000172565b925050604062000234868287016200019f565b9150509250925092565b60006200024a6200025d565b905062000258828262000313565b919050565b6000604051905090565b600067ffffffffffffffff82111562000285576200028462000378565b5b6200029082620003a7565b9050602081019050919050565b6000819050919050565b60005b83811015620002c7578082015181840152602081019050620002aa565b83811115620002d7576000848401525b50505050565b60006002820490506001821680620002f657607f821691505b602082108114156200030d576200030c62000349565b5b50919050565b6200031e82620003a7565b810181811067ffffffffffffffff8211171562000340576200033f62000378565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620003c3816200029d565b8114620003cf57600080fd5b50565b612dce80620003e26000396000f3fe6080604052600436106100f35760003560e01c8063714cff561161008a578063b88d4fde11610059578063b88d4fde1461033c578063c87b56dd14610365578063d0def521146103a2578063e985e9c5146103d2576100f3565b8063714cff561461029257806391ba317a146102bd57806395d89b41146102e8578063a22cb46514610313576100f3565b806323b872dd116100c657806323b872dd146101c657806342842e0e146101ef5780636352211e1461021857806370a0823114610255576100f3565b806301ffc9a7146100f857806306fdde0314610135578063081812fc14610160578063095ea7b31461019d575b600080fd5b34801561010457600080fd5b5061011f600480360381019061011a9190611e0f565b61040f565b60405161012c9190612238565b60405180910390f35b34801561014157600080fd5b5061014a6104f1565b6040516101579190612253565b60405180910390f35b34801561016c57600080fd5b5061018760048036038101906101829190611e61565b610583565b60405161019491906121d1565b60405180910390f35b3480156101a957600080fd5b506101c460048036038101906101bf9190611dd3565b610608565b005b3480156101d257600080fd5b506101ed60048036038101906101e89190611c79565b610720565b005b3480156101fb57600080fd5b5061021660048036038101906102119190611c79565b610780565b005b34801561022457600080fd5b5061023f600480360381019061023a9190611e61565b6107a0565b60405161024c91906121d1565b60405180910390f35b34801561026157600080fd5b5061027c60048036038101906102779190611c14565b610852565b6040516102899190612495565b60405180910390f35b34801561029e57600080fd5b506102a761090a565b6040516102b49190612495565b60405180910390f35b3480156102c957600080fd5b506102d2610910565b6040516102df9190612495565b60405180910390f35b3480156102f457600080fd5b506102fd610916565b60405161030a9190612253565b60405180910390f35b34801561031f57600080fd5b5061033a60048036038101906103359190611d43565b6109a8565b005b34801561034857600080fd5b50610363600480360381019061035e9190611cc8565b6109be565b005b34801561037157600080fd5b5061038c60048036038101906103879190611e61565b610a20565b6040516103999190612253565b60405180910390f35b6103bc60048036038101906103b79190611d7f565b610a32565b6040516103c99190612495565b60405180910390f35b3480156103de57600080fd5b506103f960048036038101906103f49190611c3d565b610ab7565b6040516104069190612238565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104da57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104ea57506104e982610b4b565b5b9050919050565b606060008054610500906126eb565b80601f016020809104026020016040519081016040528092919081815260200182805461052c906126eb565b80156105795780601f1061054e57610100808354040283529160200191610579565b820191906000526020600020905b81548152906001019060200180831161055c57829003601f168201915b5050505050905090565b600061058e82610bb5565b6105cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c490612415565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610613826107a0565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067b90612455565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106a3610c21565b73ffffffffffffffffffffffffffffffffffffffff1614806106d257506106d1816106cc610c21565b610ab7565b5b610711576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070890612355565b60405180910390fd5b61071b8383610c29565b505050565b61073161072b610c21565b82610ce2565b610770576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076790612475565b60405180910390fd5b61077b838383610dc0565b505050565b61079b838383604051806020016040528060008152506109be565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610849576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084090612395565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ba90612375565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60085481565b60075481565b606060018054610925906126eb565b80601f0160208091040260200160405190810160405280929190818152602001828054610951906126eb565b801561099e5780601f106109735761010080835404028352916020019161099e565b820191906000526020600020905b81548152906001019060200180831161098157829003601f168201915b5050505050905090565b6109ba6109b3610c21565b8383611027565b5050565b6109cf6109c9610c21565b83610ce2565b610a0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0590612475565b60405180910390fd5b610a1a84848484611194565b50505050565b6060610a2b826111f0565b9050919050565b600060075460085410610a7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7190612315565b60405180910390fd5b600160086000828254610a8d919061257a565b92505081905550610aa083600854611342565b610aac60085483611360565b600854905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c9c836107a0565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610ced82610bb5565b610d2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2390612335565b60405180910390fd5b6000610d37836107a0565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d795750610d788185610ab7565b5b80610db757508373ffffffffffffffffffffffffffffffffffffffff16610d9f84610583565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610de0826107a0565b73ffffffffffffffffffffffffffffffffffffffff1614610e36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2d90612295565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ea6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9d906122d5565b60405180910390fd5b610eb18383836113d4565b610ebc600082610c29565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f0c9190612601565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f63919061257a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110228383836113d9565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108d906122f5565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111879190612238565b60405180910390a3505050565b61119f848484610dc0565b6111ab848484846113de565b6111ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111e190612275565b60405180910390fd5b50505050565b60606111fb82610bb5565b61123a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611231906123f5565b60405180910390fd5b600060066000848152602001908152602001600020805461125a906126eb565b80601f0160208091040260200160405190810160405280929190818152602001828054611286906126eb565b80156112d35780601f106112a8576101008083540402835291602001916112d3565b820191906000526020600020905b8154815290600101906020018083116112b657829003601f168201915b5050505050905060006112e4611575565b90506000815114156112fa57819250505061133d565b60008251111561132f5780826040516020016113179291906121ad565b6040516020818303038152906040529250505061133d565b6113388461158c565b925050505b919050565b61135c828260405180602001604052806000815250611633565b5050565b61136982610bb5565b6113a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139f906123b5565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906113cf929190611a38565b505050565b505050565b505050565b60006113ff8473ffffffffffffffffffffffffffffffffffffffff1661168e565b15611568578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611428610c21565b8786866040518563ffffffff1660e01b815260040161144a94939291906121ec565b602060405180830381600087803b15801561146457600080fd5b505af192505050801561149557506040513d601f19601f820116820180604052508101906114929190611e38565b60015b611518573d80600081146114c5576040519150601f19603f3d011682016040523d82523d6000602084013e6114ca565b606091505b50600081511415611510576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150790612275565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061156d565b600190505b949350505050565b606060405180602001604052806000815250905090565b606061159782610bb5565b6115d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cd90612435565b60405180910390fd5b60006115e0611575565b90506000815111611600576040518060200160405280600081525061162b565b8061160a846116b1565b60405160200161161b9291906121ad565b6040516020818303038152906040525b915050919050565b61163d838361185e565b61164a60008484846113de565b611689576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168090612275565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606060008214156116f9576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611859565b600082905060005b6000821461172b5780806117149061274e565b915050600a8261172491906125d0565b9150611701565b60008167ffffffffffffffff81111561176d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561179f5781602001600182028036833780820191505090505b5090505b60008514611852576001826117b89190612601565b9150600a856117c79190612797565b60306117d3919061257a565b60f81b81838151811061180f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561184b91906125d0565b94506117a3565b8093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118c5906123d5565b60405180910390fd5b6118d781610bb5565b15611917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190e906122b5565b60405180910390fd5b611923600083836113d4565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611973919061257a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a34600083836113d9565b5050565b828054611a44906126eb565b90600052602060002090601f016020900481019282611a665760008555611aad565b82601f10611a7f57805160ff1916838001178555611aad565b82800160010185558215611aad579182015b82811115611aac578251825591602001919060010190611a91565b5b509050611aba9190611abe565b5090565b5b80821115611ad7576000816000905550600101611abf565b5090565b6000611aee611ae9846124d5565b6124b0565b905082815260208101848484011115611b0657600080fd5b611b118482856126a9565b509392505050565b6000611b2c611b2784612506565b6124b0565b905082815260208101848484011115611b4457600080fd5b611b4f8482856126a9565b509392505050565b600081359050611b6681612d3c565b92915050565b600081359050611b7b81612d53565b92915050565b600081359050611b9081612d6a565b92915050565b600081519050611ba581612d6a565b92915050565b600082601f830112611bbc57600080fd5b8135611bcc848260208601611adb565b91505092915050565b600082601f830112611be657600080fd5b8135611bf6848260208601611b19565b91505092915050565b600081359050611c0e81612d81565b92915050565b600060208284031215611c2657600080fd5b6000611c3484828501611b57565b91505092915050565b60008060408385031215611c5057600080fd5b6000611c5e85828601611b57565b9250506020611c6f85828601611b57565b9150509250929050565b600080600060608486031215611c8e57600080fd5b6000611c9c86828701611b57565b9350506020611cad86828701611b57565b9250506040611cbe86828701611bff565b9150509250925092565b60008060008060808587031215611cde57600080fd5b6000611cec87828801611b57565b9450506020611cfd87828801611b57565b9350506040611d0e87828801611bff565b925050606085013567ffffffffffffffff811115611d2b57600080fd5b611d3787828801611bab565b91505092959194509250565b60008060408385031215611d5657600080fd5b6000611d6485828601611b57565b9250506020611d7585828601611b6c565b9150509250929050565b60008060408385031215611d9257600080fd5b6000611da085828601611b57565b925050602083013567ffffffffffffffff811115611dbd57600080fd5b611dc985828601611bd5565b9150509250929050565b60008060408385031215611de657600080fd5b6000611df485828601611b57565b9250506020611e0585828601611bff565b9150509250929050565b600060208284031215611e2157600080fd5b6000611e2f84828501611b81565b91505092915050565b600060208284031215611e4a57600080fd5b6000611e5884828501611b96565b91505092915050565b600060208284031215611e7357600080fd5b6000611e8184828501611bff565b91505092915050565b611e9381612635565b82525050565b611ea281612647565b82525050565b6000611eb382612537565b611ebd818561254d565b9350611ecd8185602086016126b8565b611ed681612884565b840191505092915050565b6000611eec82612542565b611ef6818561255e565b9350611f068185602086016126b8565b611f0f81612884565b840191505092915050565b6000611f2582612542565b611f2f818561256f565b9350611f3f8185602086016126b8565b80840191505092915050565b6000611f5860328361255e565b9150611f6382612895565b604082019050919050565b6000611f7b60258361255e565b9150611f86826128e4565b604082019050919050565b6000611f9e601c8361255e565b9150611fa982612933565b602082019050919050565b6000611fc160248361255e565b9150611fcc8261295c565b604082019050919050565b6000611fe460198361255e565b9150611fef826129ab565b602082019050919050565b600061200760158361255e565b9150612012826129d4565b602082019050919050565b600061202a602c8361255e565b9150612035826129fd565b604082019050919050565b600061204d60388361255e565b915061205882612a4c565b604082019050919050565b6000612070602a8361255e565b915061207b82612a9b565b604082019050919050565b600061209360298361255e565b915061209e82612aea565b604082019050919050565b60006120b6602e8361255e565b91506120c182612b39565b604082019050919050565b60006120d960208361255e565b91506120e482612b88565b602082019050919050565b60006120fc60318361255e565b915061210782612bb1565b604082019050919050565b600061211f602c8361255e565b915061212a82612c00565b604082019050919050565b6000612142602f8361255e565b915061214d82612c4f565b604082019050919050565b600061216560218361255e565b915061217082612c9e565b604082019050919050565b600061218860318361255e565b915061219382612ced565b604082019050919050565b6121a78161269f565b82525050565b60006121b98285611f1a565b91506121c58284611f1a565b91508190509392505050565b60006020820190506121e66000830184611e8a565b92915050565b60006080820190506122016000830187611e8a565b61220e6020830186611e8a565b61221b604083018561219e565b818103606083015261222d8184611ea8565b905095945050505050565b600060208201905061224d6000830184611e99565b92915050565b6000602082019050818103600083015261226d8184611ee1565b905092915050565b6000602082019050818103600083015261228e81611f4b565b9050919050565b600060208201905081810360008301526122ae81611f6e565b9050919050565b600060208201905081810360008301526122ce81611f91565b9050919050565b600060208201905081810360008301526122ee81611fb4565b9050919050565b6000602082019050818103600083015261230e81611fd7565b9050919050565b6000602082019050818103600083015261232e81611ffa565b9050919050565b6000602082019050818103600083015261234e8161201d565b9050919050565b6000602082019050818103600083015261236e81612040565b9050919050565b6000602082019050818103600083015261238e81612063565b9050919050565b600060208201905081810360008301526123ae81612086565b9050919050565b600060208201905081810360008301526123ce816120a9565b9050919050565b600060208201905081810360008301526123ee816120cc565b9050919050565b6000602082019050818103600083015261240e816120ef565b9050919050565b6000602082019050818103600083015261242e81612112565b9050919050565b6000602082019050818103600083015261244e81612135565b9050919050565b6000602082019050818103600083015261246e81612158565b9050919050565b6000602082019050818103600083015261248e8161217b565b9050919050565b60006020820190506124aa600083018461219e565b92915050565b60006124ba6124cb565b90506124c6828261271d565b919050565b6000604051905090565b600067ffffffffffffffff8211156124f0576124ef612855565b5b6124f982612884565b9050602081019050919050565b600067ffffffffffffffff82111561252157612520612855565b5b61252a82612884565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125858261269f565b91506125908361269f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156125c5576125c46127c8565b5b828201905092915050565b60006125db8261269f565b91506125e68361269f565b9250826125f6576125f56127f7565b5b828204905092915050565b600061260c8261269f565b91506126178361269f565b92508282101561262a576126296127c8565b5b828203905092915050565b60006126408261267f565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156126d65780820151818401526020810190506126bb565b838111156126e5576000848401525b50505050565b6000600282049050600182168061270357607f821691505b6020821081141561271757612716612826565b5b50919050565b61272682612884565b810181811067ffffffffffffffff8211171561274557612744612855565b5b80604052505050565b60006127598261269f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561278c5761278b6127c8565b5b600182019050919050565b60006127a28261269f565b91506127ad8361269f565b9250826127bd576127bc6127f7565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f457863656564206d6178696d756d20737570706c790000000000000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612d4581612635565b8114612d5057600080fd5b50565b612d5c81612647565b8114612d6757600080fd5b50565b612d7381612653565b8114612d7e57600080fd5b50565b612d8a8161269f565b8114612d9557600080fd5b5056fea2646970667358221220c8d7fd4a383bcffd8c7cf428ced260f5282e7cd0e60e374dcfbaef9d4596920364736f6c63430008040033";

export class StubMaker__factory extends ContractFactory {
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
    name_: string,
    symbol_: string,
    maxTokenId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StubMaker> {
    return super.deploy(
      name_,
      symbol_,
      maxTokenId_,
      overrides || {}
    ) as Promise<StubMaker>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    maxTokenId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      maxTokenId_,
      overrides || {}
    );
  }
  attach(address: string): StubMaker {
    return super.attach(address) as StubMaker;
  }
  connect(signer: Signer): StubMaker__factory {
    return super.connect(signer) as StubMaker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StubMakerInterface {
    return new utils.Interface(_abi) as StubMakerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StubMaker {
    return new Contract(address, _abi, signerOrProvider) as StubMaker;
  }
}
