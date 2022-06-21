import React from 'react'
import "./footer.scss";
import { Link } from "react-router-dom";
import GitHubLogo  from "../Assets/GitHubLogo.png";
import TwitterLogo from "../Assets/TwitterLogo.png";
import EtherscanLogo from "../Assets/EtherscanLogoLight.png";

const Footer: React.FC = () => {
  return (
    <div className='footer' id="footer">
      <div className='left'>
        <Link to="/manufacturer" className='text'> Manufacturers </Link>
        <Link to="/about" className='text about'> About </Link>
      </div>
      <div className='right'>
        <div className='icon github'>
          <a href="https://github.com/our3-xyz/NFT-MRKT" className='linkBox' id="linkBox">
            <img src={GitHubLogo} alt="github logo"></img>
          </a>
        </div>
        <div className='icon twitter'>
          <a href="https://github.com/our3-xyz/NFT-MRKT" className='linkBox' id="linkBox">
            <img src={TwitterLogo} alt="twitter logo"></img>
          </a>
        </div>
        <div className='icon etherscan'>
          <a href="https://github.com/our3-xyz/NFT-MRKT" className='linkBox' id="linkBox">
            <img src={EtherscanLogo} alt="etherscan logo"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer