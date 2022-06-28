import React, { useState } from "react";
import axios from "axios";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { useStore } from "../../../userStore";
import { GetInstance } from "../../../api/BackendIf";
import Confirm from "./Confirm";

interface ModalProps {
  setIsOpen: any
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
  let initialFieldNames = ["color", "size", "material"];
  let initialFieldValues = ["", "", ""];
  const [fieldNames, setFieldNames] = useState(initialFieldNames);
  const [fieldValues, setFieldValues] = useState(initialFieldValues);
  const [ipfsHash, setIpfsHash] = useState<string>("");
  const { user } = useStore();
  const [fileImg, setFileImg] = useState<File | null>(null);
  const [imgHash, setImgHash] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [contractAddress, setContractAddress] = useState("");

  const addField = () => {
    const thisFieldNames = fieldNames.slice();
    const thisFieldValues = fieldValues.slice();
    console.log(thisFieldNames, thisFieldValues);
    let defaultKey = "key";
    let defaultValue = "";
    let originalLength = thisFieldNames.length;

    thisFieldNames[originalLength + 1] = defaultKey;
    thisFieldValues[originalLength + 1] = defaultValue;

    if (thisFieldNames.length !== thisFieldValues.length) {
      alert("Arrays aren't equal!!!");
      console.log(thisFieldNames, thisFieldValues);
    }
    setFieldNames(thisFieldNames);
    setFieldValues(thisFieldValues);
  };

  const removeField = (event: React.FormEvent, index: number) => {
    const thisFieldNames = fieldNames.slice();
    const thisFieldValues = fieldValues.slice();
    thisFieldNames.splice(index, 1);
    thisFieldValues.splice(index, 1);

    if (thisFieldNames.length !== thisFieldValues.length) {
      alert("Arrays aren't equal!!!");
    }
    setFieldNames(thisFieldNames);
    setFieldValues(thisFieldValues);
  };

  const handleFormChange = (event: React.FormEvent<HTMLInputElement>, index: number) => {
    console.log("new f:", fieldNames, fieldValues);

    const thisFieldNames = fieldNames.slice();
    const thisFieldValues = fieldValues.slice();

    let newContent = event.currentTarget.value;
    let className = event.currentTarget.className;
    if (className === "key") {
      thisFieldNames[index] = newContent;
    } else if (className === "value") {
      thisFieldValues[index] = newContent;
    }

    if (thisFieldNames.length !== thisFieldValues.length) {
      alert("Arrays aren't equal!!!");
    }
    setFieldNames(thisFieldNames);
    setFieldValues(thisFieldValues);
    console.log("new f:", fieldNames, fieldValues);
  };

  const submit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(fieldNames, fieldValues);
  };

  const sendJSONToIPFS = async () => {
    // e.preventDefault()
    if (fieldNames.length !== fieldValues.length) {
      alert("Arrays aren't equal!!!");
    }

    try {
      console.log("various variables", process.env);

      const api_key = process.env.REACT_APP_PINATA_API_KEY;
      const api_secret_key = process.env.REACT_APP_PINATA_API_SECRET_KEY;

      if (api_key != null && api_secret_key != null) {

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
          headers: {
            "pinata_api_key": api_key,
            "pinata_secret_api_key": api_secret_key,
            "Content-Type": "application/json"
          },
          data: { fieldNames, fieldValues }
        });

        const ipfsHash = `ipfs://${resFile.data.IpfsHash}`;
        setIpfsHash(ipfsHash);
        console.log("JSON: ", ipfsHash);
      } else {
        console.log("API Keys not found");
      }

    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };

  const sendFileToIPFS = async () => {
    // e.preventDefault() // Not sure what this does. Keeping in case of future bug

    if (!fileImg) {
      return;
    }
    console.log("We have found a file", fileImg);
    try {
      console.log("various variables", process.env);

      const api_key = process.env.REACT_APP_PINATA_API_KEY;
      const api_secret_key = process.env.REACT_APP_PINATA_API_SECRET_KEY;

      if (api_key != null && api_secret_key != null) {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            "pinata_api_key": api_key,
            "pinata_secret_api_key": api_secret_key,
            "Content-Type": "multipart/form-data"
          }
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        setImgHash(ImgHash);
        console.log("Img: ", ImgHash);
        //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      } else {
        console.log("API Keys not found");
      }

    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };

  async function handleCreation() {
    await sendFileToIPFS();
    await sendJSONToIPFS();
    const backend = GetInstance();
    const response = await backend.addCollectionContract(
      name,
      user.addrString,
      imgHash,
      ipfsHash,
      price,
      quantity
    );
    setContractAddress(response.contractAddress);
    setConfirmOpen(true);
  }

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add a Product Line:</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <form className={styles.modalForm}>
              <label> Name of Product:
                <input placeholder="Golden Ticket" type="text" onChange={e => setName(e.target.value)}></input>
              </label>
              <label> Price:
                <input placeholder="$99" type="number" onChange={e => setPrice(parseInt(e.target.value))}></input>
                {/* I could only make this work with parseInt... any thoughts? */}
              </label>
              <label> Quantity:
                <input placeholder="100" type="number" onChange={e => setQuantity(parseInt(e.target.value))}></input>
                {/* I could only make this work with parseInt... any thoughts? */}
              </label>
              <label> Product Image:
                <input type="file" onChange={(e) => setFileImg(e.target.files ? e.target.files[0] : null)} required />
              </label>
              <label> Product info:
                <form onSubmit={submit}>
                  {fieldNames.map((key: string, i: number) => {
                    return (
                      <div key={i}>
                        <input className='key'
                               name={key}
                               placeholder={key}
                               value={key}
                               onChange={(event: React.FormEvent<HTMLInputElement>) => handleFormChange(event, i)}
                        />
                        <input className='value'
                               name={key}
                               placeholder='value'
                               value={fieldValues[i]}
                               onChange={(event: React.FormEvent<HTMLInputElement>) => handleFormChange(event, i)}
                        />
                        <button id='remove_field' onClick={(event: React.FormEvent) => removeField(event, i)}>Remove
                          field
                        </button>
                      </div>
                    );
                  })}
                </form>
                <button onClick={addField}>Add a Field</button>
              </label>
            </form>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => handleCreation()}>
                Create Product Line
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {confirmOpen && <Confirm address={contractAddress} toggle={() => {
        setIsOpen(false);
      }} />}
    </>
  );
};

export default Modal;
