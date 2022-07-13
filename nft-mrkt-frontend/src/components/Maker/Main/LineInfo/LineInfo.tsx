import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./lineInfo.scss";
import { BigNumber } from "ethers";
import QRGenerator from "../../../QRCode/QRGenerator/QRGenerator";
import { QRNFTType, stringToType, typeToEmbeddedString } from "../../../../models/QRCodeModel";
import { Token } from "../../../../api/BackendIf";

interface LineInfoProps {
  i: Token
  chosenLine: string
  productUri: string | undefined
}

const LineInfo: React.FC<LineInfoProps> = ({ i, chosenLine, productUri }) => {

  const [QRData, setQRData] = useState<QRNFTType>();
  const [viewCode, setViewCode] = useState<boolean>(false);

  useEffect(() => {
    const stringified = typeToEmbeddedString({
      network: "polygon",
      address: "owner",
      tokenId: BigNumber.from(1)
    });
    setQRData(stringToType(stringified));
  }, []);

  return (
    <div key={i.contract.productName} className="token x">
      <div className='wrapper first'>
      <div className='title'>Title:&nbsp;&nbsp;</div>
      <Link
        to="/itemDetail"
        state={{ data: i }}
        className='link'>
        <div className='data'>{i.contract.productName}</div>
      </Link>
      </div>

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
