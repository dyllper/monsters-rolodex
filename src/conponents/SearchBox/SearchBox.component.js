import React from 'react';

import './SearchBox.styles.css';

const SearchBox = ({placeholderText, handleOnChange}) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholderText}
      onChange={handleOnChange}
    />
  )
}

export default SearchBox;