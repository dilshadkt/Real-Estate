import React, { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: serachParams.get("type") || "",
    city: serachParams.get("city") || "",
    minPrice: serachParams.get("minPrice") || 0,
    maxPrice: serachParams.get("maxPrice") || 10000000,
    property: serachParams.get("property") || "",
    bedroom: serachParams.get("bedroom") || "",
  });
  const handleChanges = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFilter = () => {
    setSearchParams(query);
  };
  return (
    <div className="filter">
      {query.city && (
        <h1>
          Search results for <b>{query.city}</b>
        </h1>
      )}
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            defaultChecked={query.city}
            onChange={handleChanges}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            defaultValue={query.type}
            onChange={handleChanges}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            defaultValue={query.property}
            onChange={handleChanges}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            defaultValue={query.minPrice}
            onChange={handleChanges}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            defaultValue={query.maxPrice}
            onChange={handleChanges}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            defaultValue={query.bedroom}
            onChange={handleChanges}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
