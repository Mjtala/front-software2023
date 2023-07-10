import React from 'react';
import './NotFound.css';
import { useNavigate } from "react-router-dom";


export default function NotFoundpage() {
  const navigate = useNavigate();
  return (
      <div>
        <div className="container">
          <div className="profileTable">
            <div>
              <h1 className="title3">Página no encontrada</h1>
                <button className='bottoncrack' onClick={() => navigate("/")}>Ir a Inicio</button>
            </div>
          </div>
        </div>
      </div>
  )
}