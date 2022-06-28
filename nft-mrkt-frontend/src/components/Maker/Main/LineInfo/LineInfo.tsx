import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./lineInfo.scss";
import { ethers } from 'ethers';
import QRGenerator from "../../../QRCode/QRGenerator/QRGenerator";
import { typeToEmbeddedString, stringToType, QRNFTType } from "../../../../models/QRCodeModel";
import { itemStore } from "../../../../Store/ItemStore";

interface LineInfoProps {
    i: {
        tokenId: ethers.BigNumber
        name: string
        sold: boolean
        forSale: boolean
        currentOwner: string
    }
    chosenLine: string
    productUri: string | undefined
}

const LineInfo: React.FC<LineInfoProps>= ({ i, chosenLine, productUri }) => {

  const {item, setItem} = itemStore();
  const [QRData, setQRData] = useState<QRNFTType>();
  const [viewCode, setViewCode] = useState<boolean>(false);

  useEffect(() => {
    const stringified = typeToEmbeddedString({
      network: "polygon", 
      address: "owner", 
      tokenId: ethers.BigNumber.from(1)
  });
    setQRData(stringToType(stringified))
  }, [])



  return (
    <div key={i.name} className="token x">
        <Link onClick={() => setItem(chosenLine, i.tokenId.toString(), i.forSale, 12, i.name, productUri)} to="/ItemDetail" className='wrapper first'>
          <div className='title'>Title:&nbsp;&nbsp;</div>
          <div className='data'>{i.name}</div>
        </Link >
        <div className='wrapper'>
          <div className='title'>Sold:&nbsp;&nbsp;</div>
          {i.sold === true ? <div className='data'>yes</div> : <div className='data'>no</div>}
        </div>
        <div className='wrapper'>
          <div className='title'>For sale:&nbsp;&nbsp;</div>
          {i.forSale === true ? <div className='data'>yes</div> : <div className='data'>no</div>}
        </div>
        <div className='owner'>
          <div className='title'>Current Owner:&nbsp;&nbsp;</div>
          <div className='data'>{i.currentOwner}</div>
        </div>
        <div className='qr'>
          { 
            viewCode ? 
            <div onClick={() => setViewCode(false)}><QRGenerator data={QRData} /></div> : 
            <button onClick={() => setViewCode(true)}>QR Code</button>
          }
        </div>
    </div>
  )
}

export default LineInfo