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
                    onClick={()=>navigate("/LoginJugador")}>Ir a Sesión Jugador</button>

                </div>

                <div className="derchose">

                    <img src={require("../../assets/cancha-icon.png")} className="futbolista" alt="logo"></img>
                    <h4 className="tituloder">¿Quieres seguir arrendando tu cancha?</h4>
                    <p className="parafder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="botonchose" type="button"
                    onClick={()=>navigate("/LoginEmpresa")}>Ir a Sesión Empresa</button>

                </div>
            </div>

        </body>
        </>
    )
}

export default ChooseUser;


/*

        <body>
            <section className="section-login background h-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                        <div className="row g-0 ">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <div className="text-center">
                                        <img src={require("../../assets/player.png")} 
                                        className="size-img-player" alt="logo"></img>
                                    </div>
                                    <h4 className="mb-4 text-black">¿Quieres jugar sin necesidad de tener un equipo formado?</h4>
                                    <p className="text-black margin-bottom">Inicia sesión para seguir encontrando nuevos equipos con los que jugar,
                                    nuevas canchas y nuevas experiencias.</p>
                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 size-button" type="button"
                                    onClick={()=>navigate("/LoginJugador")}>Ir a Sesión Jugador</button>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center ">
                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <div classNAme="text-center">
                                        <img src={require("../../assets/cancha-icon.png")} 
                                        className="size-img-cancha" alt="logo"></img>
                                    </div>
                                    <h4 className="mb-4 text-black">¿Quieres seguir arrendando tu cancha?</h4>
                                    <p className="text-black margin-bottom">Inicia sesión para ver el estado de solicitud de tus canchas, aceptar o rechazar reservas y agregar 
                                    más a tu lista de ofertas.</p>
                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 size-button" type="button"
                                    onClick={()=>navigate("/LoginEmpresa")}>Ir a Sesión Empresa</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </body>

*/