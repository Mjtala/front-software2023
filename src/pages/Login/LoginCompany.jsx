// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/

import React, { useState, useEffect } from "react";
import './LoginView.css';
import config from "../../config";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocalStorage } from 'usehooks-ts'

function LoginCompany() {

    const [userConnectedData, setUserConnectedData] = useLocalStorage("UserInfo", null)
    const [connected, setConnected] = useLocalStorage("Connected", false)
    const [validation, setValidation] = useState("");

    console.log("Borrar", userConnectedData),
        console.log("BorrarLoginCOmpany", connected)

    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setValidation("");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setValidation("");
    };
    const handleButtonClick = (e) => {
        e.preventDefault();
        setData({ "email": `${email}`, "password": `${password}` });
    };
    useEffect(() => {
        const fetchData = async () => {
            if (connected) {
                if (userConnectedData.type === 'owner') {
                    navigate("/perfil_empresa");
                } else if (userConnectedData.type === 'player') {
                    navigate("/perfil_jugador");
                }
                if (userConnectedData.type === 'admin') {
                    navigate("/perfil_admin")
                } 
            }
            if (data) {
                try {
                    const response = await axios.post(`${config.route}auth/login`, {
                        email: email,
                        password: password
                    });
                    setData(response.data);
                    setUserConnectedData({
                        email: email,
                        password: password,
                        type: response.data['type'],
                        id: response.data['cookie']
                    });
                    setConnected(true)
                    if (response.data['type'] === "admin") {
                        navigate(`/perfil_admin`);
                    } else {
                        navigate(`/perfil_empresa`);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    setValidation("Credenciales Inválidas")
                    setData("")
                }
            }
        };
    
        fetchData();
    }, [data, email, password]);
    

    return (
        <>
            <div>
                <div className="contenedorcompleto">

                    <div className="izq">
                        <img src={require("../../assets/teamup-logo.png")} className="imagenlogo" alt="logo"></img>

                        <form className="formularioingreso">
                            <p className="tituloizq">Ingresa a tu cuenta Empresa</p>

                            <div className="validatelogin">{validation}</div>

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

                            <div className="">
                                <p className="">¿No tienes una cuenta?</p>
                            </div>
                            <button type="button" onClick={() => navigate("/registrar_empresa")} className="boton-inicio-registro">Registrarse</button>

                        </form>

                    </div>

                    <div className="der">

                        <img src={require("../../assets/cancha-icon.png")} className="futbolista" alt="logo"></img>
                        <h4 className="tituloder">¿Quieres seguir arrendando tu cancha?</h4>
                        <p className="parafder">TeamUp es una plataforma que a ti como arrendador te entrega un espacio para que
                        puedas mostrar tus canchas, ofrecerlas a más gente y aumentar así tus ingresos. Inicia sesión y descubre
                        nuevos jugadores interesados, añade más canchas y visualiza el estado actual de tus ofertas.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginCompany;
