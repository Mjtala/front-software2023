// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/
import React from "react";
import './SignUpView.css'
import { useNavigate } from "react-router-dom";

function ChooseAccount() {

    const navigate = useNavigate();

    return (
        <>
        <div>
            <div className="contenedorcompleto">

                <div className="izqchose">

                    <img src={require("../../assets/player.png")} className="futbolista" alt="logo"></img>
                    <h4 className="tituloderchose">¿Quieres comenzar a jugar?</h4>
                    <p className="parafderchose">TeamUp te ofrece la oportunidad de encontrar equipos para jugar fútbol sin necesidad de
                    tener un grupo pre-armado. Regístrate y comienza a descubrir la nueva experiencia de solo elegir una cancha e inscribirte para jugar,
                    sin necesidad de conocer a los demás jugadores. Podrás conocer más canchas y formas nuevos equipos.</p>
                    <button className="botonchose" type="button"
                    onClick={()=>navigate("/registrar_jugador")}>Registrarme como Jugador</button>

                </div>

                <div className="derchose">

                    <img src={require("../../assets/cancha-icon.png")} className="futbolista" alt="logo"></img>
                    <h4 className="tituloder">¿Quieres visibilizar tus canchas?</h4>
                    <p className="parafder">TeamUp es una plataforma que a ti como arrendador te entrega un espacio para que puedas mostrar
                    tus canchas, ofrecerlas a más gente y aumentar así tus ingresos. Regístrate y no pierdas ningún cliente más,
                    únete a la comunidad y potencia tu recinto deportivo.</p>
                    <button className="botonchose" type="button"
                    onClick={()=>navigate("/registrar_empresa")}>Registrarme como Empresa</button>

                </div>
            </div>

        </div>
        </>
    )
}

export default ChooseAccount;