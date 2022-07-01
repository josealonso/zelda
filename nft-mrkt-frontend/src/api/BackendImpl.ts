import axios from "axios";
import { BigNumber, ethers } from "ethers";
import { BackendAPI, Maker, NFTContract, Token } from "./BackendIf";
import Web3Modal from "web3modal";
import MarketplaceContractArtifact from "../artifacts/contracts/StubNFTMarketplaceIf.sol/StubNFTMarketplaceIf.json";
import FinalMarketplaceArtifact from "../artifacts/contracts/FinalMarketplace.sol/FinalMarketplace.json";
import MakerContractArtifact from "../artifacts/contracts/StubMaker.sol/StubMaker.json";
import NFTCollection from "../artifacts/contracts/FinalCollection.sol/NFTCollection.json";
import MakerArtifact from "../artifacts/contracts/Maker.sol/Maker.json";
import {
  StubMaker,
  StubNFTMarketplaceImpl,
  Maker__factory,
} from "../typechain";

const COVALENT_CHAIN_ID = 80001
const MAX_TOKENS = 999
const COMPANY_NAME = "My Company Name"
const COMPANY_LOGO = "https://picsum.photos/200"

export default class BackendAPIImpl implements BackendAPI {
  private readonly mpContractAddress: string = `${process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS}`; //
  private readonly network: string = "mumbai";

  providerFn: () => Promise<ethers.providers.JsonRpcProvider> = async () => {
    const web3Modal = new Web3Modal();
    return new ethers.providers.Web3Provider(await web3Modal.connect());
  };

  constructor(
    mpContractAddress?: string,
    providerFnOverride?: () => Promise<ethers.providers.JsonRpcProvider>
  ) {
    if (mpContractAddress) {
      this.mpContractAddress = mpContractAddress;
    } else {
      throw new Error("cannot get marketplace contract address");
    }
    if (providerFnOverride) {
      this.providerFn = providerFnOverride;
    }
  }

  async addMaker(
    companyName: string,
    logoIpfsUrl: string
  ): Promise<Maker> {
    const prov = await this.providerFn();
    const signer = prov.getSigner();
    const cf = new ethers.ContractFactory(
      MakerArtifact.abi,
      MakerArtifact.bytecode,
      signer
    ) as Maker__factory;
    const makerContract = await cf.deploy(companyName, logoIpfsUrl);
    return {
      network: prov.network.name,
      makerAddress: makerContract.address,
      companyName: await makerContract.getCompanyName(),
      companyLogoUri: await makerContract.getLogoUri(),
    };
  }

  async getMaker(): Promise<Maker | boolean> {
    const prov = await this.providerFn();
    const signer = prov.getSigner();
    const address = signer.getAddress();
    const marketPlaceContract = new ethers.Contract(
      this.mpContractAddress,
      FinalMarketplaceArtifact.abi,
      prov // prov because it is readonly
    );
    const _makerContract = marketPlaceContract.getMakerContractToAdmin(address);
    if(_makerContract === 0 || _makerContract === "0") {
        return false;
    } 
    const makerContract = new ethers.Contract(
      _makerContract,
      MakerContractArtifact.abi,
      prov // prov because it is readonly
    );
    const makerName = await makerContract.getCompanyName();
    const makerLogo = await makerContract.getLogoUri();
    return {
      network: prov.network.name,
      makerAddress: _makerContract,
      companyName: makerName,
      companyLogoUri: makerLogo,
    };
  }



  /**
   * Probably better to use covalent for this
   * @param nftContractAddress
   */
  async getCollectionData(
    nftContractAddress: string
  ): Promise<NFTContract> {
    const prov = await this.providerFn();
    const allData = await this.getNFTsForSale();
    let firstContract: NFTContract | null = null;
    if (allData) {
      const first = allData.find((i) => {
        return i.contract.contractAddress === nftContractAddress;
      });
      if (first) {
        firstContract = first.contract;
      }
    }
    if (!firstContract) {
      throw new Error("cannot get contract data");
    }

    const nftContract = new ethers.Contract(
      nftContractAddress,
      MakerContractArtifact.abi,
      prov
    ) as StubMaker;
    const currentMaxToken = await nftContract.tokenIds();
    let tokens: Token[] = [];
    for (let i = 1; i <= currentMaxToken.toNumber(); i++) {
      tokens.push({
        id: BigNumber.from(i),
        ownerAddress: (await nftContract.ownerOf(i)).toString(),
        contract: firstContract,
        forSale: false,
        salePrice: firstContract.makerSalePrice,
        minted: true,
      });
    }
    firstContract.tokensMinted = tokens;
    return firstContract;
  }

