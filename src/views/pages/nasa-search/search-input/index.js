import React from 'react';
import { SearchResultConsumer } from 'context/search-result';
import './styles.scss';

const SearchInput = () => {
  return (
    <SearchResultConsumer>
      {({
        inputSearch,
        setInputSearch,
        searchFromNasa,
      }) => (
        <div className="search-input__wrapper">
          <input type="text"
            value={inputSearch}
            onChange={e => setInputSearch(e.target.value)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                searchFromNasa(inputSearch)
              }
            }}
          />
        </div>
      )}
    </SearchResultConsumer>
  );
};

export default SearchInput;
