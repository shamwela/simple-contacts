import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './search.css'

const Search = ({ search, onSearch }) => {
  return (
    <div id='search'>
      <FontAwesomeIcon icon='search' id='search-icon' />
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className='form-control'
        type='search'
        id='search-input'
        name='search-input'
        aria-label='Search'
        placeholder='Search'
      />
    </div>
  )
}

export default Search
