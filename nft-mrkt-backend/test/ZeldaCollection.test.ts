import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, BigNumberish } from "ethers";
import hre, { ethers } from "hardhat";
import { it } from "mocha";
import { ZeldaCollection__factory, ZeldaCollection } from "../typechain";

export const COLLECTION_METADATA = "/ipfs/QmPJ97MiYZngyNcJTp8VWa97KwtELSPyUzZnz1WuVZM7qy/";
const MY_ADDRESS = "0xFE2de2924c17C5A5E351E5fD13E2657836716BdD";
// const COLLECTION_NAME = "ZeldaNFTs";  // these two values are the same for any collection
// const COLLECTION_SYMBOL = "ZFTs";
export const COLLECTION_MAX_NUM_OF_ITEMS = 40;
export const COLLECTION_PRODUCT_NAME = "Tables";
export const COLLECTION_MAKER_ADDRESS = MY_ADDRESS;

// 1 ether = 10**18 wei
const toWei = (num: Number) => ethers.utils.parseEther(num.toString());
const fromWei = (num: BigNumberish) => ethers.utils.formatEther(num);

describe("ZeldaCollection", function () {
    let NFTCollection: ZeldaCollection__factory;
    let nftCollection: ZeldaCollection;
    let nftCollection2: ZeldaCollection;
    let nftCollection3: ZeldaCollection;
    // let NFTMarketplace: FinalMarketplace__factory;
    // let nftMarketplace: FinalMarketplace;
    let feePercent = 1;    // 1% fees
    let deployer: SignerWithAddress;
    let client: SignerWithAddress;
    let client2: SignerWithAddress;
    let maker: SignerWithAddress;
    const WHALE = "0x5f793AbBd751f1Ac5B0F95f3C3D117E5Fd218c41";
    let itemZero: any;

    beforeEach(async function () {
        // get signers
        [deployer, client, client2, maker] = await ethers.getSigners();
        // get contract factories
        NFTCollection = await ethers.getContractFactory("ZeldaCollection");
        nftCollection = await NFTCollection.deploy(COLLECTION_METADATA, COLLECTION_PRODUCT_NAME,
            ethers.BigNumber.from(COLLECTION_MAX_NUM_OF_ITEMS), COLLECTION_MAKER_ADDRESS);
        // nftCollection2 = await NFTCollection.deploy(NAME2, SYMBOL2, ethers.BigNumber.from(MAX_NUM_OF_TOKENS), "productName", maker.address);
        // nftCollection3 = await NFTCollection.deploy(NAME3, SYMBOL3, ethers.BigNumber.from(MAX_NUM_OF_TOKENS), "productName", maker.address);
    });
    it("should .....................", async () => {
        let name = await nftCollection.name();
        console.log("This is the token name: ", name);
        expect(name).to.equal("ZeldaNFTs");
        expect(await nftCollection.baseTokenURI()).to.equal(COLLECTION_METADATA);
        await nftCollection.mintForMarketplace(30);
        expect(await nftCollection.totalSupply()).to.equal(30);
    })
})