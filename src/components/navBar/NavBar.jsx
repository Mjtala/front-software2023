import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import '../../styles/styles.css'

function NavBar() {
  return (
    <>
    <nav>
      <a><Link className='text-link' to="/">TeamUp</Link></a>
      <div>
        <ul id="navbar">
          <Link className='text-link' to="/ChooseUser">LogIn</Link>
          <Link className='text-link' to="/ChooseAccount">SignIn</Link>
        </ul>
      </div>

    </nav>
    </>
  );
}

export default NavBar;
