import React, { useEffect, useState } from 'react';
import "./lineInfo.scss";
// import { typeToEmbeddedString } from "../../../../models/QRCodeModel";
// import { QRNFTType } from "../../../../models/QRCodeModel";
import { ethers } from 'ethers';
import QRGenerator from "../../../QRCode/QRGenerator/QRGenerator";
import { typeToEmbeddedString, stringToType, QRNFTType } from "../../../../models/QRCodeModel";

interface LineInfoProps {
    i: {
        tokenId: ethers.BigNumber
        name: string
        sold: boolean
        forSale: boolean
        currentOwner: string
    }
}

const LineInfo: React.FC<LineInfoProps>= ({ i }) => {

  useEffect(() => {
    const stringified = typeToEmbeddedString({
      network: "polygon", 
      address: "owner", 
      tokenId: ethers.BigNumber.from(1)
  });
    setQRData(stringToType(stringified))
  }, [])

  const [QRData, setQRData] = useState<QRNFTType>();
  const [viewCode, setViewCode] = useState<boolean>(false);

  return (
    <div key={i.name} className="token x">
        <div className='wrapper'>
          <div className='title'>Title:&nbsp;&nbsp;</div>
          <div className='data'>{i.name}</div>
        </div>
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