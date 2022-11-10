import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../images/alex-motoc-J5eEiP-DJYk-unsplash.jpg'
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';



const Apartments = () => {
  const {id}= useParams();
  const [house, setHouse] = useState([])


  useEffect(() => {
    fetch(`http://127.0.0.1:9292/apartments/${id}`)
      .then((r) => r.json())
      .then((house) => setHouse(house));
  }, []);

  // let house_images = house.images.map((image) => {
  //   return image
  // })

  return (
    <>
    <Carousel className="slider">
    {Object.keys(house).length > 0 && house.images.map((image) => (
      <Carousel.Item key={image.id}>
      <img height="500"
        className="d-block w-100"
        src={image.image_url}
        alt="Third slide"
      />
    </Carousel.Item>
    ))}
  </Carousel>
     <Container>
      <Row>
      <Col xs={12} md={6} className='p-5 m-5'>
      <p>Title: {house.title}</p>
      <p>Description: {house.description}</p>
      <p>price: {house.rent}</p>
      <p>Caretaker_contact: 096787698</p>
      </Col>
      </Row>
     </Container>
     <Container>
      <Row>
      <Col xs={12} md={6} className=''  >
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Enter Your Age</Form.Label>
        <Form.Control type="number" placeholder="Age" />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Enter Your Phone NUmber</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" />
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
      </Col>
      </Row>
     </Container>

  </>
  
  )
}

export default Apartments