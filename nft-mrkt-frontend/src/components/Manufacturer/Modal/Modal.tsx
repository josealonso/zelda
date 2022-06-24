import React, { useState } from "react";
import axios from 'axios';
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";
import StubBackendData from "../../../api/stubBackendData";
import { useStore } from "../../../userStore";

interface ModalProps {
    setIsOpen: any
    /* 
    I do not think `any` is correct here. What is the type definition for a function?
    */
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {

    const [fileImg, setFileImg] = useState<File | null>(null);
    const [imgHash, setImgHash] = useState<string>("");

    const sendFileToIPFS = async () => {
      // e.preventDefault()

      if (!fileImg) {
          return;
      }
      console.log("We have found a file", fileImg)
      try {
          console.log("various variables", process.env)

          const api_key = process.env.REACT_APP_PINATA_API_KEY
          const api_secret_key = process.env.REACT_APP_PINATA_API_SECRET_KEY

          if (api_key != null && api_secret_key != null) {
              const formData = new FormData();
              formData.append("file", fileImg);

              const resFile = await axios({
                  method: "post",
                  url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                  data: formData,
                  headers: {
                      'pinata_api_key': api_key,
                      'pinata_secret_api_key': api_secret_key,
                      "Content-Type": "multipart/form-data"
                  },
              });

              const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
              setImgHash(ImgHash)
              console.log(ImgHash);
              //Take a look at your Pinata Pinned section, you will see a new file added to you list.
          } else {
              console.log("API Keys not found")
          }

      } catch (error) {
          console.log("Error sending File to IPFS: ")
          console.log(error)
      }
    }



    const { user } = useStore();
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [imageUri, setImageUri] = useState<string>(""); // I think we should call setImageUri when IPFS returns us the CID
    
    // const [imageFile, setImageFile] = useState<any>("");
    // async function uploadToIPFS(file: any) {
    //     // Bryan I think you made this yesterday
    //     const CID: string = file; 
    //     return CID
    // }

    async function handleCreation() {
        await sendFileToIPFS();
        const backend = new StubBackendData();
        const response = await backend.addManuContract(
            name,
            user.addrString,
            imgHash,
            price,
            quantity
        )
        console.log(response, response);
        // console.log(
        //     name,
        //     user.addrString,
        //     imageUri,
        //     price,
        //     quantity
        // )
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
        </>
      );
};

export default Modal;