// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/
import React, { useState, useEffect } from "react";
import './SignUpView.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from 'usehooks-ts'
import config from '../../config'

function SignUpPlayer() {
    
    const [userConnectedData, setUserConnectedData] = useLocalStorage("UserInfo", null)
    const [connected, setConnected] = useLocalStorage("Connected", false)
    const navigate = useNavigate();
    
    const useForm = (initialData, onValidate) => {
        const [form, setForm] = useState(initialData);
        //const [loading, setLoading] = useState(false);  
        const [errors, setErrors] = useState({});
        const [readyToSendRequest, setReadyToSendRequest] = useState(false);
        const [data, setData] = useState("");
        const handleChange = (event) => {
            const { name, value } = event.target
            setForm({ ...form, [name]: value })
        }

        // el evento recibido es la acción de enviar
        const handleSubmit = (event) => {
            event.preventDefault()  //evita que la página se recargue 
            const err = onValidate(form)
            setErrors(err)
            console.log(Object.keys(err).length);
            if (Object.keys(err).length === 0) {
                console.log("Enviando formulario...")
                setData({ "name": `${form.name}`, "email": `${form.email}`, "password": `${form.password}`, "phonenumber": `${form.phonenumber}` })
                setReadyToSendRequest(true)
            }
        }
        useEffect(() => {
            const sendData = async () => {
                if (connected) {
                    if (userConnectedData.type === 'owner') {
                        navigate("/perfil_empresa");
                    } else if (userConnectedData.type === 'player') {
                        navigate("/perfil_jugador");
                    } else if (userConnectedData.type === 'admin') {
                        navigate("/perfil_admin")
                    } 
                }
                if (readyToSendRequest) {
                    try {
                        console.log("aca estamos en el signup");
                        const response = await axios.post(`${config.route}auth/signup`, form, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            }
                        });
                        console.log(response.data);
                        console.log(response.data.body);
                        if (response.data.message === "Created") {
                            setUserConnectedData({ 
                                name: form.name, 
                                email: form.email, 
                                password: form.password, 
                                phonenumber: form.phonenumber, 
                                type: `player`, 
                                id: response.data['cookie'] })
                            setConnected(true)
                            setForm(initialData);
                        }
                        navigate(`/perfil_jugador`);
                    } catch (error) {
                        console.error('Error:', error);
                    }
                }
            };

            sendData();
        }, [data,readyToSendRequest, connected, userConnectedData, form, initialData, navigate]);

        return { form, errors, handleChange, handleSubmit }
    }

    const initialData = {
        name: '',
        email: '',
        password: '',
        phonenumber: '',
        type: 'player'
    }

    const onValidate = (form) => {
        // que los campos no vengan vacíos
        let errors = {}
        let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;  //Minimum 8 characters, at least 1 letter, 1 number and 1 special character
        let regexphonenumber = /(\+56|56|)?(2|9)([0-9]){8}/;


        if (!form.name.trim()) {
            errors.name = 'El campo "Nombre de usuario" no puede estar vacío'
        }
        if (!form.email.trim()) {
            errors.email = 'El campo "Email" no puede estar vacío'
        } else if (!regexEmail.test(form.email)) {
            errors.email = 'El campo "Correo" contiene un formato no válido'
        }
        if (!form.password.trim()) {
            errors.password = 'El campo "Contraseña" no puede estar vacío'
        } else if (!regexPassword.test(form.password)) {
            errors.password = 'El campo "Contraseña" debe tener como mínimo 8 caracteres, 1 letra, 1 número y 1 caracter especial'
        }
        if (!form.phonenumber.trim()) {
            errors.phonenumber = 'El campo "Celular" no puede estar vacío'
        } else if (!regexphonenumber.test(form.phonenumber)) {
            errors.phonenumber = 'El campo "Celular" contiene un formato no válido'
        }

        return errors
    }

    const { form, errors, handleChange, handleSubmit } = useForm(initialData, onValidate)


    return (
        <>
            <div>
                <div className="contenedorcompleto">

                    <div className="izq">
                        <img src={require("../../assets/teamup-logo.png")} className="imagenlogo" alt="logo"></img>

                        <form className="formularioingreso" onSubmit={handleSubmit}>
                            <p className="tituloizq">Regístrate como Jugador</p>

                            <div className="">
                                <input id="" className="form-control" value={form.name} onChange={handleChange}
                                    placeholder="Nombre de usuario" name="name" />
                            </div>
                            {errors.name && <div className="error-control">{errors.name}</div>}
                            <div className="">
                                <input type="email" className="form-control" value={form.email} onChange={handleChange}
                                    placeholder="Email" name="email" />
                            </div>
                            {errors.email && <div className="error-control">{errors.email}</div>}
                            <div className="">
                                <input type="password" className="form-control" value={form.password} onChange={handleChange}
                                    placeholder="Contraseña" name="password" />
                            </div>
                            {errors.password && <div className="error-control">{errors.password}</div>}
                            <div className="">
                                <input type="phonenumber" className="form-control" value={form.phonenumber} onChange={handleChange}
                                    placeholder="Celular" name="phonenumber" />
                            </div>
                            {errors.phonenumber && <div className="error-control">{errors.phonenumber}</div>}

                            <div className="boton-ingresar2" onClick={handleSubmit}>
                                <button className="boton-inicio-registro" type="button">Crear Cuenta</button>
                            </div>

                            <button type="button" onClick={() => navigate("/registrar_jugador")} className="boton-inicio-registro">Iniciar Sesión</button>

                        </form>


                    </div>

                    <div className="der">

                        <img src={require("../../assets/player.png")} className="futbolista" alt="logo"></img>
                        <h4 className="tituloder">¿Quieres encontrar canchas y jugar?</h4>
                        <p className="parafder">TeamUp te ofrece la oportunidad de encontrar equipos para jugar fútbol sin necesidad de
                    tener un grupo pre-armado. Regístrate y comienza a descubrir la nueva experiencia de solo elegir una cancha e inscribirte para jugar,
                    sin necesidad de conocer a los demás jugadores. Podrás conocer más canchas y formas nuevos equipos.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUpPlayer;