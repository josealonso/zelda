import React, { useEffect, useState } from "react";
import "./main.scss";
import TwitterLogo from "../../Assets/TwitterLogo.png";
import { GetInstance, tokenData } from "../../../api/BackendIf";
import LineInfo from "./LineInfo/LineInfo";
import { ethers } from 'ethers';

interface MainProps {
    chosenLine: string
}

const Main: React.FC<MainProps> = ({ chosenLine }) => {
  
  const [name, setName] = useState<string>();
  const [makerAddr, setMakerAddr] = useState<string>();
  const [productUri, setProductUri] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [quantity, setQuantity] =useState<number>();
  const [loaded, setLoaded] = useState<boolean>();
  const [tokens, setTokens] = useState<tokenData[]>();
  const [QRData, setQRData] = useState<string>();

  useEffect(() => {
    async function populate() {
        if(chosenLine) {
            const backend = GetInstance();
            const response = await backend.getCollectionData(chosenLine);
            const item = response[0];
            setName(item.productName);
            setMakerAddr(item.makerAddress);
            setProductUri(item.productUri);
            setPrice(item.price);
            setQuantity(item.numberProduced);
            setTokens(item.tokens)
            setLoaded(true);
        }
    }
    populate();
  }, [chosenLine]);

  if (loaded === true) {
    return (
        <div className='mainWrapper'>
            <div className='header'>
                <img src={productUri} className='productImg' alt="product"></img>
                <div className='headerWrapper'>
                  <span className='headerTitle'>Address of line:</span>
                  <span className='headerInfo'>{chosenLine}</span>
                </div>
                <div className='headerWrapper'>
                  <span className='headerTitle'>Name of line:</span>
                  <span className='headerInfo'>{name}</span>
                </div>
                <div className='headerWrapper'>
                  <span className='headerTitle'>Price of Items</span>
                  <span className='headerInfo'>{price}</span>
                </div>
            </div>
            <div className='items'>
                <div className='tempInstructions'>Please click Title to see more info</div>
                { tokens?.map((i) => (
                    <LineInfo i={i} />
                ))}
            </div>
        </div>
    )
  } else {
    return (
      <div className='mainWrapper'>
          <div className='header'>

          </div>
          <div className='items'>

          </div>
      </div>
      )
  }
}

export default Main
