import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import pic from '../images/alex-motoc-J5eEiP-DJYk-unsplash.jpg'
import Form from 'react-bootstrap/Form';



const Apartments = () => {
  return (
    <>
    <Carousel className="slider">
    <Carousel.Item>
      <img height="500"
        className="d-block w-100"
        src={pic}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img height="500"
        className="d-block w-100"
        src={pic}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img height="500"
        className="d-block w-100"
        src={pic}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
     <Container>
      <Row>
      <Col xs={6} md={6} className='p-5 m-5'  >
      <p>Title:Gekonyo apartments</p>
      <p>Description:one bedroom</p>
      <p>price:20,000ksh</p>
      <p>Caretaker_contact:096787698</p>
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