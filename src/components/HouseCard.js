import React from 'react'
import { Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function HouseCard({apartment}) {

  let navigate=useNavigate()

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img height="200" variant="top" src={apartment.image} />
      <Card.Body>
        <Card.Title>{apartment.title}</Card.Title>
        <Button onClick={() => {navigate (`/Apartments/${apartment.id}`)} }  type="button" className="btn btn-success mt-3">view Apartment</Button> 
      </Card.Body>
    </Card>  

  
  </>
  )
  
}

export default HouseCard