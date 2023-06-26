import React from "react";
import "./ButtonChangePath.css";
import PropTypes from 'prop-types';

const ButtonChangePath = ({ onClick, children }) => {
  return (
    <button className='ButtonChangePath'
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonChangePath.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default ButtonChangePath;