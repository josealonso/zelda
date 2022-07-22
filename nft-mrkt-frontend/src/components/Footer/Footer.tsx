import EtherscanLogo from "../Assets/EtherscanLogoLight.png";
import TwitterLogo from "../Assets/TwitterLogo.png";
import GitHubLogo from "../Assets/GitHubLogo.png";
import { Link } from "react-router-dom";
import React from 'react'
import "./footer.scss";
import { Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box className='footer' id="footer">
      <Box className='left'>
        <Link to="/maker" className='text'><Text> Makers</Text> </Link>
        <Link to="/about" className='text about'><Text as="em">About</Text> </Link>
      </Box>
      <Box className='right'>
        <Box className='icon github'>
          <a href="https://github.com/our3-xyz/NFT-MRKT" className='linkBox' id="linkBox">
            <img src={GitHubLogo} alt="github logo"></img>
          </a>
        </Box>
        <Box className='icon twitter'>
          <a href="https://twitter.com/our310" className='linkBox' id="linkBox">
            <img src={TwitterLogo} alt="twitter logo"></img>
          </a>
        </Box>
        <Box className='icon etherscan'>
          <a href="https://github.com/our3-xyz/NFT-MRKT" className='linkBox' id="linkBox">
            <img src={EtherscanLogo} alt="etherscan logo"></img>
          </a>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer