import React from 'react'
import { Link } from 'react-router-dom';

function BrowseCard() {
  return (
    <Link to="/browse" className='card browse'>
      <h1 className='header'>I want to browse NFT's</h1>
      <h5 className='instructions'>(Show em'!)</h5>
    </Link>
  )
}

export default BrowseCard