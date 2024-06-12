import React, { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";
const type = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type }));
  };
  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {type.map((item) => (
          <button
            key={item}
            className={query.type === item ? "active" : ""}
            onClick={() => switchType(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          placeholder="City Location"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={100000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button>
            <img src="/search.png" alt="search" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
