import { MakeDispAddr } from "../../models/Address";
import React, { useState } from 'react'
import { userStore } from "../../Store/userStore";
import Metamask from "../Assets/Metamask.svg";
import { Link } from "react-router-dom";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import './navbar.scss'

const { ethereum } = window as any;

const Navbar: React.FC = () => {

  const { user, setAddress } = userStore();
  const [dispAddr, setDispAddr] = useState<string>("");

  async function connectMM() {
    if(ethereum) {
      const web3Modal = new Web3Modal()
      const prov = new ethers.providers.Web3Provider(await web3Modal.connect())
      const signer = await prov.getSigner()
      const address = await signer.getAddress();
      setAddress(address);
      setDispAddr(MakeDispAddr(address))
    }
  }

  return (
    <div className='navbar' id="navbar">
      <div className='left'>
        <Link to="/" className='title'> Our3 Marketplace </Link>
      </div>
      <div className='right'>
        <Link to={"/consumer/" + user.addrString} className='consumerLink'> My Items </Link>
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
