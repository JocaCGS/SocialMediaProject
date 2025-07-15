import React, { useState } from 'react';
import { SearchDiv, SearchBox, ButtonSearch } from './style.js';

export default function ButtonProfile() {
  const [search, setSearch] = useState('');

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <SearchDiv>
      {/* <ButtonSearch>
        <i className="bi bi-search"></i>
      </ButtonSearch> */}
      <SearchBox
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ButtonSearch onClick={clearSearch} disabled={!search}>
        <i className="bi bi-x"></i>
      </ButtonSearch>
    </SearchDiv>
  );
}
