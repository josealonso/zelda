import React, { useEffect, useState } from "react";
import "./main.scss";
import { GetInstance, tokenData } from "../../../api/BackendIf";
import LineInfo from "./LineInfo/LineInfo";
import Header from "./Header";

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

  useEffect(() => {
    async function populate() {
        if(chosenLine) {
          const backend = GetInstance();
          const response = await backend.getCollectionData(chosenLine);
          if (response.length > 0) {
            const item = response[0];
            setName(item.productName);
            setMakerAddr(item.makerAddress);
            setProductUri(item.productUri);
            setPrice(item.price);
            setQuantity(item.numberProduced);
            setTokens(item.tokens);
            setLoaded(true);
          }
        }
    }
    populate();
  }, [chosenLine]);

  if (loaded === true) {
    return (
        <div className='mainWrapper'>
          <Header productUri={productUri} chosenLine={chosenLine} name={name} price={price} />
          <div className='items'>
              { tokens?.map((i) => (
                  <LineInfo key={i.tokenId.toString()} i={i} chosenLine={chosenLine} productUri={productUri} />
              ))}
          </div>
        </div>
    )
  } else {
    return (
      <div className='mainWrapper'>
          <div className='header'>
            Please select a product line to the left
          </div>
          <div className='items'>

          </div>
      </div>
      )
  }
}

export default Main
