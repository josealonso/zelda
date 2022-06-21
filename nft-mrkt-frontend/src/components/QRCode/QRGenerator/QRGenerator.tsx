import React from 'react'
import './qrGenerator.scss'
import {QRCodeSVG} from 'qrcode.react';
import {QRNFTType, typeToEmbeddedString} from '../../../models/QRCodeModel';

const QRGenerator: React.FC <{data?:QRNFTType}> = ({data}) =>{
    return (<div className="qrCodeResult">
        {data ? <QRCodeSVG value={typeToEmbeddedString(data)} /> : "no data"}
    </div>)
}

export default QRGenerator
