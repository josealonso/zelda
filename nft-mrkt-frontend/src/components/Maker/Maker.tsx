import { GetInstance, MakerData } from "../../api/BackendIf";
import { MakeDispAddr } from "../../models/Address";
import React, { useEffect, useState } from 'react';
import { userStore } from "../../Store/userStore";
import Modal from "./Modal/Modal";
import Main from './Main/Main';
import "./maker.scss";

const Maker: React.FC = () => {

  const { user } = userStore();
  const makerAddress: string = user.addrString;

  const [makerInfo, setMakerInfo] = useState<MakerData>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [logo, setLogo] = useState<string | undefined>("");
  const [chosenLine, setChosenLine] = useState<any>(""); // Running into type problem here. IDE complains that it can be undefined

  useEffect(() => {
    async function getInfo(_makerAddress: string) {
      const backend = GetInstance();
      const response = await backend.getMakerData(makerAddress);
      setMakerInfo(response);
    }
    getInfo(makerAddress);
  }, [])

  useEffect(() => {
    async function setLogoUri() {
      setLogo(makerInfo?.makerLogoUri)
    }
    setLogoUri();
  }, [makerInfo])

  return (
    <div className='maker'>
      <div className='sidebar toplevel'>
        <div className="sideTop">
          <h3 className='makerName'>{makerInfo?.name}</h3>
          <img src={logo} className='makerImg' alt="company logo"></img>
        </div>
        <div className="sideBottom">
          <div className='productLines'>
            { makerInfo?.addresses.map((i, index) => (
                <div key={i} className='line x'
                    data-address={i}
                    onClick={(e) =>
                      setChosenLine(e.currentTarget.dataset.address?.toString())}
                >Product Line {(index + 1)}</div>
              ))
            }
            <button className='addLine'  onClick={() => setIsOpen(true)}>Add line + </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
          </div>
        </div>
      </div>
      <div className='main toplevel'>
        <Main chosenLine={chosenLine} />
      </div>
    </div>
  )
}

export default Maker
