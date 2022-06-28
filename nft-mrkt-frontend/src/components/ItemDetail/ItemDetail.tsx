import React from 'react';
import "./itemDetail.scss";
import "../Maker/Main/main.scss";
import Header from "../Maker/Main/Header";
import { itemStore } from "../../Store/ItemStore";


interface ItemDetailProps {

}

const ItemDetail: React.FC<ItemDetailProps> = () => {

  const {item, setItem} = itemStore();

  return (
    <div className='mainWrapper'>
        <Header productUri={item.contractAddress} chosenLine={item.contractAddress} name={item.name} price={item.price} />
        <div className='body'>
            {/* 
              TODO: Fill in all information of the item. It doesn't make sense to work on this until we know
              1) what we want to display
              2) How we can get that information

              I have passed the contract address and the token Id. SO it might make sense to make a query to the chain
              and whatever other source were storing our metada in.
            */}
        </div>
    </div>
  )
}

export default ItemDetail