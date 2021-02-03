import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { toast } from "react-toastify"

const DeleteModal = ({
  className,
  modal,
  setModal,
  setSelector,
  selector,
  products,
  setProducts,
}) => {
  const [backdrop] = useState(true)
  const [keyboard] = useState(true)

  const toggle = () => setModal(!modal)
  const deleteHandler = () => {
    const restProducts = products.filter((product) => product.id !== selector)
    setProducts(restProducts)
    localStorage.setItem("products", JSON.stringify(restProducts))
    setModal(!modal)
    toast.success("Removed Product!")
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
          Are you sure you want to delete this Product?
        </ModalBody>
        <ModalFooter className='border-0'>
          <Button color='danger' onClick={deleteHandler}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default DeleteModal
