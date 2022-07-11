import React, { useEffect, useState } from 'react'
import "./maker.scss";
import { userStore } from "../../Store/userStore";
import { GetInstance, NFTContract } from "../../api/BackendIf";
import Modal from "./Modal/Modal";
import Main from './Main/Main';
import "./maker.scss";

const Maker: React.FC = () => {

  const { user } = userStore();
  const makerAddress: string = user.addrString;

  const [makerInfo, setMakerInfo] = useState<NFTContract[]>();
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
      if (makerInfo && makerInfo[0]) {
        setLogo(makerInfo[0].maker.companyLogoUri)
      }
    }
    setLogoUri();
  }, [makerInfo])

  return (
    <div className='maker'>
      <div className='sidebar toplevel'>
        <div className="sideTop">
          <h3 className='makerName'>{makerInfo && makerInfo[0].maker.companyName}</h3>
          <img src={logo} className='makerImg' alt="company logo"></img>
        </div>
        <div className="sideBottom">
          <div className='productLines'>
            {  makerInfo?.map((i, index) => (
                <div key={i.contractAddress} className='line x'
                    data-address={i.contractAddress}
                    onClick={(e) =>
                      setChosenLine(e.currentTarget.dataset.address)}
                >Product Line {(index + 1)}</div>
              ))
            }
            <button className='addLine' onClick={() => setIsOpen(true)}>Add line + </button>
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
