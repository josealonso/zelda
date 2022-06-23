import React, { useEffect, useState } from 'react';
import "./main.scss";
import StubBackendData from "../../../api/stubBackendData";
import TwitterLogo from "../../Assets/TwitterLogo.png";
import { tokenData } from '../../../api/BackendIf';


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
        <div>
            <div className='header'>
                <img src={TwitterLogo} className='productImg' alt="product"></img>
                <span className='lineAddress'>{chosenLine}</span>
                <span className='lineName'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <div className='items'>
                { tokens?.map((i) => (
                    <div key={i.name} className="token x">{i.name}</div>
                ))}
            </div>
            <button onClick={() => log(tokens)}>sdfsdfasdf</button>
        </div>
    )
  } else {
    return (<div>No Product Chosen</div>)
  }
}

export default Main