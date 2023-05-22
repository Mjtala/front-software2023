import React from 'react';
import './ButtonsHomeView.css';

function ButtonsHomeView(props) {
    const text = props.name
    return (
    // create a button that has a text that i can send through props
    <div className='container'>
        <button className='button'> 
          <h3>{text}</h3>
        </button>
    </div>
  )
}

export default ButtonsHomeView;