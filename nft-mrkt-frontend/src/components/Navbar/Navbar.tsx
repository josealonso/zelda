import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Metamask from "../Assets/Metamask.svg";

import { useStore } from "../../userStore";
// import {JsonRpcSigner, Web3Provider} from "@ethersproject/providers";
// import { GeneralObject } from '../interfaces';

const { ethereum } = window as any;

const Navbar: React.FC = () => {

  const { user, setAddress } = useStore();
  const [dispAddr, setDispAddr] = useState<string>("");

  useEffect(() => {
    async function setInfo() {

    }
    setInfo();
  }, [user])

  function makeDispAddr(numAddr: string) {
    const strAddr = numAddr.toString();
      const first = strAddr.slice(0,4);
      const last = strAddr.slice(-4);
      const dispAddr = `${first}...${last}`;
      setDispAddr(dispAddr);
  }
 
  async function connectMM() {
    if(ethereum) {
      const web3Modal = new Web3Modal()
      const prov = new ethers.providers.Web3Provider(await web3Modal.connect())
      const signer = await prov.getSigner()
      const address = await signer.getAddress();
      // console.log("address is: ", address,);
      // console.log("Address is of type: ", typeof address);
      setAddress(address);
      makeDispAddr(address);
    }
  }

  return (
    <div className='navbar' id="navbar">
      <div className='left'>
        <Link to="/" className='title'> Our3 Marketplace </Link>
      </div>
      <div className='right'>
        <Link to="/consumer" className='consumerLink'> My Items </Link>
        {user?.addrString ? 
          <button className='connectMMBtn'>
            <img src={Metamask} alt="metamask logo" ></img>
            {dispAddr}
          </button> :
          <button className='connectMMBtn' onClick={connectMM}>Connect Wallet</button>
        }
      </div>
    </div>
  )
}

export default Navbar
