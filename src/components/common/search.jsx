import React from 'react';
import './search.css';

const Search = ({ search, onSearch }) => {
  return (
    <input
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      className="form-control"
      type="search"
      id="search"
      name="search"
      aria-label="Search"
      placeholder="Search"
    />
  );
};

export default Search;
