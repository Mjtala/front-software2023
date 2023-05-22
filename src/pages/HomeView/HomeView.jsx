import React from 'react';
import ButtonsHomeView from '../../components/buttons/ButtonsHomeView';
import './HomeView.css';
import Button from 'react-bootstrap/Button';
// https://react-bootstrap.github.io/components/buttons/ para los botones
function HomeView() {
return (
  <div className='backgroundImage'>
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
          <Button variant="primary" size="lg" >
            Arriendo Mi Cancha
          </Button>{' '}
          <Button variant="secondary" size="lg">
            Busco Cancha
          </Button>
          
        </div>
      </div>
    </div>
  )
}

export default HomeView;