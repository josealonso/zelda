import React from 'react'
import './navbar.scss'
import {Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import {JsonRpcSigner, Web3Provider} from "@ethersproject/providers";

const { ethereum } = window as any;

function Navbar() {

  async function connectMM() {
    if(ethereum) {
      const web3Modal = new Web3Modal()
      const provider = new ethers.providers.Web3Provider(await web3Modal.connect())
      const signer = await provider.getSigner()
      const address = await signer.getAddress();
      // put address into a useState Hook
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