// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/

import React from "react";
import './LoginView.css'
import { Link, useNavigate } from "react-router-dom";

function ChooseUser() {

    const navigate = useNavigate();

    return (
        <>
        <body>
            <div className="contenedorcompleto">

                <div className="izqchose">

                    <img src={require("../../assets/player.png")} className="futbolista" alt="logo"></img>
                    <h4 className="tituloderchose">¿Quieres encontrar canchas y jugar?</h4>
                    <p className="parafderchose">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="botonchose" type="button"
                    onClick={()=>navigate("/iniciar_sesion_jugador")}>Ir a Sesión Jugador</button>

                </div>

                <div className="derchose">

                    <img src={require("../../assets/cancha-icon.png")} className="futbolista" alt="logo"></img>
                    <h4 className="tituloder">¿Quieres seguir arrendando tu cancha?</h4>
                    <p className="parafder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="botonchose" type="button"
                    onClick={()=>navigate("/iniciar_sesion_empresa")}>Ir a Sesión Empresa</button>

                </div>
            </div>

        </body>
        </>
    )
}

export default ChooseUser;