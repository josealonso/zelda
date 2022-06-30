//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

interface Maker {

    function addAdmin(address _newAdmin) external;

    function getAdmin(uint256 _index) external view returns(address);

    function getAdminCount() external view returns(uint256);

    function addContract(address _address) external;

    function getContractCount() external view returns(uint256);
}
