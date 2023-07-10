// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/

import React from "react";
import './LoginView.css'
import { useNavigate } from "react-router-dom";

function ChooseUser() {

    const navigate = useNavigate();

    return (
        <>
            <div>
                <div className="contenedorcompleto">

                    <div className="izqchose">

                        <img src={require("../../assets/player.png")} className="futbolista" alt="logo"></img>
                        <h4 className="tituloderchose">¿Quieres encontrar canchas y jugar?</h4>
                        <p className="parafderchose">TeamUp te ofrece la oportunidad de encontrar equipos para jugar fútbol sin 
                        necesidad de tener un grupo pre-armado. Inicia sesión y sigue conociendo nuevas personas, formando nuevos
                        equipos y descubriendo nuevas formas de jugar tu deporte favorito.</p>
                        <button className="botonchose" type="button"
                            onClick={() => navigate("/iniciar_sesion_jugador")}>Ir a Sesión Jugador</button>

                    </div>

                    <div className="derchose">

                        <img src={require("../../assets/cancha-icon.png")} className="futbolista" alt="logo"></img>
                        <h4 className="tituloder">¿Quieres seguir arrendando tu cancha?</h4>
                        <p className="parafder">TeamUp es una plataforma que a ti como arrendador te entrega un espacio para que puedas
                        mostrar tus canchas, ofrecerlas a más gente y aumentar así tus ingresos. Inicia sesión y descubre nuevos jugadores
                        interesados, añade más canchas y visualiza el estado actual de tus ofertas.</p>
                        <button className="botonchose" type="button"
                            onClick={() => navigate("/iniciar_sesion_empresa")}>Ir a Sesión Empresa</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ChooseUser;