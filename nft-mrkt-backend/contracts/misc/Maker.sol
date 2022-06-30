//SPDX-License-Identifier: Unlicense
// pragma solidity ^0.8.0;

// import "hardhat/console.sol";
// import "./Oznft.sol";

// contract Maker {

//     address[] admins;
//     address[] contracts;
//     string companyName;
//     string logoIpfsUrl;

//     modifier onlyAdmin() {
//         bool isAdmin = false;

//         for(uint i=0; i<admins.length; i++) {
//             if(msg.sender == admins[i]) {
//                 isAdmin = true;
//                 break;
//             }
//         }
//         require(isAdmin == true, "Only Admins can do this!");
//         _;
//     }
//     constructor() {
//         admins.push(msg.sender);
//         // These will obviously be made into parameters
//         companyName = "Wonka Industries";
//         logoIpfsUrl = "https://gateway.pinata.cloud/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6/";
//     }

//     function addAdmin(address _newAdmin) public onlyAdmin {
//         admins.push(_newAdmin);
//     }

//     function getAdmin(uint256 _index) public view returns(address) {
//         return(admins[_index]);
//     }

//     function getAdminCount() public view returns(uint256) {
//         return admins.length;
//     }

//     function addContract(address _address) public onlyAdmin {
//         contracts.push(_address);
//     }

//     function getContractCount() public view returns(uint256) {
//         return contracts.length;
//     }
// }
