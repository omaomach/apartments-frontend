import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import pic from "../images/alex-motoc-J5eEiP-DJYk-unsplash.jpg";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

const Apartments = () => {
  const { id } = useParams();
  const [house, setHouse] = useState([]);
  // const [client, setClient] = useState([])
  const [appointment, setAppointment] = useState([]);

  const empty = { name: "", age: "", phone_number: "" };

  const [formData, setFormData] = useState(empty);

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/apartments/${id}`)
      .then((r) => r.json())
      .then((house) => setHouse(house));
  }, []);

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:9292/clients/${id}`)
  //     .then((r) => r.json())
  //     .then((client) => setClient(client));
  // }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/appointments`)
      .then((r) => r.json())
      .then((appointment) => setAppointment(appointment));
  }, []);

  // function addClient(newClient) {
  //   const updatedClients = [...client, newClient]
  //   setClient(updatedClients)
  // }

  function handleChange(event) {
    const key = event.target.id;
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset();

    fetch(
      `http://127.0.0.1:9292/clients/${formData.name}/${formData.age}/${formData.phone_number}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          fetch("http://127.0.0.1:9292/appointment", {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify({
              client_id: data[0].id,
              apartment_id: id,
            }),
          })
          .then((res) => res.json())
          .then((new_appoinment) => setAppointment(appointment => ([...appointment, new_appoinment])))
        }
        // } else {
        //   fetch("http://127.0.0.1:9292/client", {
        //     method: "POST",
        //     headers: {
        //       "content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       // addClient(data)
        //       setFormData(empty);
        //     });
        // }
      });
  }

  // let house_images = house.images.map((image) => {
  //   return image
  // })

  function handleDeleteAppoinment(deletedAppointment) {
    fetch(`http://127.0.0.1:9292/appointment/${deletedAppointment.id}`,{
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {
      setAppointment(appointment.filter(appoint => appoint.id !== deletedAppointment.id))
    })
  }

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
              <ol>
                {appointment.map((appoint) => (
                  <li key={appoint.id}>{`${appoint.client.name}`}<button className="delete-appointment" onClick={()=> handleDeleteAppoinment(appoint)}>Delete Appointment</button></li>

                ))}
              </ol>
            </div>
            
          </div>

          <div className="client-form">
            <form className="form-client" onSubmit={handleSubmit}>
              <h3>Visit Apartment</h3>
              <input
                type="text"
                id="name"
                placeholder="Client Name"
                value={formData.name}
                onChange={handleChange}
                required
              ></input>{" "}
              <br />
              <input
                type="number"
                id="age"
                placeholder="Client age"
                value={formData.age}
                onChange={handleChange}
                required
              ></input>{" "}
              <br />
              <input
                type="number"
                id="phone_number"
                placeholder="Phone number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              ></input>{" "}
              <br />
              <button type="submit">Create Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartments;
