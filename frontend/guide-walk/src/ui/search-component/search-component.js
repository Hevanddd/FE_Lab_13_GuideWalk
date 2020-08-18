import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

export const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState();
  const handleOnChange = (newValue) => {
    setSearchValue(newValue);
  };
  const handleOnRequestSearch = () => {};
  const handleCancelSearch = () => {};

  return (
    <SearchBar
      value={searchValue}
      onChange={(newValue) => handleOnChange(newValue)}
      onRequestSearch={handleOnRequestSearch}
      onCancelSearch={handleCancelSearch}
    />
  );
};
