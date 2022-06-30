import { expect } from "chai";
import { ethers } from "hardhat";

describe.only("Maker Contract", function () {
  let owner: any;
  let user1: any;
  let user2: any;
  let MakerContract: any;
  let OzContract: any;
  let OzContract2: any;

  before(async function () {
    [owner, user1, user2] = await ethers.getSigners();

    const MakerContract_ = await ethers.getContractFactory("Maker");
    MakerContract = await MakerContract_.deploy();
    await MakerContract.deployed();
  });
  describe("Admins", async function () {
    it("should have one admin", async function () {
      const adminCount = await MakerContract.getAdminCount();
      await expect(adminCount).to.equal(1);
    });
    it("should have added an admin", async function () {
      // eslint-disable-next-line prettier/prettier
      const tx = await MakerContract.connect(owner).addAdmin(user1.address);
      await tx.wait();
      const adminCount = await MakerContract.getAdminCount();
      await expect(adminCount).to.equal(2);
    });
  });
  describe("contracts", async function () {
    it("should mint an NFT contract", async function () {
      const OzContract_ = await ethers.getContractFactory("OzNFT");
      OzContract = await OzContract_.connect(user1).deploy(
        "WonkaChocolate",
        "WNKAC"
      );
      await OzContract.deployed();
    });
    it("should add that NFT contract to the Maker's db", async function () {
      const contractAddress = OzContract.address;
      const tx2 = await MakerContract.addContract(contractAddress);
      await tx2.wait();
      const contractCount = await MakerContract.getContractCount();
      await expect(contractCount).to.equal(1);
    });
    it("should mint another NFT contract", async function () {
      const OzContract_ = await ethers.getContractFactory("OzNFT");
      OzContract2 = await OzContract_.connect(user1).deploy(
        "WonkaGum",
        "WNKAG"
      );
      await OzContract2.deployed();
    });
    it("should add the second NFT contract to the Maker's db", async function () {
      const contract2Address = OzContract2.address;
      const tx3 = await MakerContract.addContract(contract2Address);
      await tx3.wait();
      const contractCount = await MakerContract.getContractCount();
      await expect(contractCount).to.equal(2);
    });
  });
  describe("minting and transfer", async function () {
    it("a buyer should be able to lazy mint from contract 2", async function () {
      const tx4 = await OzContract2.connect(user2).mintToken(user2.address);
      await tx4.wait();
      const user2Contract2Balance = await OzContract2.balanceOf(user2.address);
      await expect(user2Contract2Balance).to.equal(1);
    });
    it("a buyer should be able to transfer that token", async function () {
      const tx5 = await OzContract2.connect(user2).transfer(user1.address, 1);
      await tx5.wait();
      const user2Contract2Balance = await OzContract2.balanceOf(user2.address);
      const user1Contract2Balance = await OzContract2.balanceOf(user1.address);
      await expect(user2Contract2Balance).to.equal(0);
      await expect(user1Contract2Balance).to.equal(1);
    });
  });
});
