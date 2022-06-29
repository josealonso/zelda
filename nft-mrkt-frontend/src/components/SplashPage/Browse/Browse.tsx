import React, { useEffect, useState } from 'react'
import "./browse.scss";
import { GetInstance, NFTData } from "../../../api/BackendIf";
import ItemCard from './ItemCard';
import "../splashPage.scss";
import { useLocation, useParams } from "react-router-dom";


export const USER_ADDRESS_PARAM = "userAddress"


const Browse: React.FC = () => {

  const params= useParams();
  const userAddress = params[USER_ADDRESS_PARAM]
  const locData =useLocation()
  const isConsumerPage = locData.pathname.startsWith("/consumer")
  let [nfts, setNfts] = useState<NFTData[]>([]);
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

  function log(): void {
    console.log(nfts)
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


// ownerAddress={i.ownerAddress} contractAddress={i.address} tokenId={i.tokenId} image={i.image} _price={i.price}
