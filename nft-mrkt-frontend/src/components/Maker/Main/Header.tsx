import React from 'react';
import "./main.scss";

interface HeaderProps {
    productUri: string | undefined
    chosenLine: any | undefined//UPDATE
    name: string | undefined
    price: number | undefined
}

const Header: React.FC<HeaderProps> = ({ productUri, chosenLine, name, price }) => {
  return (
    <div className='header'>
        <div className='top'>
          <div className='headerWrapper'>
            <img src={productUri} className='productImg' alt="product"></img>
          </div>
            <div className='headerWrapper'>
                <span className='headerTitle'>Address of line:</span>
                <span className='headerInfo'>{chosenLine}</span>
            </div>
            <div className='headerWrapper'>
                <span className='headerTitle'>Name of line:</span>
                <span className='headerInfo'>{name}</span>
            </div>
            <div className='headerWrapper'>
                <span className='headerTitle'>Price of Items:</span>
                <span className='headerInfo'>{price}</span>
            </div>
        </div>
    </div>
  )
}

export default Header
