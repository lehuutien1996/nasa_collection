import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  title,
  value,
  ...rest,
}) => {
  return (
    <div className="input-wrapper">
      { title ? <span className="input-title">{title}</span> : ''}
      <textarea {...rest} defaultValue={value}></textarea>
    </div>
  );
};

TextArea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
