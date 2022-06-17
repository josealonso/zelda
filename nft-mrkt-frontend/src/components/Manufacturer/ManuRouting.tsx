import React from 'react'
import "./manuRouting.scss";
import DepContract from './DepContract/DepContract';
import { Link } from 'react-router-dom';

function ManuRouting() {
  return (
    <div>
      <Link to="/DepContract" className='card depContract'>
        <h1 className='header'>I need to deploy a new contract</h1>
        <h5 className='instructions'>(Show em'!)</h5>
      </Link>
      <Link to="/MintToken" className='card depContract'>
        <h1 className='header'>I want to mint a new token</h1>
        <h5 className='instructions'>(Show em'!)</h5>
      </Link>
    </div>
  )
}

export default ManuRouting