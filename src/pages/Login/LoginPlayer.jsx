// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/

import React, { useState, useEffect } from "react";
import './LoginView.css';
import config from "../../config";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocalStorage } from 'usehooks-ts'


function LoginPlayer() {

    const [userConnectedData, setUserConnectedData] = useLocalStorage("UserInfo", null)
    const [connected, setConnected] = useLocalStorage("Connected", false)

    const [data, setData] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    console.log("Borrar", userConnectedData),
    console.log("Borrar", connected)

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleButtonClick = () => {
        setData({ "email": `${email}`, "password": `${password}` });
        // TODO: Cambiar el id por el que devuelve el backend
        setUserConnectedData({ "email": `${email}`, "password": `${password}`, "type": `player`, "id": 2})
        setConnected(true)
    };

    useEffect(() => {
        if (data) {
            console.log("aca estamos")
            axios.post(`${config.route}/auth/login`, {
                email: email,
                password: password
            })
                .then(data => {
                    setData(data);
                    navigate(`/perfil_jugador`);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [data, email, password]);

    return (
        <>
            <body>
                <div className="contenedorcompleto">

                    <div className="izq">
                        <img src={require("../../assets/teamup-logo.png")} className="imagenlogo" alt="logo"></img>

                        <form className="formularioingreso">
                            <p className="tituloizq">Ingresa a tu cuenta Jugador</p>

                            <div className="">
                                <input type="email" className="form-email"
                                    placeholder="Email" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="">
                                <input type="password" className="form-password"
                                    placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                            </div>
                            <div className="boton-ingresar">
                                <button onClick={handleButtonClick} className="boton-inicio-registro" type="button">Ingresar</button>
                            </div>
                            <Link className="linkcontrasena">¿Olvidaste tu contraseña?</Link>

                            <div className="">
                                <p className="">¿No tienes una cuenta?</p>
                            </div>
                            <button type="button" onClick={() => navigate("/registrar_jugador")} className="boton-inicio-registro">Registrarse</button>

                        </form>

                    </div>

                    <div className="der">

                        <img src={require("../../assets/player.png")} className="futbolista" alt="logo"></img>
                        <h4 className="tituloder">¿Quieres encontrar canchas y jugar?</h4>
                        <p className="parafder">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    </div>
                </div>

            </body>
        </>
    )
}

export default LoginPlayer;