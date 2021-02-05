import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const AutoCompleteModal = ({ className, modal, setModal, setValues }) => {
  const [backdrop] = useState(true)
  const [keyboard] = useState(true)

  const toggle = () => setModal(!modal)
  const autoCompleteHandler = () => {
    setValues(JSON.parse(localStorage.getItem("productFilters")))
    toggle()
  }

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalHeader
          className='px-3 py-2 border-0'
          toggle={toggle}
          tag='h6'
        ></ModalHeader>
        <ModalBody className='text-dark'>
          Found Some data from your current Filters. Would you like to use it?
        </ModalBody>
        <ModalFooter className='border-0'>
          <Button color='primary' onClick={autoCompleteHandler}>
            Use
          </Button>
          <Button color='secondary' onClick={toggle}>
            Skip
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AutoCompleteModal
