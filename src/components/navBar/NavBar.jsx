import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <>
    <nav>
      <a>TeamUp</a>
      <div>
        <ul id="navbar">
          <li> <a href="#login">LogIn</a></li>
          <li> <a href="#signup">SignUp</a></li>
        </ul>
      </div>

    </nav>
    </>
  );
}

export default NavBar;
