import React from 'react'
import { Link } from 'react-router-dom';

function ManufacturerCard() {
  return (
    <Link to="/ManuRouting" className='card manufacturer'>
      <h1 className='header'>I want to list my items</h1>
      <h5 className='instructions'>(Either create a new NFT collection or add to an existing one)</h5>
    </Link>
  )
}

export default ManufacturerCard