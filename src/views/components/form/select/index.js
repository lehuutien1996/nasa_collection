import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Select = ({
  title,
  value,
  ...rest,
}) => {
  return (
    <div className="input-wrapper input-select">
      { title ? <span className="input-title">{title}</span> : ''}
      <input type="text" readOnly value="Video"/>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Select;
