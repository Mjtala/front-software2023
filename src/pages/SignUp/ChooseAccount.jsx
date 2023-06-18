// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/
import React from "react";
import './SignUpView.css'
import { useNavigate } from "react-router-dom";

function ChooseAccount() {

    const navigate = useNavigate();

    return (
        <>
        <body>
            <div className="contenedorcompleto">

                <div className="izqchose">

                    <img src={require("../../assets/player.png")} className="futbolista" alt="logo"></img>
                    <h4 className="tituloderchose">¿Quieres comenzar a jugar?</h4>
                    <p className="parafderchose">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="botonchose" type="button"
                    onClick={()=>navigate("/registrar_jugador")}>Registrarme como Jugador</button>

                </div>

                <div className="derchose">

                    <img src={require("../../assets/cancha-icon.png")} className="futbolista" alt="logo"></img>
                    <h4 className="tituloder">¿Quieres visibilizar tus canchas?</h4>
                    <p className="parafder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="botonchose" type="button"
                    onClick={()=>navigate("/registrar_empresa")}>Registrarme como Empresa</button>

                </div>
            </div>

        </body>
        </>
    )
}

export default ChooseAccount;