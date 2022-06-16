import React from 'react'
import "./manufacturer.scss";
// import { useOutletContext } from "react-router-dom";
import { useStore } from "../../userStore";


function Manufacturer() {

  // const [state] = useOutletContext() as any;
  const { user } = useStore();

  function writeAddress() {
    console.log(user)
  }
  return (
    <div className='manufacturer'>
      <button onClick={writeAddress}>write address</button>
    </div>
  )
}

export default Manufacturer