import React, {useState} from 'react'
import QrReader from "react-qr-reader";
import {useNavigate} from "react-router-dom";
import {QRReadResultType} from "../QRReadResult/QRReadResult";
import './qrCodeReader.scss'

function QRCodeReader() {
    const navigate = useNavigate();
    const [ data, setData ] = useState("scan me")
    const [ show, setShow ] = useState(true)
    return (
        <div className="qrCodeReader">
            {show ? (<QrReader
            delay={300}
            onError={() => void {}}
            onScan={(data) => {
                if (data !== null) {
                    console.log(data)
                    setData(data)
                    setShow(false)
                    let request: QRReadResultType = {data:data}
                    navigate("/qr-read-result" , {
                        state: request
                    })
                }
            }}
            style={{width: '30%'}}
            />) : (<p>done</p>)};
        <p>hello world: {data}</p>
        </div>
    )
}

export default QRCodeReader
