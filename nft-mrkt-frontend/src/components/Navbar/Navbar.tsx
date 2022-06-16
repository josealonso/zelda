import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { useStore } from "../../Stores/userStore";
// import {JsonRpcSigner, Web3Provider} from "@ethersproject/providers";
// import { GeneralObject } from '../interfaces';

const { ethereum } = window as any;

const Navbar: React.FC = () => {

  const { user, setAddress } = useStore();


  async function connectMM() {
    if(ethereum) {
      const web3Modal = new Web3Modal()
      const prov = new ethers.providers.Web3Provider(await web3Modal.connect())
      // setState((prevState: any) => ({
      //   ...prevState,
      //   provider: prov
      // }));
      const signer = await prov.getSigner()
      const address = await signer.getAddress();
      console.log("address is: ", address,);
      console.log("Address is of type: ", typeof address);
      setAddress(address);
      // setState((prevState: any) => ({
      //   ...prevState,
      //   polyAddr: address
      // }));
    }
  }

  return (
    <div className='navbar' id="navbar">
      <Link to="/">
        <h1 className='logo'>Our3.xyz</h1>
      </Link>
      <button className='connectMMBtn' onClick={connectMM}>Connect Metamask!</button>
      {/* 
      TODO:
        make display address appear when connected: "0xae9...630" instead of "0xae90d6C1360d095a03c4AAf378Bf20cEcdB27630"
        have state persist in session storage so that it persists on refresh
      */}
    </div>
  )
}

export default Navbar
