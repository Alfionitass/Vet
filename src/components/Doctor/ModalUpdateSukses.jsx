import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

const ModalUpdateSukses = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Simpan
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>Update Sukses</Modal.Body>
        </Modal>
      </>
    );
  }

  export default ModalUpdateSukses