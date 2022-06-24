import React, { useEffect, useState } from 'react';
import "./main.scss";
import StubBackendData from "../../../api/stubBackendData";
import TwitterLogo from "../../Assets/TwitterLogo.png";
import { tokenData } from '../../../api/BackendIf';
import LineInfo from "./LineInfo/LineInfo";


interface MainProps {
    chosenLine: string
}

const Main: React.FC<MainProps> = ({ chosenLine }) => {
  
  useEffect(() => {
    async function populate() {
        if(chosenLine) {
            const backend = new StubBackendData();
            const response = await backend.getCollectionData(chosenLine);
            const item = response[0];
            setName(item.productName);
            setMakerAddr(item.makerAddress);
            setProductUri(item.productUri);
            setPrice(item.price);
            setQuantity(item.numberProduced);
            setLoaded(true);
            setTokens(item.tokens)
        }
    }
    populate();
  }, [chosenLine]);

  const [name, setName] = useState<string>();
  const [makerAddr, setMakerAddr] = useState<string>();
  const [productUri, setProductUri] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [quantity, setQuantity] =useState<number>();
  const [loaded, setLoaded] = useState<boolean>();
  const [tokens, setTokens] = useState<tokenData[]>();


    function log(val: any) {
      console.log(typeof val)
  }

  if (loaded === true) {
    return (
        <div className='mainWrapper'>
            <div className='header'>
                <img src={TwitterLogo} className='productImg' alt="product"></img>
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