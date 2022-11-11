import React from 'react'
import { Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


function HouseCard({apartment}) {
  // const [locate, setLocate] = useState([])
  // const {location} = useParams()

  let navigate=useNavigate()

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:9292/locations`)
  //     .then((res) => res.json())
  //     .then((location) => setLocate(location))
  // }, [])

  // let apartment_location = locate.map((location) =>{
  //   return location
  // })

  // console.log(apartment_location)

  // let apartment_location = apartment.location.map((details) => {
  //   return details
  // })

  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img height="200" variant="top" src={apartment.image} />
      <Card.Body>
        <Card.Title>{apartment.title}</Card.Title>
        <h6>Rent: {apartment.rent}</h6>
        <h6>Location: {apartment.location.name}</h6>
        <h6>Rooms: {apartment.room}</h6>
        <Button onClick={() => {navigate (`/Apartments/${apartment.id}`)} }  type="button" className="btn btn-success mt-3">view Apartment</Button> 
      </Card.Body>
    </Card>  

  
  </>
  )
  
}

export default HouseCard