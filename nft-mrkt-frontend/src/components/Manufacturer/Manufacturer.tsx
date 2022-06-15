import React from 'react'
import "./manufacturer.scss";
import { useOutletContext } from "react-router-dom";


function Manufacturer() {

  const [state] = useOutletContext() as any;

  function writeAddress() {
    console.log(state?.polyAddr);
    console.log(state?.provider)
  }
  return (
    <div className='manufacturer'>
      <button onClick={writeAddress}>write address</button>
    </div>
  )
}

export default Manufacturer