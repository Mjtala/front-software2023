import React, { useEffect } from 'react';
import './HomeView.css';
import ButtonChangePath from '../../components/Buttons/ButtonChangePath'
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts'


// https://react-bootstrap.github.io/components/buttons/ para los botones!!!
function HomeView() {

  const navigate = useNavigate();
  const [connected] = useLocalStorage("Connected", false)
  const [userConnectedData] = useLocalStorage("UserInfo", null)

  useEffect(() => {
    if (connected) {
      if (userConnectedData.type === 'player') {
        navigate("/perfil_jugador")
      }
      if (userConnectedData.type === 'owner') {
        navigate("/perfil_empresa")
      } 
    }
  }, [])


  return (
    <>
      <div className='background'>
        <div className='Text'>
          <div className='Title'>
            <h1>
              TeamUp
            </h1>
          </div>
          <div className='subtitle'>
            <h3>
              Are you ready for this new experience?
            </h3>
          </div>
          <div className='ContainerButtons'>
            <ButtonChangePath onClick={() => navigate("/iniciar_sesion_empresa")}>Arriendo Mi Cancha</ButtonChangePath>
            <ButtonChangePath onClick={() => navigate("/iniciar_sesion_jugador")}>Busco Cancha</ButtonChangePath>
          </div>
        </div>
      </div>
      <div className="full-size-img"></div>
    </>
  )
}

export default HomeView;