import BackendAPIImpl from "../../nft-mrkt-frontend/src/api/BackendImpl";
import {
  StubMaker,
  StubNFTMarketplaceIf,
} from "../../nft-mrkt-frontend/src/typechain";
import MarketplaceContractArtifact from "../../nft-mrkt-frontend/src/artifacts/contracts/StubNFTMarketplaceIf.sol/StubNFTMarketplaceIf.json";
import MarketplaceContractImplArtifact from "../../nft-mrkt-frontend/src/artifacts/contracts/StubNFTMarketplaceImpl.sol/StubNFTMarketplaceImpl.json";
import StubMakerArtifact from "../../nft-mrkt-frontend/src/artifacts/contracts/StubMaker.sol/StubMaker.json";

import { ethers as hhEthers } from "hardhat";
import { expect } from "chai";
import { BigNumber, ethers } from "ethers";

describe.only("backend test api", async () => {
  it("run all", async () => {
    const provider = hhEthers.provider;
    expect(provider).to.exist;

    const mpSigner = provider.getSigner(1);
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
    const api = new BackendAPIImpl(mpContract.address, async () => {
      return hhEthers.provider;
    });
    // add manu contract
    const manuSigner = provider.getSigner(2);
    const createResponse = await api.addCollectionContract(
      "testname",
      await manuSigner.getAddress(),
      "test_uri",
      "test_uri",
      BigNumber.from(11),
      12
    );
    const nftContractAddress = createResponse.contractAddress;
    expect(createResponse).to.exist;
    const forSale = await api.getNFTsForSale();
    expect(forSale).have.lengthOf(1);
    expect(forSale[0].contract.contractAddress).to.equals(nftContractAddress);
    expect(forSale[0].ownerAddress).to.equals(await manuSigner.getAddress());

    const buyerSigner = await provider.getSigner(0);

    // buy nft
    const buyResponse = await api.buyNFT(nftContractAddress, BigNumber.from(1));
    expect(buyResponse).to.equals(BigNumber.from(1));

    // get nft contract
    const nftContract = new ethers.Contract(
      nftContractAddress,
      StubMakerArtifact.abi,
      provider
    ) as StubMaker;
    const ownerOfNewlyMintedNFT = await nftContract.ownerOf(1);
    expect(ownerOfNewlyMintedNFT).to.equals(await buyerSigner.getAddress());
  });
});
