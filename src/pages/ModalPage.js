import React, { useState } from "react";
import Modal from "../Components/Modal";
import Button from "../Components/Button";
export default function ModalPage() {
    const [showModal , setShowModal] = useState(false);
    function handleClick() {
        setShowModal(true)
    }
    function handleClose() {
        setShowModal(false);
    }
    const actionBar =  <Button  onClick={handleClose} primary>I Accept</Button>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>hello every body
   </Modal>;
 return(
    <div className="relative">
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
    </div>
)

}