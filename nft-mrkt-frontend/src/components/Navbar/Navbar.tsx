import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
// import {JsonRpcSigner, Web3Provider} from "@ethersproject/providers";

import { GeneralObject } from '../interfaces';

const { ethereum } = window as any;

const Navbar: React.FC<{state:any, setState:any}> = ({state, setState}) => {

  async function connectMM() {
    if(ethereum) {
      const web3Modal = new Web3Modal()
      const prov = new ethers.providers.Web3Provider(await web3Modal.connect())
      setState((prevState: any) => ({
        ...prevState,
        provider: prov
      }));
      const signer = await prov.getSigner()
      const address = await signer.getAddress();
      console.log("address is: ", address,);
      console.log("Address is of type: ", typeof address);
      setState((prevState: any) => ({
        ...prevState,
        polyAddr: address
      }));
    }
  }

  return (
    <div className='navbar' id="navbar">
      <Link to="/">
        <h1 className='logo'>Our3.xyz</h1>
      </Link>
      <button className='connectMMBtn' onClick={connectMM}>Connect Metamask!</button>
    </div>
  )
}

export default Navbar
