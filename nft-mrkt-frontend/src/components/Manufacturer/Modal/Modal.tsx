import React, { useState } from "react";
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

    const placeHolder: number = 0;
    const { user } = useStore();
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [imageFile, setImageFile] = useState<any>(""); // What will this type be?
    const [imageUri, setImageUri] = useState<string>(""); // I think we should call setImageUri when IPFS returns us the CID
    
    async function uploadToIPFS(file: any) {
        // Bryan I think you made this yesterday
        const CID: string = file; 
        return CID
    }

    async function handleCreation() {
        setImageUri( await uploadToIPFS(imageFile))
        const backend = new StubBackendData();
        const response = await backend.addManuContract(
            name,
            user.addrString,
            imageUri,
            price,
            quantity
        )
        // console.log(response);
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
                        <input type="file" onChange={e => setImageFile(e.target.value)}></input>
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