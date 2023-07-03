import React from 'react';
import './AdminHomePage.css';
import { useNavigate } from 'react-router-dom';

export default function AdminHomePage() {
  const navigate = useNavigate();
  console.log(navigate)

  return (
    <>
      <div>
        <h1 className="title">Bienvenido Administrador</h1>
        <h1 className="title">Dashboard</h1>
        <div className="container">
            <>mostrar dashboard</>
        </div>
      </div>
    </>
  )
}