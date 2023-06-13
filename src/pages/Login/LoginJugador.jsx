// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/

import React, {useState, useEffect} from "react";
import './LoginView.css';
import config from "../../config";
import { Link,useNavigate, BrowserRouter as Redirect } from "react-router-dom";
import axios from 'axios';
function LoginJugador() {
    const [data, setData] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] =  useState("");
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

    const handleButtonClick = () => {
        setData({"email":`${email}`,"password":`${password}`});
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
                            placeholder="Email" value={email} onChange={handleEmailChange}/>
                        </div>
                        <div className="">
                            <input type="password" class="form-password" 
                            placeholder="Contraseña" value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className="boton-ingresar">
                            <button onClick={handleButtonClick} className="boton-inicio-registro" type="button">Ingresar</button>
                        </div>
                        <Link className="linkcontrasena">¿Olvidaste tu contraseña?</Link>
                        
                        <div className="">
                            <p className="">¿No tienes una cuenta?</p>
                        </div>
                        <button type="button" onClick={()=>navigate("/SignUpJugador")} className="boton-inicio-registro">Registrarse</button>

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

export default LoginJugador;

/*
        <body>
            <section className="section-login background" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-6">
                            <div className="card-body p-md-5 mx-md-4">

                                <div classNAme="text-center">
                                <img src={require("../../assets/teamup-logo.png")} 
                                    className="size-img" alt="logo"></img>
                                </div>

                                <form>
                                <p className="subtitle-login">Ingresa a tu cuenta Jugador</p>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form2Example11" className="form-control"
                                    placeholder="Email" value={email} onChange={handleEmailChange}/>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form2Example22" class="form-control" placeholder="Contraseña" value={password} onChange={handlePasswordChange}/>
                                </div>
                                <div className="text-center pt-1 mb-5 pb-1">
                                    <button onClick={handleButtonClick} className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 size-button" type="button">Ingresar</button>
                                    <Link className="text-muted forgot-password-text">¿Olvidaste tu contraseña?</Link>
                                </div>
                                
                                <div className="d-flex align-items-center justify-content-center pb-4">
                                    <p className="mb-0 me-2">¿No tienes una cuenta?</p>
                                    <button type="button" onClick={()=>navigate("/SignUpJugador")} className="btn btn-outline-dark">Registrarse</button>
                                </div>

                                </form>

                            </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <div classNAme="text-center">
                                    <img src={require("../../assets/player.png")} 
                                    className="size-img-player" alt="logo"></img>
                                </div>
                                <h4 className="mb-4">¿Quieres encontrar canchas y jugar?</h4>
                                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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