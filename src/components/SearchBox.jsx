import React from 'react';

 const SearchBox = ({ onChange }) => {
  return (
    <input
      className="search-box p-[20px] w-[500px] h-[20px] rounded-lg m-[20px]"
      type="search"
      placeholder="search monsters"
      onChange={onChange}
    />
  );
};

export default SearchBox;
