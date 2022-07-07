import React, { useEffect, useState } from "react";
import "./itemDetail.scss";
import { Location, Params, useLocation, useParams } from "react-router-dom";
import { BackendAPI, FinalToken, GetInstance } from "../../api/BackendIf";
import { BigNumber, ethers } from "ethers";
import NotFoundImg from "../Assets/Logo.png";

export const CONTRACT_ADDRESS_PARAM = "contractAddress";
export const TOKEN_ID_PARAM = "tokenID"

export type ItemDetailInput = {
  data: FinalToken
}

interface ItemDetailProps {
  api?: () => BackendAPI
}


const ItemDetail: React.FC<ItemDetailProps> = ({api= GetInstance}) => {
  const [item, setItem] = useState<FinalToken>();
  const params = useParams();
  const location = useLocation();

  async function getItem(params: Params, location: Location) {

    const contractAddress = params[CONTRACT_ADDRESS_PARAM];
    const tokenID = params[TOKEN_ID_PARAM];

    if ((contractAddress !== undefined) && (tokenID !== undefined)) {
      const backend = api()
      const tokenIDInt = parseInt(tokenID);
      const data = await backend.getTokenDetail(contractAddress, tokenIDInt);
      const t: FinalToken = {
        contract: {
          contractAddress: data.contractAddress,
          maker: {
            companyName: "",
            companyLogoUri: "",
            network: "",
            userAddress: ""
          },
          makerSalePrice: ethers.BigNumber.from(0),
          productUri: data.image ?? "",
          productName: data.name,
          productMeta: "",
          numberProduced: 0
        },
        forSale: false,
        id: BigNumber.from(tokenID),
        minted: true,
        ownerAddress: data.ownerAddress,
        salePrice: BigNumber.from(0)
      };
      setItem(t);
      return;
    }
    let locData = location.state as ItemDetailInput;
    const t = locData.data;
    t.salePrice = BigNumber.from(t.salePrice._hex);
    setItem(t);
    return;
  }

  useEffect(() => {
    getItem(params, location);
  }, []);

  return (<>{item &&
  <div className='itemDetailWrapper'>
    <div className="itemDetailWrapper-main">
      <div className="itemDetailWrapper-row title">
        {item.contract.productName}
      </div>
      <div className="itemDetailWrapper-row title">
        {item.contract.productMeta}
      </div>
      <div className="itemDetailWrapper-row">
        <img src={item.contract.productUri.startsWith("http") ? item.contract.productUri : NotFoundImg} className='itemDetailWrapper-img' alt="product" />
      </div>
      <div className="itemDetailWrapper-row">
        <div className="itemDetailWrapper-left">
          Contract Address:
        </div>
        <div className="itemDetailWrapper-right">
          {item.contract.contractAddress}
        </div>
      </div>
      <div className="itemDetailWrapper-row">
        <div className="itemDetailWrapper-left">
          Name:
        </div>
        <div className="itemDetailWrapper-right">
          {item.contract.productName}
        </div>
      </div>
    </div>
    <div className='body'>
    </div>
  </div>}</>);
};

export default ItemDetail

