import React from 'react'
import { Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import pic from '../images/alex-motoc-J5eEiP-DJYk-unsplash.jpg'


function HouseCard() {

  let navigate=useNavigate()

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img height="200" variant="top" src={pic} />
      <Card.Body>
        <Card.Title>Apartment</Card.Title>
        <Button onClick={() => {navigate ('/Apartments')} }  type="button" className="btn btn-success mt-3">view Apartment</Button> 
      </Card.Body>
    </Card>  

  
  </>
  )
  
}

export default HouseCard