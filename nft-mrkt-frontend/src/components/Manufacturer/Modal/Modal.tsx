import React from "react";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";

interface ModalProps {
    setIsOpen: any
    /* 
    I do not think `any` is correct here. What is the type definition for a function?
    */
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
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
                        <input placeholder="Golden Ticket" type="text"></input>
                    </label>
                    <label> Price:
                        <input placeholder="$99" type="text"></input>
                    </label>
                    <label> Quantity:
                        <input placeholder="100" type="text"></input>
                    </label>
                    <label> Product Image:
                        <input placeholder="" type="file"></input>
                    </label>
                </form>
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
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