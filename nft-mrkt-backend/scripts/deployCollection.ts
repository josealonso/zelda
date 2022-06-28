import { ethers } from "hardhat";
import { writeFileSync } from "fs";

async function main() {
  // URL from where we can extract the metadata for the NFTs
  const metadataURL = "ipfs://QmZc7jp32oZNbaSGBLbMib4GU5YnGesvudHcE3o7EVqdjs/";
  const MY_ADDRESS = "0xFE2de2924c17C5A5E351E5fD13E2657836716BdD";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so punksContract here is a factory for instances of our Punks contract.
  */
  const marketplaceContract = await ethers.getContractFactory("NFTCollection");

  // deploy the contract
  // const deployedMarketplaceContract = await marketplaceContract.deploy(metadataURL);
  const deployedMarketplaceContract = await marketplaceContract.deploy("Wood Tables", "WTB", 40, "Wood Tables", MY_ADDRESS);
  await deployedMarketplaceContract.deployed();
  // print the address of the deployed contract
  console.log("Marketplace Contract Address:", deployedMarketplaceContract.address);

  writeFileSync('../frontend/config.ts', `export const marketplaceAddress = "${deployedMarketplaceContract.address}"
  `);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
