import React, { useEffect, useState } from 'react'
import "./browse.scss";
import StubBackendData from '../../../api/stubBackendData';
import { NFTData } from '../../../api/BackendIf';
import ItemCard from './ItemCard';

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

    const items = await Promise.all(data.map(async i => {
      const address = i.address
      const metadata = i.metadata
      const tokenId = i.tokenId
      const ownerAddress = i.ownerAddress
      const image = i.image
      const price = i.price
      
      let item: NFTData = {
        address,
        metadata,
        tokenId,
        ownerAddress,
        image,
        price,
      }
      return item
    }))

    setNfts(items);
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
          <button className='refreshButton' onClick={log}>Refresh</button>
        </div>
        <div className='itemCards'>
          {
            nfts.map(i => (
              <ItemCard key={i.address} address={i.ownerAddress} _price={i.price} date={i.metadata}/>
            ))
          }
          {/* <ItemCard owner={"owwwner"} price={"100"} date={'12'}/> */}
        </div>
      </div>
    </div>
  )
}

export default Browse