  async addCollectionContract(
    productName: string, //Product Line
    makerAddress: string, // Manufacturer address
    productImgUri: string, // Product Image
    productMetadata: string,
    makerSalePrice: BigNumber, // Price
    numberProduced: number // Max TokenId
  ): Promise<NFTContract> {
    if (productMetadata === "") {
      productMetadata = "test_product_meta";
    }
    if (productImgUri === "") {
      productImgUri = "test_image_uri";
    }

    const prov = await this.providerFn();
    const signer = await prov.getSigner();
    const address = signer.getAddress();

    const marketPlaceContract = new ethers.Contract(
      this.mpContractAddress,
      FinalMarketplaceArtifact.abi,
      prov // prov because it is readonly
    );
    const _makerContract = await marketPlaceContract.getMakerContractToAdmin(address);
    await _makerContract.wait();
    
    console.log("_makerContract: ", _makerContract);

    const makerContract = new ethers.Contract(
      _makerContract,
      MakerContractArtifact.abi,
      signer
    );

    const cf = new ethers.ContractFactory(
      NFTCollection.abi,
      NFTCollection.bytecode,
      signer
    );
    const NFTCollectionContract = await cf.deploy(
        "hardcoded company name",
        "sym", 
        numberProduced,
        productName,
        12,
        ""
    );
    const tx = await makerContract.addContract(NFTCollectionContract.address);
    await tx.wait();

    return {
      contractAddress: NFTCollectionContract.address,
      maker: {
        network: this.network,
        makerAddress: makerContract.address,
        companyName: await makerContract.getCompanyName(),
        companyLogoUri: await makerContract.getLogoUri(),
      },
      makerSalePrice: makerSalePrice,
      productUri: productImgUri,
      productName: productName,
      productMeta: productMetadata,
      numberProduced: numberProduced,
    };
  }

  /**
   * This function will call covalent's api, unlike most of the other functions
   * in this class. Ideally, this should be injected instead to support
   * testing or local development.
   * @param ownerAddress
   */
  async getUserNFTs(ownerAddress: string): Promise<Token[]> {
    let url = `https://api.covalenthq.com/v1/${COVALENT_CHAIN_ID}/address/${ownerAddress}/balances_v2/?format=JSON&nft=true&key=${process.env.REACT_APP_COVALENT_API_KEY}`;
    let response = await axios.get(url);
    let items = response.data["data"]["items"];
    return items
      .filter(function (i: any) {
        return i["supports_erc"].includes("erc721");
      })
      .flatMap(function (i: any) {
        if (!i.hasOwnProperty("nft_data")) {
          // eslint-disable-next-line array-callback-return
          return;
        }
        return i["nft_data"].map(function (j: any) {
          return {
            id: BigNumber,
            ownerAddress: ownerAddress,
            contract: {
              contractAddress: i["contract_address"],
              maker: {
                companyLogoUri: "",
                companyName: "",
                network: "",
                userAddress: "",
              },
              makerSalePrice: BigNumber.from(0),
              productUri: "",
              productName: "",
              productMeta: "",
              numberProduced: 0,
            },
            forSale: false,
            salePrice: BigNumber.from(0),
            minted: true,
          };
        });
      });
  }

  async buyNFT(
    nftContractAddress: string,
    tokenId: BigNumber
  ): Promise<BigNumber> {
    const prov = await this.providerFn();
    const signer = await prov.getSigner();
    const contract = new ethers.Contract(
      this.mpContractAddress,
      MarketplaceContractArtifact.abi,
      signer
    ) as StubNFTMarketplaceImpl;
    const price = await contract.getPrice(nftContractAddress);
    const response = await contract.buyItem(nftContractAddress, {
      value: price,
      gasLimit: 13000000,
    });
    const receipt = await response.wait();
    if (receipt.events) {
      const tokenID = parseInt(receipt.events[0]["topics"][3], 16);
      return BigNumber.from(tokenID);
    }
    throw new Error("canont get token id");
  }

  async changePrice(
    contractAddress: string,
    newPrice: Number
  ): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getMakerData(makerAddress: string): Promise<NFTContract[]> {
    const prov = await this.providerFn();
    const mpContract = new ethers.Contract(
      this.mpContractAddress,
      MarketplaceContractArtifact.abi,
      prov
    ) as StubNFTMarketplaceImpl;
    const response = await mpContract.getAllCollectionsForSale();
    return response.map((i) => {
      let t: NFTContract = {
        contractAddress: i.nftContractAddress,
        maker: {
          companyLogoUri: COMPANY_LOGO,
          companyName: COMPANY_NAME,
          network: this.network,
          makerAddress: i.makerAddress,
        },
        makerSalePrice: i.price,
        productUri: i.imageURI,
        productName: i.productName,
        productMeta: i.metadataURI,
        numberProduced: MAX_TOKENS,
      };
      return t;
    });
  }

  async getNFTsForSale(): Promise<Token[]> {
    const prov = await this.providerFn();
    const signer = await prov.getSigner();
    const mpContract = new ethers.Contract(
      this.mpContractAddress,
      MarketplaceContractArtifact.abi,
      signer
    ) as StubNFTMarketplaceImpl;
    const response = await mpContract.getAllCollectionsForSale();
    return response.map((i) => {
      let t: Token;
      t = {
        contract: {
          contractAddress: i.nftContractAddress,
          maker: {
            companyLogoUri: COMPANY_LOGO,
            companyName: COMPANY_NAME,
            network: this.network,
            makerAddress: i.makerAddress,
          },
          makerSalePrice: i.price,
          productUri: i.imageURI,
          productName: i.productName,
          productMeta: i.metadataURI,
          numberProduced: MAX_TOKENS,
        },
        forSale: true,
        id: BigNumber.from(0),
        minted: false,
        ownerAddress: i.makerAddress,
        salePrice: BigNumber.from(i.price),
      };
      return t;
    });
  }
}
