import React from 'react';
import './AdminHomePage.css';

export default function AdminHomePage() {

  return (
    <>
      <div>
        <h1 className="title">Bienvenido Administrador</h1>
        <div className="container">
            <h1 className="option">Empresas</h1>
            <h1 className="option">Personas</h1>
        </div>
      </div>
    </>
  )
}
