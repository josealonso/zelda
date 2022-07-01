import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.scss";
import { Token, GetInstance } from "../../../api/BackendIf";
import LineInfo from "./LineInfo/LineInfo";
import Header from "./Header";
import { userStore } from "../../../Store/userStore";

interface MainProps {
  chosenLine: string;
}

const Main: React.FC<MainProps> = ({ chosenLine }) => {
  const {user, setAddress} = userStore();
  const [name, setName] = useState<string | undefined>();
  const [makerAddr, setMakerAddr] = useState<string>();
  const [productUri, setProductUri] = useState<string>();
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [tokens, setTokens] = useState<Token[]>();

  useEffect(() => {
    async function setIsMaker() {
      const backend = GetInstance();
      const isMaker = await backend.getMaker(user.addrString)
      if(isMaker === false) {
        console.log("entered the false conditional")
        return
      } else {
        console.log("did not enter the false conditional")
        setAddress(user.addrString, true)
      }
    }
    setIsMaker();
  }, [loaded]);

  useEffect(() => {
    async function populate() {
      if (chosenLine) {
        const backend = GetInstance();
        const item = await backend.getCollectionData(chosenLine);
        if (item) {
          setName(item.productName);
          setMakerAddr(item.maker.makerAddress);
          setProductUri(item.productUri);
          setPrice(item.makerSalePrice.toNumber());
          setQuantity(item.numberProduced);
          setTokens(item.tokensMinted);
          setLoaded(true);
        }
      }
    }
    populate();
  }, [chosenLine]);

  const [fileImg, setFileImg] = useState<File | null>(null);
  const [imgHash, setImgHash] = useState<string>("");


  const sendFileToIPFS = async () => {
    // e.preventDefault() // Not sure what this does. Keeping in case of future bug

    if (!fileImg) {
      return;
    }
    console.log("We have found a file", fileImg);
    try {
      console.log("various variables", process.env);

      const api_key = process.env.REACT_APP_PINATA_API_KEY;
      const api_secret_key = process.env.REACT_APP_PINATA_API_SECRET_KEY;

      if (api_key != null && api_secret_key != null) {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: api_key,
            pinata_secret_api_key: api_secret_key,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        setImgHash(ImgHash);
        console.log("Img: ", ImgHash);
        //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      } else {
        console.log("API Keys not found");
      }
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };

  async function handleCreation() {
    if(name && fileImg) {
      await sendFileToIPFS();
      const backend = GetInstance();
      const response = await backend.addMaker(
        name,
        imgHash
      );
      console.log("Company Name: ", response.companyName)
      console.log("Company logoUrl: ", response.companyLogoUri);
      console.log("Company Contract Address: ", response.makerAddress);
      setAddress(user.addrString, true);
      console.log("isMaker: ", user.isMaker);
      return response;
    }
  }

  if (user.isMaker === true) {
    if(loaded === true) {
      return (
        <div className="mainWrapper">
          <div className="topMain">
            <Header
              productUri={productUri}
              chosenLine={chosenLine}
              name={name}
              price={price}
            />
          </div>
          <div className="bottomMain">
            <div className="items">
              {tokens?.map((i) => (
                <LineInfo
                  key={i.id.toString()}
                  i={i}
                  chosenLine={chosenLine}
                  productUri={productUri}
                />
              ))}
              <button
                onClick={() => console.log("isMaker: true, loaded: true")}
              >
                status
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mainWrapper">
          <div className="topMain">
            Thanks for creating your account! 
          </div>
          <div className="bottomMain">
            <div className="items">
              Please create a line to your left!
              <button onClick={() => console.log("isMaker: true, loaded: false ")}>status</button>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="mainWrapper">
        <div className="topMain">
          <div className="indexHeader">Welcome to your future company dashboard</div>
        </div>
        <div className="bottomMain">
          <form className="formWrapper">
            <div className="class">
              <label>
                {" "}
                Company Name:&nbsp;
                <input
                  className="rightAlign"
                  placeholder="Wonka Industries"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </label>
              <label>
                {" "}
                Company Logo:&nbsp;&nbsp;
                <input
                  className="rightAlign"
                  type="file"
                  onChange={(e) =>
                    setFileImg(e.target.files ? e.target.files[0] : null)
                  }
                  required
                />
              </label>
            </div>
          </form>
          <div className="actions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => handleCreation()}>Create your account</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
