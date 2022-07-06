import React, { useEffect, useState } from "react";
import "./main.scss";
import { FinalToken, GetInstance } from "../../../api/BackendIf";
import LineInfo from "./LineInfo/LineInfo";
import Header from "./Header";
import NotFoundImg from "../../Assets/Logo.png";

interface MainProps {
    chosenLine: string
}

const Main: React.FC<MainProps> = ({ chosenLine }) => {

  const [name, setName] = useState<string>();
  const [makerAddr, setMakerAddr] = useState<string>();
  const [productUri, setProductUri] = useState<string>();
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] =useState<number>();
  const [loaded, setLoaded] = useState<boolean>();
  const [tokens, setTokens] = useState<FinalToken[]>();

  useEffect(() => {
    async function populate() {
        if(chosenLine) {
          const backend = GetInstance();
          const item = await backend.getCollectionData(chosenLine);
          if (item) {
            setName(item.productName);
            setMakerAddr(item.maker.userAddress);
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

  if (loaded === true) {
    return (
        <div className='mainWrapper'>
          <div className="topMain">
            <Header productUri={productUri?.startsWith("http") ? productUri : NotFoundImg} chosenLine={chosenLine} name={name} price={price} />
          </div>
          <div className="bottomMain">
            <div className='items'>
                { tokens?.map((i) => (
                    <LineInfo key={i.id.toString()} i={i} chosenLine={chosenLine} productUri={productUri} />
                ))}
            </div>
          </div>
        </div>
    )
  } else {
    return (
      <div className='mainWrapper'>
          <div className="topMain">
            <div className="indexHeader">
              Welcome to your company dashboard
            </div>
          </div>
          <div className="bottomMain">
            <div className='items'>
              <div className="indexMain">
                Please choose a Product Line to the left to get started
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Main
