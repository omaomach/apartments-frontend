import React, { useEffect, useState }  from "react"
import {  Container, Row, Col, } from "react-bootstrap"
import HouseCard from "../components/HouseCard"
import Search from "../components/Search"


function Home() {

  const [apartments, setApartments] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:9292/apartments")
      .then((r) => r.json())
      .then((apartments) => setApartments(apartments));
  }, []);
    
    return (
          <>
        
          <div className='Home text-center'>
           <p className='text-center  fw-bold title'>
            An apartment <br/> anytime <br/>anyday
           </p> 
           <p className=' find text-center fs-3'>
              You want.We find
           </p> 
          
          </div>

          <Search/>
         

          <Container>
             <Row>
             {apartments.map((apartment) => (
            <Col xs={12} md={4}className='p-5'>
            <HouseCard  apartment={apartment} key={apartment.id}/>
            </Col>
             ))}
            

            </Row>
          </Container>
        
          
          </>
    )
  }
  









export default Home