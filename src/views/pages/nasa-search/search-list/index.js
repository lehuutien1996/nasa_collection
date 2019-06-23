import React, { Fragment } from 'react';
import { SearchResultConsumer } from 'context/search-result';

import './styles.scss';
import SearchCard from 'views/components/search-card';

const SearchList = () => {
  return (
    <SearchResultConsumer>
      {({
        result: {
          collection: {
            items
          },
        },
      }) => (
        <Fragment>
          <div className="search__meta">
            <span>{items.length} result for “Moon”</span>
          </div>
          <div className="search__list">
            <div className="row">
              {items.map((item, index) => (
                <div className="column-3" key={`search${index}`}>
                  <SearchCard
                    info={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </SearchResultConsumer>
  );
};

export default SearchList;
