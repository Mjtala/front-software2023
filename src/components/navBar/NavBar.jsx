import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import '../../styles/styles.css'

function NavBar() {
  return (
    <>
    <nav>
      <a>TeamUp</a>
      <div>
        <ul id="navbar">
          <li> <a href="#login">LogIn</a></li>
          <Link className='text-link' to="/ChooseUser">LogIn</Link>
          <li> <a href="#signup">SignUp</a></li>
        </ul>
      </div>

    </nav>
    </>
  );
}

export default NavBar;
