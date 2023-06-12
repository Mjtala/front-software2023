// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUpView.css'
import { useNavigate } from "react-router-dom";

function ChooseAccount() {

    const navigate = useNavigate();

    return (
        <>
        <body>
            <section className="section-login background h-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                        <div className="row g-0 ">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <div classNAme="text-center">
                                        <img src={require("../../assets/player.png")} 
                                        className="size-img-player" alt="logo"></img>
                                    </div>
                                    <h4 className="mb-4 text-black">¿Quieres comenzar a jugar sin necesidad de tener un equipo formado?</h4>
                                    <p className="text-black margin-bottom">¡Regístrate y comienza a vivir la experiencia de jugar un partido con personas y equipos nuevos! 
                                    Sabemos que puede resultar difícil conformar un equipo, así que lo hacemos por ti. </p>
                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 size-button" type="button"
                                    onClick={()=>navigate("/SignUpJugador")}>Registrarme como Jugador</button>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center ">
                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <div classNAme="text-center">
                                        <img src={require("../../assets/cancha-icon.png")} 
                                        className="size-img-cancha" alt="logo"></img>
                                    </div>
                                    <h4 className="mb-4 text-black">¿Quieres visibilizar tu cancha y así conseguir más clientes?</h4>
                                    <p className="text-black margin-bottom">¡Regístrate para poner en arriendo tu cancha y poder llegar a más clientes! Te ofrecemos un espacio
                                    en el que puedes mostrar tu cancha a personas que están en busca de un espacio y así aumentar tus ingresos.</p>
                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 size-button" type="button"
                                    onClick={()=>navigate("/SignUpEmpresa")}>Registrarme como Empresa</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </body>
        </>
    )
}

export default ChooseAccount;