import React from 'react';
import './styles.scss';

const Meta = ({
  meta: {
    keywords,
    date_created,
  },
}) => {
  return (
    <div className="card__meta">
      <span>{ keywords[0] || '' }</span>
      <span>{ date_created }</span>
    </div>
  );
};

export default Meta;
