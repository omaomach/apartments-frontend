import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pic from "../images/alex-motoc-J5eEiP-DJYk-unsplash.jpg";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

const Apartments = () => {
  const { id } = useParams();
  const [house, setHouse] = useState([]);

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
    <div className="container">

    <div className="container1">
        <Carousel className="slider">
          {Object.keys(house).length > 0 &&
            house.images.map((image) => (
              <Carousel.Item key={image.id}>
                <img
                  height="500"
                  className="d-block w-100"
                  src={image.image_url}
                  alt="Third slide"
                />
              </Carousel.Item>
            ))}
        </Carousel>
        <div className="apartment_info">
          <div xs={12} md={6} className="p-5 m-5">
            <p>Title: {house.title}</p>
            <p>Description: {house.description}</p>
            <p>price: {house.rent}</p>
            <p>Caretaker_contact: 096787698</p>
          </div>
        </div>
      </div>

      <div className="container2">

      {/* <Container>
        <Row>
          <Col xs={12} md={6} className="">
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
      </Container> */}

      <div className="appointment-form">
        <h3>Appointments</h3>
        <div className="client-names">

        </div>
        <button className="delete-appointment">Delete Appointment</button>
      </div>

        <div className="client-form">
          <form className="form-client" >
            <h3>Visit Apartment</h3>
            <input type="text" id="image" placeholder="Client Name" required></input> <br />
            <input type="number" id="name" placeholder="Client age" required></input> <br />
            <input type="text" id="venue" placeholder="Phone number" required></input> <br />
            <button type="submit">Create Appointment</button>
          </form>
        </div>

      </div>

    </div>
    </>
  );
};

export default Apartments;
