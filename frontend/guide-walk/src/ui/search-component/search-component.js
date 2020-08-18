import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

export const SearchComponent = ({ getSearchDataStart, getSearchDataFail }) => {
  const [searchValue, setSearchValue] = useState();
  const handleOnChange = (newValue) => {
    setSearchValue(newValue);
  };
  const handleOnRequestSearch = () => {
    searchValue && getSearchDataStart(searchValue);
  };
  const handleCancelSearch = () => {
    getSearchDataFail();
    setSearchValue('');
  };

  return (
    <SearchBar
      placeholder='Search by name'
      value={searchValue}
      onChange={(newValue) => handleOnChange(newValue)}
      onRequestSearch={handleOnRequestSearch}
      onCancelSearch={handleCancelSearch}
    />
  );
};
