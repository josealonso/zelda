import React, { useEffect, useState } from 'react'
import "./browse.scss";
import { GetInstance, NFTData } from "../../../api/BackendIf";
import ItemCard from './ItemCard';

const Browse: React.FC = () => {

  let [nfts, setNfts] = useState<NFTData[]>([]);
  const [loadingState, setLoadingState] = useState('not-loaded')

  async function getNFT() {
    let backend = GetInstance();
    return await backend.getNFTsForSale();
  }

  useEffect(() => {
    loadNfts();
  }, [])

  async function loadNfts() {
    let data: NFTData[] = await getNFT();
    setNfts(data);
    setLoadingState('loaded')
  }

  function log(): void {
    console.log(nfts)
  }

  return (
    <div className='browseWrapper'>
      <div className='browseBox'>
        <div className='navigation'>
          <h3 className='browseTitle'> Browse Items</h3>
          {/* <button className='refreshButton' onClick={log}>Refresh</button> */}
        </div>
        <div className='itemCards'>
          {
            nfts.map(i => (
              <ItemCard key={i.address} ownerAddress={i.ownerAddress} contractAddress={i.address} tokenId={i.tokenId} image={i.image} _price={i.price} />
            ))
          }
          {/* <ItemCard owner={"owwwner"} price={"100"} date={'12'}/> */}
        </div>
      </div>
    </div>
  )
}

export default Browse
