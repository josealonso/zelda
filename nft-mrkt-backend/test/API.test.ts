import BackendAPIImpl from "../../nft-mrkt-frontend/src/api/BackendImpl";
import { StubMaker, StubNFTMarketplaceIf } from "../../nft-mrkt-frontend/src/typechain";
import MarketplaceContractArtifact
  from "../../nft-mrkt-frontend/src/artifacts/contracts/StubNFTMarketplaceIf.sol/StubNFTMarketplaceIf.json";
import MarketplaceContractImplArtifact
  from "../../nft-mrkt-frontend/src/artifacts/contracts/StubNFTMarketplaceImpl.sol/StubNFTMarketplaceImpl.json";
import StubMakerArtifact from "../../nft-mrkt-frontend/src/artifacts/contracts/StubMaker.sol/StubMaker.json";

import { ethers as hhEthers } from "hardhat";
import { expect } from "chai";
import { BigNumber, ethers } from "ethers";
import { BackendAPI, Maker } from "../../nft-mrkt-frontend/src/api/BackendIf";
import { JsonRpcSigner } from "@ethersproject/providers/src.ts/json-rpc-provider";
import { step } from "mocha-steps";

describe.only("backend test api", async () => {

  let api: BackendAPI;
  let manuSigner: JsonRpcSigner;
  let mpSigner: JsonRpcSigner;
  let buyerSigner: JsonRpcSigner;
  let nftContractAddress: string;

  before(async function () {
    const provider = hhEthers.provider;
    expect(provider).to.exist;

    mpSigner = provider.getSigner(1);
    let mpContractFactory = new ethers.ContractFactory(
      MarketplaceContractArtifact.abi,
      MarketplaceContractImplArtifact.bytecode,
      mpSigner
    );
    mpContractFactory = mpContractFactory.connect(mpSigner);
    expect(mpContractFactory).to.exist;

    // deploy marketplace contract
    const mpContract =
      (await mpContractFactory.deploy()) as StubNFTMarketplaceIf;
    expect(mpContract).to.exist;
    api = new BackendAPIImpl(mpContract.address, async () => {
      return hhEthers.provider;
    });
    // add manu contract
    manuSigner = provider.getSigner(2);
    buyerSigner = await provider.getSigner(0);
  });

  step("add collection", async () => {
    const createResponse = await api.addCollectionContract(
      "testname",
      await manuSigner.getAddress(),
      "test_uri",
      "test_uri",
      BigNumber.from(11),
      12
    );
    nftContractAddress = createResponse.contractAddress;
    expect(createResponse).to.exist;
    const forSale = await api.getNFTsForSale();
    expect(forSale).have.lengthOf(1);
    expect(forSale[0].contract.contractAddress).to.equals(nftContractAddress);
    expect(forSale[0].ownerAddress).to.equals(await manuSigner.getAddress());

    // buy nft
    const buyResponse = await api.buyNFT(nftContractAddress, BigNumber.from(1));
    expect(buyResponse).to.equals(BigNumber.from(1));

    // get nft contract
    const nftContract = new ethers.Contract(
      nftContractAddress,
      StubMakerArtifact.abi,
      buyerSigner
    ) as StubMaker;
    const ownerOfNewlyMintedNFT = await nftContract.ownerOf(1);
    expect(ownerOfNewlyMintedNFT).to.equals(await buyerSigner.getAddress());
  });
  step("add maker", async () => {
    await api.addMaker("test_name", "test_logo");
    const response = await api.getMaker()
    let expected: Maker = {
      network: "unknown",
      makerAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      companyName: "test_name",
      companyLogoUri: "test_logo",
      userAddress: "",
    };
    expect(response).to.eql(expected);
  });
  step("get maker address", async () => {
    const response = await api.getContractOwner(nftContractAddress);
    // not implemented yet
    expect(response).to.equal("");
  });
  step("maker mint", async () => {
    const response = await api.getContractOwner(nftContractAddress);
    // not implemented yet
    expect(response).to.equal("");
  });
});
