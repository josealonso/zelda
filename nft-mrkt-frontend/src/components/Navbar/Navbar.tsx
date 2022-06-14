import React from 'react'
import './navbar.scss'
import {Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {Web3Provider} from "@ethersproject/providers";

const { ethereum } = window as any;

function Navbar() {

  async function connectMM() {
    if(ethereum) {
      const web3Modal: Web3Modal = new Web3Modal()
      const provider: Web3Provider = new ethers.providers.Web3Provider(await web3Modal.connect())
      const signer: any = await provider.getSigner()
      console.log("signer is:", typeof signer)
      const address: any = await signer.getAddress();
      console.log("address is: ", typeof address);
  

      console.log(address);
    }
  }

  return (
    <div className='navbar' id="navbar">
      <Link to="/">
        <h1 className='logo'>Our3.xyz</h1>
      </Link>
      <button className='connectMMBtn' onClick={connectMM}>Connect Metamsk!</button>
    </div>
  )
}

export default Navbar
