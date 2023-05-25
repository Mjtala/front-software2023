import React from "react";
import "./ButtonChangePath.css";

const ButtonChangePath = ({variant, id, onClick, children}) => {
  return (
    <button className='ButtonChangePath' 
      type="button"
      variant={variant}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonChangePath;