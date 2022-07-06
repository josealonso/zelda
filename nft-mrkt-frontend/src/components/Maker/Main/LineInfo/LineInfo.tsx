import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lineInfo.scss";
import { BigNumber } from "ethers";
import QRGenerator from "../../../QRCode/QRGenerator/QRGenerator";
import { QRNFTType, stringToType, typeToEmbeddedString } from "../../../../models/QRCodeModel";
import { FinalToken } from "../../../../api/BackendIf";

interface LineInfoProps {
  i: FinalToken
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


  const navigate = useNavigate();

  return (
    <div key={i.contract.productName} className="token x">
      <div className='title'>Title:&nbsp;&nbsp;</div>
      <button
        onClick={() => {
          navigate("/itemDetail", { state: { data: i } });
        }} className='wrapper first'>
        <div className='data'>{i.contract.productName}</div>
      </button>
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
