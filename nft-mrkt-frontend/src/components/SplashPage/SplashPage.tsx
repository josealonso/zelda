import React from 'react'
import { useOutletContext } from 'react-router-dom';
import "./splashPage.scss";

import BrowseCard from './Cards/BrowseCard';
import ConsumerCard from './Cards/ConsumerCard';
import ManufacturerCard from './Cards/ManufacturerCard';

function SplashPage() {

//   const [state, setState] = useOutletContext();


  return (
  <div className='splashcardwrapper'>
    <div className='pop'>
      <ManufacturerCard />
      <ConsumerCard />
      <BrowseCard />
    </div>
  </div>
  )
}

export default SplashPage