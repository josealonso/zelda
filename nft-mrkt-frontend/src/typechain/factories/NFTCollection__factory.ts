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
import type { NFTCollection, NFTCollectionInterface } from "../NFTCollection";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maxNumOfItems",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_productName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_makerAddress",
        type: "address",
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
    inputs: [],
    name: "getCollectionAddress",
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
    inputs: [],
    name: "getMakerAddress",
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
    inputs: [],
    name: "getNumOfCollectionItems",
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
    name: "getProductName",
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
    name: "makerAddress",
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
    inputs: [],
    name: "maxNumOfItems",
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
    inputs: [],
    name: "productName",
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
    name: "tokenCount",
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
  "0x60806040523480156200001157600080fd5b506040516200339e3803806200339e833981810160405281019062000037919062000229565b8484816000908051906020019062000051929190620000d9565b5080600190805190602001906200006a929190620000d9565b5050508260078190555081600890805190602001906200008c929190620000d9565b5080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050620004d8565b828054620000e790620003c9565b90600052602060002090601f0160209004810192826200010b576000855562000157565b82601f106200012657805160ff191683800117855562000157565b8280016001018555821562000157579182015b828111156200015657825182559160200191906001019062000139565b5b5090506200016691906200016a565b5090565b5b80821115620001855760008160009055506001016200016b565b5090565b6000620001a06200019a846200031f565b620002f6565b905082815260208101848484011115620001b957600080fd5b620001c684828562000393565b509392505050565b600081519050620001df81620004a4565b92915050565b600082601f830112620001f757600080fd5b81516200020984826020860162000189565b91505092915050565b6000815190506200022381620004be565b92915050565b600080600080600060a086880312156200024257600080fd5b600086015167ffffffffffffffff8111156200025d57600080fd5b6200026b88828901620001e5565b955050602086015167ffffffffffffffff8111156200028957600080fd5b6200029788828901620001e5565b9450506040620002aa8882890162000212565b935050606086015167ffffffffffffffff811115620002c857600080fd5b620002d688828901620001e5565b9250506080620002e988828901620001ce565b9150509295509295909350565b60006200030262000315565b9050620003108282620003ff565b919050565b6000604051905090565b600067ffffffffffffffff8211156200033d576200033c62000464565b5b620003488262000493565b9050602081019050919050565b6000620003628262000369565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620003b357808201518184015260208101905062000396565b83811115620003c3576000848401525b50505050565b60006002820490506001821680620003e257607f821691505b60208210811415620003f957620003f862000435565b5b50919050565b6200040a8262000493565b810181811067ffffffffffffffff821117156200042c576200042b62000464565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004af8162000355565b8114620004bb57600080fd5b50565b620004c98162000389565b8114620004d557600080fd5b50565b612eb680620004e86000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637f7650eb116100b8578063b88d4fde1161007c578063b88d4fde14610367578063c87b56dd14610383578063c9bf2e29146103b3578063d85d3d27146103d1578063dfaf022114610401578063e985e9c51461041f57610142565b80637f7650eb146102d357806395d89b41146102f15780639f181b5e1461030f578063a22cb4651461032d578063a83810551461034957610142565b806323b872dd1161010a57806323b872dd146101ff5780632e3bb4f51461021b57806342842e0e146102395780636352211e1461025557806370a08231146102855780637757abaa146102b557610142565b806301ffc9a71461014757806306fdde0314610177578063081812fc14610195578063095ea7b3146101c55780631e04c9cb146101e1575b600080fd5b610161600480360381019061015c9190611f22565b61044f565b60405161016e9190612369565b60405180910390f35b61017f610531565b60405161018c9190612384565b60405180910390f35b6101af60048036038101906101aa9190611fb5565b6105c3565b6040516101bc9190612302565b60405180910390f35b6101df60048036038101906101da9190611ee6565b610648565b005b6101e9610760565b6040516101f69190612302565b60405180910390f35b61021960048036038101906102149190611de0565b610786565b005b6102236107e6565b60405161023091906125a6565b60405180910390f35b610253600480360381019061024e9190611de0565b6107ec565b005b61026f600480360381019061026a9190611fb5565b61080c565b60405161027c9190612302565b60405180910390f35b61029f600480360381019061029a9190611d7b565b6108be565b6040516102ac91906125a6565b60405180910390f35b6102bd610976565b6040516102ca91906125a6565b60405180910390f35b6102db610980565b6040516102e89190612384565b60405180910390f35b6102f9610a0e565b6040516103069190612384565b60405180910390f35b610317610aa0565b60405161032491906125a6565b60405180910390f35b61034760048036038101906103429190611eaa565b610aa6565b005b610351610abc565b60405161035e9190612302565b60405180910390f35b610381600480360381019061037c9190611e2f565b610ae6565b005b61039d60048036038101906103989190611fb5565b610b48565b6040516103aa9190612384565b60405180910390f35b6103bb610c9a565b6040516103c89190612302565b60405180910390f35b6103eb60048036038101906103e69190611f74565b610ca2565b6040516103f891906125a6565b60405180910390f35b610409610cde565b6040516104169190612384565b60405180910390f35b61043960048036038101906104349190611da4565b610d70565b6040516104469190612369565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061051a57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061052a575061052982610e04565b5b9050919050565b606060008054610540906127fc565b80601f016020809104026020016040519081016040528092919081815260200182805461056c906127fc565b80156105b95780601f1061058e576101008083540402835291602001916105b9565b820191906000526020600020905b81548152906001019060200180831161059c57829003601f168201915b5050505050905090565b60006105ce82610e6e565b61060d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060490612526565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106538261080c565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bb90612566565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106e3610eda565b73ffffffffffffffffffffffffffffffffffffffff16148061071257506107118161070c610eda565b610d70565b5b610751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074890612466565b60405180910390fd5b61075b8383610ee2565b505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610797610791610eda565b82610f9b565b6107d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cd90612586565b60405180910390fd5b6107e1838383611079565b505050565b60075481565b61080783838360405180602001604052806000815250610ae6565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ac906124a6565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561092f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092690612486565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600754905090565b6008805461098d906127fc565b80601f01602080910402602001604051908101604052809291908181526020018280546109b9906127fc565b8015610a065780601f106109db57610100808354040283529160200191610a06565b820191906000526020600020905b8154815290600101906020018083116109e957829003601f168201915b505050505081565b606060018054610a1d906127fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610a49906127fc565b8015610a965780601f10610a6b57610100808354040283529160200191610a96565b820191906000526020600020905b815481529060010190602001808311610a7957829003601f168201915b5050505050905090565b600a5481565b610ab8610ab1610eda565b83836112e0565b5050565b6000600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610af7610af1610eda565b83610f9b565b610b36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2d90612586565b60405180910390fd5b610b428484848461144d565b50505050565b6060610b5382610e6e565b610b92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8990612506565b60405180910390fd5b6000600660008481526020019081526020016000208054610bb2906127fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610bde906127fc565b8015610c2b5780601f10610c0057610100808354040283529160200191610c2b565b820191906000526020600020905b815481529060010190602001808311610c0e57829003601f168201915b505050505090506000610c3c6114a9565b9050600081511415610c52578192505050610c95565b600082511115610c87578082604051602001610c6f9291906122de565b60405160208183030381529060405292505050610c95565b610c90846114c0565b925050505b919050565b600030905090565b6000600a6000815480929190610cb79061285f565b9190505550610cc833600a54611567565b610cd4600a5483611585565b600a549050919050565b606060088054610ced906127fc565b80601f0160208091040260200160405190810160405280929190818152602001828054610d19906127fc565b8015610d665780601f10610d3b57610100808354040283529160200191610d66565b820191906000526020600020905b815481529060010190602001808311610d4957829003601f168201915b5050505050905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610f558361080c565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610fa682610e6e565b610fe5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fdc90612446565b60405180910390fd5b6000610ff08361080c565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061103257506110318185610d70565b5b8061107057508373ffffffffffffffffffffffffffffffffffffffff16611058846105c3565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166110998261080c565b73ffffffffffffffffffffffffffffffffffffffff16146110ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e6906123c6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561115f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115690612406565b60405180910390fd5b61116a8383836115f9565b611175600082610ee2565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111c59190612712565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461121c919061268b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112db8383836115fe565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561134f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134690612426565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114409190612369565b60405180910390a3505050565b611458848484611079565b61146484848484611603565b6114a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149a906123a6565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606114cb82610e6e565b61150a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150190612546565b60405180910390fd5b60006115146114a9565b90506000815111611534576040518060200160405280600081525061155f565b8061153e8461179a565b60405160200161154f9291906122de565b6040516020818303038152906040525b915050919050565b611581828260405180602001604052806000815250611947565b5050565b61158e82610e6e565b6115cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115c4906124c6565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906115f4929190611b9f565b505050565b505050565b505050565b60006116248473ffffffffffffffffffffffffffffffffffffffff166119a2565b1561178d578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261164d610eda565b8786866040518563ffffffff1660e01b815260040161166f949392919061231d565b602060405180830381600087803b15801561168957600080fd5b505af19250505080156116ba57506040513d601f19601f820116820180604052508101906116b79190611f4b565b60015b61173d573d80600081146116ea576040519150601f19603f3d011682016040523d82523d6000602084013e6116ef565b606091505b50600081511415611735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172c906123a6565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611792565b600190505b949350505050565b606060008214156117e2576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611942565b600082905060005b600082146118145780806117fd9061285f565b915050600a8261180d91906126e1565b91506117ea565b60008167ffffffffffffffff811115611856577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156118885781602001600182028036833780820191505090505b5090505b6000851461193b576001826118a19190612712565b9150600a856118b091906128a8565b60306118bc919061268b565b60f81b8183815181106118f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561193491906126e1565b945061188c565b8093505050505b919050565b61195183836119c5565b61195e6000848484611603565b61199d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611994906123a6565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a2c906124e6565b60405180910390fd5b611a3e81610e6e565b15611a7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a75906123e6565b60405180910390fd5b611a8a600083836115f9565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ada919061268b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611b9b600083836115fe565b5050565b828054611bab906127fc565b90600052602060002090601f016020900481019282611bcd5760008555611c14565b82601f10611be657805160ff1916838001178555611c14565b82800160010185558215611c14579182015b82811115611c13578251825591602001919060010190611bf8565b5b509050611c219190611c25565b5090565b5b80821115611c3e576000816000905550600101611c26565b5090565b6000611c55611c50846125e6565b6125c1565b905082815260208101848484011115611c6d57600080fd5b611c788482856127ba565b509392505050565b6000611c93611c8e84612617565b6125c1565b905082815260208101848484011115611cab57600080fd5b611cb68482856127ba565b509392505050565b600081359050611ccd81612e24565b92915050565b600081359050611ce281612e3b565b92915050565b600081359050611cf781612e52565b92915050565b600081519050611d0c81612e52565b92915050565b600082601f830112611d2357600080fd5b8135611d33848260208601611c42565b91505092915050565b600082601f830112611d4d57600080fd5b8135611d5d848260208601611c80565b91505092915050565b600081359050611d7581612e69565b92915050565b600060208284031215611d8d57600080fd5b6000611d9b84828501611cbe565b91505092915050565b60008060408385031215611db757600080fd5b6000611dc585828601611cbe565b9250506020611dd685828601611cbe565b9150509250929050565b600080600060608486031215611df557600080fd5b6000611e0386828701611cbe565b9350506020611e1486828701611cbe565b9250506040611e2586828701611d66565b9150509250925092565b60008060008060808587031215611e4557600080fd5b6000611e5387828801611cbe565b9450506020611e6487828801611cbe565b9350506040611e7587828801611d66565b925050606085013567ffffffffffffffff811115611e9257600080fd5b611e9e87828801611d12565b91505092959194509250565b60008060408385031215611ebd57600080fd5b6000611ecb85828601611cbe565b9250506020611edc85828601611cd3565b9150509250929050565b60008060408385031215611ef957600080fd5b6000611f0785828601611cbe565b9250506020611f1885828601611d66565b9150509250929050565b600060208284031215611f3457600080fd5b6000611f4284828501611ce8565b91505092915050565b600060208284031215611f5d57600080fd5b6000611f6b84828501611cfd565b91505092915050565b600060208284031215611f8657600080fd5b600082013567ffffffffffffffff811115611fa057600080fd5b611fac84828501611d3c565b91505092915050565b600060208284031215611fc757600080fd5b6000611fd584828501611d66565b91505092915050565b611fe781612746565b82525050565b611ff681612758565b82525050565b600061200782612648565b612011818561265e565b93506120218185602086016127c9565b61202a81612995565b840191505092915050565b600061204082612653565b61204a818561266f565b935061205a8185602086016127c9565b61206381612995565b840191505092915050565b600061207982612653565b6120838185612680565b93506120938185602086016127c9565b80840191505092915050565b60006120ac60328361266f565b91506120b7826129a6565b604082019050919050565b60006120cf60258361266f565b91506120da826129f5565b604082019050919050565b60006120f2601c8361266f565b91506120fd82612a44565b602082019050919050565b600061211560248361266f565b915061212082612a6d565b604082019050919050565b600061213860198361266f565b915061214382612abc565b602082019050919050565b600061215b602c8361266f565b915061216682612ae5565b604082019050919050565b600061217e60388361266f565b915061218982612b34565b604082019050919050565b60006121a1602a8361266f565b91506121ac82612b83565b604082019050919050565b60006121c460298361266f565b91506121cf82612bd2565b604082019050919050565b60006121e7602e8361266f565b91506121f282612c21565b604082019050919050565b600061220a60208361266f565b915061221582612c70565b602082019050919050565b600061222d60318361266f565b915061223882612c99565b604082019050919050565b6000612250602c8361266f565b915061225b82612ce8565b604082019050919050565b6000612273602f8361266f565b915061227e82612d37565b604082019050919050565b600061229660218361266f565b91506122a182612d86565b604082019050919050565b60006122b960318361266f565b91506122c482612dd5565b604082019050919050565b6122d8816127b0565b82525050565b60006122ea828561206e565b91506122f6828461206e565b91508190509392505050565b60006020820190506123176000830184611fde565b92915050565b60006080820190506123326000830187611fde565b61233f6020830186611fde565b61234c60408301856122cf565b818103606083015261235e8184611ffc565b905095945050505050565b600060208201905061237e6000830184611fed565b92915050565b6000602082019050818103600083015261239e8184612035565b905092915050565b600060208201905081810360008301526123bf8161209f565b9050919050565b600060208201905081810360008301526123df816120c2565b9050919050565b600060208201905081810360008301526123ff816120e5565b9050919050565b6000602082019050818103600083015261241f81612108565b9050919050565b6000602082019050818103600083015261243f8161212b565b9050919050565b6000602082019050818103600083015261245f8161214e565b9050919050565b6000602082019050818103600083015261247f81612171565b9050919050565b6000602082019050818103600083015261249f81612194565b9050919050565b600060208201905081810360008301526124bf816121b7565b9050919050565b600060208201905081810360008301526124df816121da565b9050919050565b600060208201905081810360008301526124ff816121fd565b9050919050565b6000602082019050818103600083015261251f81612220565b9050919050565b6000602082019050818103600083015261253f81612243565b9050919050565b6000602082019050818103600083015261255f81612266565b9050919050565b6000602082019050818103600083015261257f81612289565b9050919050565b6000602082019050818103600083015261259f816122ac565b9050919050565b60006020820190506125bb60008301846122cf565b92915050565b60006125cb6125dc565b90506125d7828261282e565b919050565b6000604051905090565b600067ffffffffffffffff82111561260157612600612966565b5b61260a82612995565b9050602081019050919050565b600067ffffffffffffffff82111561263257612631612966565b5b61263b82612995565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612696826127b0565b91506126a1836127b0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156126d6576126d56128d9565b5b828201905092915050565b60006126ec826127b0565b91506126f7836127b0565b92508261270757612706612908565b5b828204905092915050565b600061271d826127b0565b9150612728836127b0565b92508282101561273b5761273a6128d9565b5b828203905092915050565b600061275182612790565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156127e75780820151818401526020810190506127cc565b838111156127f6576000848401525b50505050565b6000600282049050600182168061281457607f821691505b6020821081141561282857612827612937565b5b50919050565b61283782612995565b810181811067ffffffffffffffff8211171561285657612855612966565b5b80604052505050565b600061286a826127b0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561289d5761289c6128d9565b5b600182019050919050565b60006128b3826127b0565b91506128be836127b0565b9250826128ce576128cd612908565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612e2d81612746565b8114612e3857600080fd5b50565b612e4481612758565b8114612e4f57600080fd5b50565b612e5b81612764565b8114612e6657600080fd5b50565b612e72816127b0565b8114612e7d57600080fd5b5056fea26469706673582212206d1353e46d25154e50d07f3b0cbf0ab7a5a94c04745c956b0ae38e6dc27e7cb064736f6c63430008040033";

export class NFTCollection__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    _maxNumOfItems: BigNumberish,
    _productName: string,
    _makerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTCollection> {
    return super.deploy(
      _name,
      _symbol,
      _maxNumOfItems,
      _productName,
      _makerAddress,
      overrides || {}
    ) as Promise<NFTCollection>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _maxNumOfItems: BigNumberish,
    _productName: string,
    _makerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _maxNumOfItems,
      _productName,
      _makerAddress,
      overrides || {}
    );
  }
  attach(address: string): NFTCollection {
    return super.attach(address) as NFTCollection;
  }
  connect(signer: Signer): NFTCollection__factory {
    return super.connect(signer) as NFTCollection__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTCollectionInterface {
    return new utils.Interface(_abi) as NFTCollectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTCollection {
    return new Contract(address, _abi, signerOrProvider) as NFTCollection;
  }
}