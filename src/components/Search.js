import React, { useEffect, useState } from "react";

function Search({
  filter,
  onSetFilter,
  filter2,
  onSetFilter2,
  filter3,
  onSetFilter3,
  onClearFilter,
}) {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/locations")
      .then((r) => r.json())
      .then((local) => setLocation(local));
  }, []);

  return (
    <>
      <div className="filters">
        <select
          className="form-select-lg mt-3  m-5"
          value={filter}
          aria-label=".form-select-lg "
          onChange={(event) =>
            onSetFilter(event.target.value == 0 ? "" : event.target.value)
          }
        >
          <option value={0}>Filter by location</option>

          {Object.keys(location).length > 0 &&
            location.map((locate) => (
              <option key={locate.id} value={locate.name}>
                {locate.name}
              </option>
            ))}
        </select>
        <select
          className="form-select-lg mt-3  m-5"
          value={filter2}
          aria-label=".form-select-lg "
          onChange={(event) => onSetFilter2(event.target.value)}
        >
          <option selected>Filter by rent</option>
          <option value="10000">Less than 10000</option>
          <option value="20000">Less than 20000</option>
          <option value="30000">Less than 30000</option>
        </select>
        <select
          className="form-select-lg mt-3 m-5"
          value={filter3}
          aria-label=".form-select-lg "
          onChange={(event) => onSetFilter3(event.target.value)}
        >
          <option selected>Filter by rooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button className="clear-filters" onClick={onClearFilter}>
          Clear Filters
        </button>
      </div>
    </>
  );
}

export default Search;
