import { GetInstance, NFTData } from "../../../api/BackendIf";
import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';
import "../splashPage.scss";
import "./browse.scss";

export const USER_ADDRESS_PARAM = "userAddress"

const Browse: React.FC = () => {

  const params= useParams();
  const userAddress = params[USER_ADDRESS_PARAM]
  const locData = useLocation()
  const isConsumerPage = locData.pathname.startsWith("/consumer")
  const [nfts, setNfts] = useState<NFTData[]>([]);
  const [loadingState, setLoadingState] = useState("loading")

  async function getNFT() {
    let backend = GetInstance();
    if (userAddress) {
      return await backend.getUserNFTs(userAddress);
    }
    return await backend.getNFTsForSale();
  }

  useEffect(() => {
    loadNfts();
  }, [])

  async function loadNfts() {
    let data: NFTData[] = await getNFT();
    setNfts(data);
    setLoadingState("Loaded")
    if (data.length) {
      setLoadingState("No items found :(")
    }
  }

  return (
    <div className='splashcardwrapper'>
    <div className='browseWrapper'>
      <div className='browseBox'>
        <div className='navigation'>
          <h3 className='browseTitle'>{ isConsumerPage ? "My Items" : "Browse Items"}</h3>
        </div>
        <div className='itemCards'>
          {nfts.length > 0 ?
            nfts.map(i => (
              <ItemCard key={i.address} i={i} forSale={!isConsumerPage}/>
            )) : loadingState
          }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Browse