import React from 'react'
import { useOutletContext } from 'react-router-dom';
import "./splashPage.scss";
import Browse from './Browse/Browse';

function SplashPage() {

//   const [state, setState] = useOutletContext();


  return (
  <div className='splashcardwrapper'>
    <Browse />
  </div>
  )
}

export default SplashPage