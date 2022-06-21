import React from 'react';
import GitHubLogo from "../../Assets/GitHubLogo.png";

function ItemCard() {
    
  return (
    <div className='itemCardWrapper'>
        <img src={GitHubLogo} alt="placeholder img"></img>
        <div className='data'>
            <span className='owner title'>Owner:</span>
            <span className='info ownerinfo'>test owner</span>
            <span className='price title'>Price:</span>
            <span className='info priceinfo'>test price</span>
            <span className='enddate title'>Auction Ends:</span>
            <span className='info enddateinfo'>Aug 5, 2022</span>
        </div>
    </div>
  )
}

export default ItemCard