import React, { useEffect, useState } from 'react'
import "./browse.scss";
import StubBackendData from '../../../api/stubBackendData';
// import { NFTData } from '../../../api/BackendIf';
import ItemCard from './ItemCard';
import { NFTData } from '../../../api/BackendIf';

const Browse: React.FC = () => {

  let [nfts, setNfts] = useState<NFTData[]>([]);
  
  async function getNFT(str: string) {
    let backend = new StubBackendData();
    return await backend.getNFTsForSale(str);
  }

  useEffect(() => {
    async function getData() {
      let data: NFTData[] = await getNFT("string-test");
      setNfts(data);
    }
    getData();
  }, [])

  function log() {
    console.log(nfts.length)
  }

  return (
    <div className='browseWrapper'>
      <div className='browseBox'>
        <div className='navigation'>
          <h3 className='browseTitle'> Browse Items</h3>
          <button className='refreshButton' onClick={log}>Refresh</button>
        </div>
        <div className='itemCards'>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  )
}

export default Browse