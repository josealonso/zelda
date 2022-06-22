import React, { useEffect, useState } from 'react'
import "./browse.scss";
import StubBackendData from '../../../api/stubBackendData';
// import { NFTData } from '../../../api/BackendIf';
import ItemCard from './ItemCard';
import { NFTData } from '../../../api/BackendIf';
import { ethers } from 'ethers';

const Browse: React.FC = () => {

  let [nfts, setNfts] = useState<NFTData[]>([]);
  const [loadingState, setLoadingState] = useState('not-loaded')
  
  async function getNFT(str: string) {
    let backend = new StubBackendData();
    return await backend.getNFTsForSale(str);
  }

  useEffect(() => {
    loadNfts();
  }, [])

  async function loadNfts() {
    let data: NFTData[] = await getNFT("string-test");
    setNfts(data);

    setLoadingState('loaded')
  }

  function log(): void {
    console.log(nfts.length)
  }

  if (loadingState === 'loaded' && !nfts.length) return (<h1>No NFTs listed</h1>)
  return (
    <div className='browseWrapper'>
      <div className='browseBox'>
        <div className='navigation'>
          <h3 className='browseTitle'> Browse Items</h3>
          <button className='refreshButton' onClick={log}>Refresh</button>
        </div>
        <div className='itemCards'>
          <ItemCard owner={"owwwner"} price={"100"} date={'12'}/>
        </div>
      </div>
    </div>
  )
}

export default Browse