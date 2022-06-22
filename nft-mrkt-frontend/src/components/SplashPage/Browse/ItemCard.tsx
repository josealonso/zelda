import { BigNumber, ethers } from 'ethers';
import React from 'react';
import GitHubLogo from "../../Assets/GitHubLogo.png";

interface Props {
  address: string
  _price: ethers.BigNumber
  date: string
}

const ItemCard: React.FC<Props> = ({address, _price, date}) => {
  
  const price = ethers.utils.formatEther(_price);

  return (
    <div className='itemCardWrapper'>
        <img src={GitHubLogo} alt="placeholder img"></img>
        <div className='data'>
            <span className='owner title'>Owner:</span>
            <span className='info ownerinfo'>{address}</span>
            <span className='price title'>Price:</span>
            <span className='info priceinfo'>{price}</span>
            <span className='enddate title'>Auction Ends:</span>
            <span className='info enddateinfo'>{date}</span>
        </div>
    </div>
  )
}

export default ItemCard