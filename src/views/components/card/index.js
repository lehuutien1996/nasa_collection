import React from 'react';
import Thumbnail from './thumbnail';
import Meta from './meta';
import Content from './content';

import './styles.scss';

const Card = ({
  info,
  children,
}) => {
  return (
    <div className="card card--transparent">
      <Thumbnail
        info={info}
      />
      <Meta
        meta={info.meta}
      />
      <Content
        title={info.title}
        description={info.description}
      />
      {children}
    </div>
  );
};

export default Card;
