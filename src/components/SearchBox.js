import React from 'react'

const SearchBox = ({ searchfield, searchChange }) => {

    return (
      <div className='pa2'>
        <label htmlFor="searchBox" className="pa3">Search:</label>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robots'
          id="searchBox"
          className="searchBox"
          onChange={searchChange}
        />
      </div>
    );
  }
  
  export default SearchBox;