import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./lineInfo.scss";
import { BigNumber } from "ethers";
import QRGenerator from "../../../QRCode/QRGenerator/QRGenerator";
import { typeToEmbeddedString, stringToType, QRNFTType } from "../../../../models/QRCodeModel";
import { itemStore } from "../../../../Store/ItemStore";
import { FinalToken } from "../../../../api/BackendIf";

interface LineInfoProps {
    i: FinalToken
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
      tokenId: BigNumber.from(1)
  });
    setQRData(stringToType(stringified))
  }, [])



  return (
    <div key={i.contract.productName} className="token x">
        <Link onClick={() => setItem(i)} to="/ItemDetail" className='wrapper first'>
          <div className='title'>Title:&nbsp;&nbsp;</div>
          <div className='data'>{i.contract.productName}</div>
        </Link >
        <div className='wrapper'>
          <div className='title'>Sold:&nbsp;&nbsp;</div>
          {i.forSale ? <div className='data'>yes</div> : <div className='data'>no</div>}
        </div>
        <div className='wrapper'>
          <div className='title'>For sale:&nbsp;&nbsp;</div>
          {i.forSale ? <div className='data'>yes</div> : <div className='data'>no</div>}
        </div>
        <div className='owner'>
          <div className='title'>Current Owner:&nbsp;&nbsp;</div>
          <div className='data'>{i.ownerAddress}</div>
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
