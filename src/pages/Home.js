import React, { useEffect, useState }  from "react"
import {  Container, Row, Col, } from "react-bootstrap"
import HouseCard from "../components/HouseCard"
import Search from "../components/Search"


function Home() {

  const [apartments, setApartments] = useState([]);
  // const [search, setSearch] = useState([])
  const [filter, setFilter] = useState("")
  const [filter2, setFilter2] = useState("")
  const [filter3, setFilter3] = useState("")

  // console.log(filter)


  useEffect(() => {
    fetch("http://127.0.0.1:9292/apartments")
      .then((r) => r.json())
      .then((apartments) => setApartments(apartments));
  }, []);

  // function searchApartment(newSearch) {
  //   setSearch(newSearch)
  // }

  let filteredApartments = apartments.filter((apartment) => {
    let result = apartment.location.name === filter
    return result

    // if (filter || filter2 ) {
    //   return apartment.location.name === filter || apartment.rent < Number(filter2)
    // }

  })

  if (filter2) {
    filteredApartments = filteredApartments.filter((apartment) => {
      return apartment.rent < Number(filter2)
    })
  }

  if (filter3) {
    filteredApartments = filteredApartments.filter((apartment) => {
      return apartment.room === Number(filter3)
    })
  }

  const clearFilter = () => {
    setFilter("")
    setFilter2("")
    setFilter3("")
  }


  // const filterByRent = apartments.filter((apartment) => {
  //   let result = apartment.rent === filter2
  //   return result
  // })

  const newArr = filter || filter2 || filter3 ? filteredApartments : apartments
  // console.log(newArr)

  // const newArr2 = filter2 ? filterByRent : apartments
  // console.log(newArr2)

  // const finalArr = [...newArr,...newArr2]
  // console.log(finalArr)

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

          <Search onSetFilter={setFilter} onSetFilter2={setFilter2} onSetFilter3={setFilter3} onClearFilter={clearFilter}/>
         

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