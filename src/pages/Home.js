import React from "react"
import {  Container, Row, Col, } from "react-bootstrap"
import HouseCard from "../components/HouseCard"
import Search from "../components/Search"


function Home() {
    
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
             <Col xs={12} md={4}className='p-5' > 
             <HouseCard/> 
             </Col>
             <Col xs={12} md={4}className='p-5' > 
             <HouseCard/> 
             </Col>
             <Col xs={12} md={4}className='p-5' > 
             <HouseCard/> 
             </Col>
             <Col xs={12} md={4}className='p-5' > 
             <HouseCard/> 
             </Col>
             <Col xs={12} md={4}className='p-5' > 
             <HouseCard/> 
             </Col>
             <Col xs={12} md={4}className='p-5' > 
             <HouseCard/> 
             </Col>
            </Row>
          </Container>
        
          
          </>
    )
  }
  









export default Home