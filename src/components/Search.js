import React, {useEffect, useState} from 'react'

function Search({ onSetFilter }) {

  const [location, setLocation] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:9292/locations")
      .then((r) => r.json())
      .then((local) => setLocation(local));
  }, []);

  return (
    <>
  <select className="form-select-lg mt-3  m-5" aria-label=".form-select-lg " onChange={(event) => onSetFilter(event.target.value == 0 ? "" : event.target.value)}>
  <option value={0}>Filter by location</option>
  
  {Object.keys(location).length > 0 && location.map((locate) => (
    <option key={locate.id} value={locate.name}>{locate.name}</option>
  ))}
  
  </select>
  <select className="form-select-lg mt-3  m-5" aria-label=".form-select-lg ">
  <option selected>Filter by rent</option>
  <option value="1">10,000</option>
  <option value="2">17,000</option>
  <option value="3">25,000</option>
</select>
<select className="form-select-lg mt-3 m-5" aria-label=".form-select-lg ">
  <option selected>Filter by rooms</option>
  <option value="1">1bedroom</option>
  <option value="2">2bedroom</option>
  <option value="3">4bedroom</option>
</select>
    </>
  )
}

export default Search