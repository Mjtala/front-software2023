import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import '../../styles/styles.css'
import { useLocalStorage } from 'usehooks-ts'

function NavBar() {

  const [userConnectedData, setUserConnectedData] = useLocalStorage("UserInfo", null)
  const [connected, setConnected] = useLocalStorage("Connected", false)

  const handleLogout = async () => {
    setUserConnectedData(null)
    setConnected(false)
    console.log(userConnectedData)
  }

  return (
    <>
      <nav>
        <a><Link className='text-link' to="/">TeamUp</Link></a>
        <div>
          <ul id="navbar">
            {!connected && <Link className='text-link' to="/elegir_usuario">LogIn</Link>}
            {!connected && <Link className='text-link' to="/elegir_cuenta">SignUp</Link>}
            {connected && <button className='text-link' onClick={handleLogout}>Logout</button>}
          </ul>
        </div>

      </nav>
    </>
  );
}

export default NavBar;
