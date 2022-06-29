import { itemStore } from "../../../Store/ItemStore";
import { GetInstance } from "../../../api/BackendIf";
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import React from 'react';

interface ItemCardProps {
  i: {
    productName: string
    address: string
    metadata: string
    tokenId: ethers.BigNumber
    ownerAddress: string
    image: string
    price: ethers.BigNumber
  },
  forSale: boolean
}

const ItemCard: React.FC<ItemCardProps> = ({i, forSale}) => {

  const {item, setItem} = itemStore();
  const price = i.price.toNumber();

  async function purchase(_address: string, _token: ethers.BigNumber) {
    const backend = GetInstance();
    const response = backend.buyNFT(_address, _token)
    console.log(response);
  }

  return (
    <div className='itemCardWrapper'>
      <div className="left">
        <img src={i.image} alt="placeholder img"></img>
        {forSale && <button className='purchase title' onClick={() => purchase(i.address, i.tokenId)}>Purchase</button>}
      </div>
      <div className="right">
        <div className='data'>
            <span className='name title'>Name:</span>
            <span className='info nameinfo'>{i.productName}</span>
            <span className='owner title'>Owner:</span>
            <span className='info ownerinfo'>{i.ownerAddress}</span>
            <span className='price title'>Price:</span>
            <span className='info priceinfo'>{price} ether</span>
            <Link className="detailLink" onClick={() => setItem(i.address, i.tokenId.toString(), false, i.price.toNumber(), i.productName, i.image)} to="/itemDetail">View details</Link>
            {/* NEED TO ADD: FOR SALE,  */}
        </div>
      </div>
    </div>
  )
}

export default ItemCard
