import { useState } from "react"
import { Modal } from "./modal"
import './modal.css'



export const ModalTest = () => {
  const [showModalPopup,setShowModalPopUp] = useState<boolean>(false)

  const handleModal = () =>{
    setShowModalPopUp(!showModalPopup)
  }

  const onClose = () =>{
    setShowModalPopUp(false)
  }

  return (
    <div>
      <button onClick={handleModal} >Open Modal Popup</button>
      {
        showModalPopup && <Modal onClose={onClose} header={""} body={<div>Customized body</div>} footer={""}/>
      }
    </div>
  )
}
