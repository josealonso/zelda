import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { useStore } from "../../userStore";
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
      <div className='left'>
        <Link to="/" className='title'> Our3 Marketplace </Link>
      </div>
      <div className='right'>
        <Link to="/consumer" className='consumerLink'> consumer </Link>
        <button className='connectMMBtn' onClick={connectMM}>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar
