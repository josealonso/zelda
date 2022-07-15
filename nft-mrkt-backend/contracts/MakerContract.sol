//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./IMakerContract.sol";
import "hardhat/console.sol";

contract MakerContract is IMakerContract {
    // this is for the test
    address[] admins;
    address[] contracts;
    string companyName;
    string logoIpfsUrl;

    modifier onlyAdmin() {
        bool isAdmin = false;

        for(uint i=0; i<admins.length; i++) {
            if(msg.sender == admins[i]) {
                isAdmin = true;
                break;
            }
        }
        require(isAdmin == true, "Only Admins can do this!");
        _;
    }
    constructor(
        string memory _companyName,
        string memory _logoIpfsUrl
    ) {
        admins.push(msg.sender);
        // These will obviously be made into parameters
        companyName = _companyName;
        logoIpfsUrl = _logoIpfsUrl;
    }

    function addAdmin(address _newAdmin) external override onlyAdmin {
        admins.push(_newAdmin);
    }

    function getMakerName() external view override returns(string memory) {
        return companyName;
    }

    function getMakerLogoUri() external view override returns(string memory) {
        return logoIpfsUrl;
    }

    function getAdmin(uint256 _index) external view override returns(address) {
        return(admins[_index]);
    }

    function getAdminCount() external view override returns(uint256) {
        return admins.length;
    }

    function addMaker(address _address) external override onlyAdmin {
        contracts.push(_address);
    }

    function getMakers() external view override returns(address[] memory){
        return contracts;
    }

    function getMakersCount() external view override returns(uint256) {
        return contracts.length;
    }
}
