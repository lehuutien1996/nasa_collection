import React from 'react';
import { Link } from 'react-router-dom';
import * as itemService from 'services/items.service';

import SavedCard from 'views/components/saved-card';
import PlusIcon from 'assets/images/plus.png';
import './style.scss';

const HomePage = () => {
  const items = itemService.getAll();

  return (
    <div className="container page-wrapper">
      <header className="clearfix">
        <div>
          <h1 className="page-title">NASA Collection</h1>
        </div>
        <div className="text-right flex-item">
          <Link to="/nasa-search" className="btn btn-primary">
            <img src={PlusIcon} alt="Add new item" />
            <span>Add new item</span>
          </Link>
        </div>
      </header>

      <div className="row">
        {items.map((item, index) => (
          <div className="column-3" key={'123123' + index}>
            <SavedCard
              info={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
