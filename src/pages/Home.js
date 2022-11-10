import React, { useEffect, useState }  from "react"
import {  Container, Row, Col, } from "react-bootstrap"
import HouseCard from "../components/HouseCard"
import Search from "../components/Search"


function Home() {

  const [apartments, setApartments] = useState([]);
  // const [search, setSearch] = useState([])
  const [filter, setFilter] = useState("")

  console.log(filter)


  useEffect(() => {
    fetch("http://127.0.0.1:9292/apartments")
      .then((r) => r.json())
      .then((apartments) => setApartments(apartments));
  }, []);

  // function searchApartment(newSearch) {
  //   setSearch(newSearch)
  // }

  const filteredApartments = apartments.filter((apartment) => {
    let result = apartment.location.name === filter
    return result
  })

  const newArr = filter ? filteredApartments : apartments
  console.log(newArr)

  // console.log(filteredApartments)
    
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

          <Search onSetFilter={setFilter}/>
         

          <Container>
             <Row>
             {newArr.map((apartment) => (
            <Col key={apartment.id} xs={12} md={4}className='p-5'>
            <HouseCard  apartment={apartment}/>
            </Col>
             ))}
            

            </Row>
          </Container>
        
          
          </>
    )
  }
  









export default Home