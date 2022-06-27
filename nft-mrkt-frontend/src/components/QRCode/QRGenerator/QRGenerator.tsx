import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import {QRNFTType, typeToEmbeddedString} from '../../../models/QRCodeModel';


const QRGenerator: React.FC <{data?:QRNFTType}> = ({data}) =>{
    return (
        <>
            {data ? <QRCodeSVG value={typeToEmbeddedString(data)} /> : "no data"}
        </>
    )
}

export default QRGenerator
