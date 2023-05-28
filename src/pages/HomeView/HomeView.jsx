import React from 'react';
import './HomeView.css';
import Button from 'react-bootstrap/Button';
import ButtonChangePath from '../../components/buttons/ButtonChangePath';
import { useNavigate } from 'react-router-dom';

// https://react-bootstrap.github.io/components/buttons/ para los botones
function HomeView() {

  const navigate = useNavigate();

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
          <ButtonChangePath onClick={()=>navigate("/LoginEmpresa")}>Arriendo Mi Cancha</ButtonChangePath>
          <ButtonChangePath onClick={()=>navigate("/LoginJugador")}>Busco Cancha</ButtonChangePath>
        </div>
      </div>
    </div>
    <div  class="full-size-img"></div>
    </>
  )
}

export default HomeView;