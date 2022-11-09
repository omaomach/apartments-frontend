import React from 'react'

function Search() {
  return (
    <>
  <select className="form-select-lg mt-3  m-5" aria-label=".form-select-lg ">
  <option selected>Filter by location</option>
  <option value="1">kasarani</option>
  <option value="2">Ruiru</option>
  <option value="3">Roysambu</option>
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