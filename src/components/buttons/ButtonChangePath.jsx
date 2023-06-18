import React from "react";
import "./ButtonChangePath.css";
import PropTypes from 'prop-types';

const ButtonChangePath = ({ id, onClick, children }) => {
  return (
    <button className='ButtonChangePath'
      type="button"
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonChangePath.propTypes = {
  id: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default ButtonChangePath;