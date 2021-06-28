import React from 'react';
import './search.css';

const Search = ({ search, onSearch }) => {
  return (
    <div id="search">
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="form-control"
        type="search"
        id="search-input"
        name="search-input"
        aria-label="Search Input"
        placeholder="Search contact"
      />
      <i id="search-icon" className="fa fa-search" />
    </div>
  );
};

export default Search;
