import React from 'react';
import './AdminHomePage.css';
import ButtonChangePath from '../../components/Buttons/ButtonChangePath';
import { useNavigate } from 'react-router-dom';

export default function AdminHomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="title">Bienvenido Administrador</h1>
        <div className="container">
            <ButtonChangePath onClick={() => navigate("/buscar_cancha")}>Ir a ver Empresas</ButtonChangePath>
            <ButtonChangePath onClick={() => navigate("/buscar_jugador")}>Ir a ver Jugadores</ButtonChangePath>
        </div>
      </div>
    </>
  )
}