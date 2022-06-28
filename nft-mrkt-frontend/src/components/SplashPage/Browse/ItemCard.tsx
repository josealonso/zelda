import { BigNumber, ethers } from 'ethers';
import React, { useEffect } from 'react';
import GitHubLogo from "../../Assets/GitHubLogo.png";
import stubBackendData from "../../../api/stubBackendData";
import { GetInstance } from "../../../api/BackendIf";
import { Link } from 'react-router-dom';
import { itemStore } from "../../../Store/ItemStore";

interface ItemCardProps {
  i: {
    productName: string
    address: string
    metadata: string
    tokenId: ethers.BigNumber
    ownerAddress: string
    image: string
    price: ethers.BigNumber
  }
  // ownerAddress: string
  // contractAddress: string
  // tokenId: ethers.BigNumber
  // image: string
  // _price: ethers.BigNumber
}

const ItemCard: React.FC<ItemCardProps> = ({i}) => {

  const {item, setItem} = itemStore();
  const price = i.price.toNumber();

  async function purchase(_address: string, _token: ethers.BigNumber) {
    const backend = GetInstance();
    const response = backend.buyNFT(_address, _token)
    console.log(response);
  }

  return (
    <div className='itemCardWrapper'>
        <img src={i.image} alt="placeholder img"></img>
        <div className='data'>
            <span className='owner title'>Owner:</span>
            <span className='info ownerinfo'>{i.ownerAddress}</span>
            <span className='price title'>Price:</span>
            <span className='info priceinfo'>{price} ether</span>
            <button className='purchase title' onClick={() => purchase(i.address, i.tokenId)}>Purchase</button>
            <Link onClick={() => setItem(i.address, i.tokenId.toString(), false, i.price.toNumber(), i.productName, i.image)} to="/itemDetail">View details</Link>
            {/* NEED TO ADD: FOR SALE,  */}
        </div>
    </div>
  )
}

export default ItemCard
