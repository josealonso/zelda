import { BigNumber, ethers } from 'ethers';
import React, { useEffect } from 'react';
import GitHubLogo from "../../Assets/GitHubLogo.png";
import stubBackendData from "../../../api/stubBackendData";

interface Props {
  ownerAddress: string
  contractAddress: string
  tokenId: ethers.BigNumber
  image: string
  _price: ethers.BigNumber
}

const ItemCard: React.FC<Props> = ({ownerAddress, contractAddress, tokenId, image, _price}) => {
  
  const price = _price.toNumber();
  
  async function purchase(_address: string, _token: ethers.BigNumber) {
    const backend = new stubBackendData();
    const response = backend.buyNFT(_address, _token)
    console.log(response);
  }

  return (
    <div className='itemCardWrapper'>
        <img src={image} alt="placeholder img"></img>
        <div className='data'>
            <span className='owner title'>Owner:</span>
            <span className='info ownerinfo'>{ownerAddress}</span>
            <span className='price title'>Price:</span>
            <span className='info priceinfo'>{price} ether</span>
            <button className='purchase title' onClick={() => purchase(contractAddress, tokenId)}>Purchase</button>
        </div>
    </div>
  )
}

export default ItemCard