import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Input = ({
  title,
  ...rest,
}) => {
  return (
    <div className="input-wrapper">
      { title ? <span className="input-title">{title}</span> : ''}
      <input {...rest}/>
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
