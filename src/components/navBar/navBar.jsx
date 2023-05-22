import React from 'react';
import './navBar.css';

function NavigationBar() {
  return (
    <div className='navbarContainer'>
    <ul className='ul'>
      <div className='RightSide'>
        <li className='li'><a className="a" href="#home">TeamUp</a></li>
      </div>
      <div className='LeftSide'>
        <li className='li'><a className="a" href="#SignUp">SignUp</a></li>
        <li className='li'><a className="a" href="#LogIn">LogIn</a></li>
      </div>
    </ul>
    </div>
  );
}

export default NavigationBar;
