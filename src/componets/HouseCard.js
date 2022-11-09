import React, {useState} from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import pic from '../images/alex-motoc-J5eEiP-DJYk-unsplash.jpg'

function HouseCard() {

     const [show, setShow] = useState(false);
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img height="200" variant="top" src={pic} />
      <Card.Body>
        <Card.Title>Apartment</Card.Title>
        <Button  onClick={handleShow} variant="success">View Apartment</Button>
      </Card.Body>
    </Card>  

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Apartment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p>
          lorem ipsum
        </p>
      </Modal.Body>
 
  </Modal>
  </>
  )
  
}

export default HouseCard