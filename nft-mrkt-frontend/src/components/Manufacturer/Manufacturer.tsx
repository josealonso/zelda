import React, { useEffect, useState } from 'react'
import "./manufacturer.scss";
import { useStore } from "../../userStore";
import StubBackendData from '../../api/stubBackendData';
import { ManufacturerData } from '../../api/BackendIf';
import EtherscanLogoDark from "../Assets/EtherscanLogoDark.png";
import Modal from "./Modal/Modal";

// import { useOutletContext } from "react-router-dom";


const Manufacturer: React.FC = () => {

  const { user } = useStore();
  const makerAddress: string = user.addrString;

  let [makerInfo, setMakerInfo] = useState<ManufacturerData>()
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    async function getInfo(_makerAddress: string) {
      let backend = new StubBackendData();
      const response = await backend.getManufacturerData(makerAddress);
      setMakerInfo(response);
    }
    getInfo(makerAddress);
  }, [])

  return (
    <div className='manufacturer'>
      <div className='sidebar toplevel'>
        <h3 className='makerName'>{makerInfo?.name}</h3>
        <img src={EtherscanLogoDark} className='makerImg' alt="company logo"></img>
        <div className='productLines'>
          { makerInfo?.addresses.map((i) => (
              <div key={i} className='line x'>{[i]}</div>
            ))
          }
          <button className='addLine'  onClick={() => setIsOpen(true)}>Add line + </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </div>
      </div>
      <div className='main toplevel'>
        I am the main
      </div>
    </div>
  )
}

export default Manufacturer

// key={generateKey(makerInfo?.addresses)}