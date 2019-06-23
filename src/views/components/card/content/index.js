import React from 'react';
import './styles.scss';

const Content = ({
  title,
  description,
}) => {
  return (
    <div className="card__content">
      <h3 className="card__content-title">{title}</h3>
      <p className="card__content-body">{description}</p>
    </div>
  );
};

export default Content;
