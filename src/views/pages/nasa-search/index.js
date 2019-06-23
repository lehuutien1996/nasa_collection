import React, { Fragment } from 'react';
import ChevronLeftIcon from 'assets/images/chevron-left.png';
import { Link } from 'react-router-dom';
import SearchInput from './search-input';
import SearchList from './search-list';
import VideoPreview from 'views/components/video-preview';

import './styles.scss';
import NasaEditor from 'views/components/nasa-editor';

const CreatePage = () => (
  <Fragment>
    <VideoPreview show={false} />
    <NasaEditor show={true} />
    <div className="page-wrapper">
      <div className="container">
        <header>
          <Link to="/" className="header-link">
            <img src={ChevronLeftIcon} alt=""/>
            <span>Back to Collection</span>
          </Link>
        </header>

        <section className="page-heading">
          <h2>Search from Nasa</h2>
        </section>

        <section className="page-body">
          <SearchInput />
          <SearchList />
        </section>

      </div>
    </div>
  </Fragment>
);

export default CreatePage;
