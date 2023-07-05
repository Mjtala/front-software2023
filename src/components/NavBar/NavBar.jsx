import React from 'react';
import './NavBar.css';
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from 'usehooks-ts'

function NavBar() {

  const [userConnectedData, setUserConnectedData] = useLocalStorage("UserInfo", null)
  const [connected, setConnected] = useLocalStorage("Connected", false)
  const navigate = useNavigate();
  const handleLogout = async () => {
    setUserConnectedData(null)
    setConnected(false)
    navigate(`/`);
  }
  console.log(userConnectedData, "userConnectedData")
  return (
    <>
      <nav>
        <Link className='text-link' to="/">TeamUp</Link>
        <div>
          <ul id="navbar">
            {!connected && <Link className='text-link' to="/elegir_usuario">LogIn</Link>}
            {!connected && <Link className='text-link' to="/elegir_cuenta">SignUp</Link>}
            {connected && <Link className='text-link' to="/">Mi perfil</Link>}
            {connected && <Link className='text-link' onClick={handleLogout}>Logout</Link>}
          </ul>
        </div>

      </nav>
    </>
  );
}

export default NavBar;
