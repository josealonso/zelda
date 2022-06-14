import React from 'react'
import { Link } from 'react-router-dom';

function ConsumerCard() {
  return (
    <Link to="/consumer" className='card consumer'>
      <h1 className='header'>I want to buy or sell NFT's</h1>
      <h5 className='instructions'>(I'm not a business)</h5>
    </Link>
  )
}

export default ConsumerCard