import React from 'react';

const SearchBox = ({ onChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="search monsters"
      onChange={onChange}
    />
  );
};

export default SearchBox;
