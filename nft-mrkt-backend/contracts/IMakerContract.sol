//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


interface IMakerContract {

    function addAdmin(address _newAdmin) external;

    function getMakerName() external view returns(string memory);

    function getMakerLogoUri() external view returns(string memory);

    function getAdmin(uint256 _index) external view returns(address);

    function getAdminCount() external view returns(uint256);

    function addMaker(address _address) external;

    function getMakers() external view returns(address[] memory);

    function getMakersCount() external view returns(uint256);
}
