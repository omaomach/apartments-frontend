import React from 'react'

function Search() {
  return (
  <select class="form-select-lg mt-3 mr-5 mx-auto" aria-label=".form-select-lg ">
  <option selected>Filter by location</option>
  <option value="1">kasarani</option>
  <option value="2">Ruiru</option>
  <option value="3">Roysambu</option>
</select>
  )
}

export default Search