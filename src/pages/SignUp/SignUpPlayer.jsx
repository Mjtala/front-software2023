// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/
import React,  {useState, useEffect} from "react";
import './SignUpView.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocalStorage } from 'usehooks-ts'

function SignUpPlayer() {
    
    let route = "https://backend-software-production.up.railway.app"
    const [userConnectedData, setUserConnectedData] = useLocalStorage("UserInfo", null)
    const [connected, setConnected] = useLocalStorage("Connected", false)

    const useForm = (initialData, onValidate) => {
        const [form, setForm] = useState(initialData);
        // const [loading, setLoading] = useState(false);  
        const [errors, setErrors] = useState({});
        const [readyToSendRequest, setReadyToSendRequest] = useState(false);
        const [data, setData] = useState("");

        const handleChange = (event) => {
            const {name, value} = event.target
            setForm({ ...form, [name]: value })
        }
        
        console.log("Borrar", userConnectedData),
        console.log("Borrar", connected)
        
        // el evento recibido es la acción de enviar
        const handleSubmit = (event) => { 
            event.preventDefault()  //evita que la página se recargue 
            const err = onValidate(form)
            setErrors(err)
            console.log(Object.keys(err).length);
            if (Object.keys(err).length === 0){
                console.log("Enviando formulario...")
                setReadyToSendRequest(true)
                setData({"name":`${form.name}`,"email":`${form.email}`, "password":`${form.password}`, "phone":`${form.phone}`})   
                setUserConnectedData({"name":`${form.name}`,"email":`${form.email}`, "password":`${form.password}`, "phone":`${form.phone}`, "type":`player`})
                setConnected(true)
            }
        }
        useEffect(() => {
            if (readyToSendRequest) {
                console.log("aca estamos")
                axios.post(`${route}/auth/signup`, form, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then(data => {
                    console.log(data);
                    if (data.success === "true") {
                    setForm(initialData);
                    
                    }
                    console.log("aca estamos AAAAA")
                    navigate(`/perfil_jugador`);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }
            }, [data, form.name, form.email, form.password, form.phone]);
    
        return {form, errors, loading, handleChange, handleSubmit}
    }

    const initialData = {
        name: '',
        email: '',
        password: '',
        phone: '',
        type: 'player'
    }

    const onValidate = (form) => {
        // que los campos no vengan vacíos
        let errors = {}
        let regexname = /^[a-zA-Z0-9_-]{4,16}$/;  //letras, numeros, guion y guion bajo
        let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;  //Minimum 8 characters, at least 1 letter, 1 number and 1 special character
        let regexPhone = /(\+56|56|)?(2|9)([0-9]){8}/;


        if (!form.name.trim()) {
            errors.name = 'El campo "Nombre de usuario" no puede estar vacío'
        } else if (!regexname.test(form.name)){
            errors.name = 'El campo "Nombre de usuario" solo acepta letras, números, guión y guión bajo'
        }
        if (!form.email.trim()) {
            errors.email = 'El campo "Email" no puede estar vacío'
        } else if (!regexEmail.test(form.email)){
            errors.email = 'El campo "Correo" contiene un formato no válido'
        }
        if (!form.password.trim()) {
            errors.password = 'El campo "Contraseña" no puede estar vacío'
        } else if (!regexPassword.test(form.password)){
            errors.password = 'El campo "Contraseña" debe tener como mínimo 8 caracteres, 1 letra, 1 número y 1 caracter especial'
        }
        if (!form.phone.trim()) {
            errors.phone = 'El campo "Celular" no puede estar vacío'
        } else if (!regexPhone.test(form.phone)){
            errors.phone = 'El campo "Celular" contiene un formato no válido'
        }

        return errors
    }

    const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)

    const navigate = useNavigate();

    return (
        <>
        <body>
            <div className="contenedorcompleto">

                <div className="izq">
                    <img src={require("../../assets/teamup-logo.png")} className="imagenlogo" alt="logo"></img>

                    <form className="formularioingreso" onSubmit={handleSubmit}>
                        <p className="tituloizq">Regístrate como Jugador</p>

                                <div className="">
                                    <input id="" className="form-control" value={form.name} onChange={handleChange} 
                                    placeholder="Nombre de usuario" name="name"/>
                                </div>
                                {errors.name && <div className="error-control">{errors.name}</div>}
                                <div className="">
                                    <input type="email" className="form-control" value={form.email} onChange={handleChange} 
                                    placeholder="Email" name="email" />
                                </div>
                                {errors.email && <div className="error-control">{errors.email}</div>}
                                <div className="">
                                    <input type="password" className="form-control" value={form.password} onChange={handleChange} 
                                    placeholder="Contraseña" name="password"/>
                                </div>
                                {errors.password && <div className="error-control">{errors.password}</div>}
                                <div className="">
                                    <input type="phone" className="form-control" value={form.phone} onChange={handleChange} 
                                    placeholder="Celular" name="phone"/>
                                </div>
                                {errors.phone && <div className="error-control">{errors.phone}</div>}

                                <div className="boton-ingresar2" onClick={handleSubmit}>
                                    <button className="boton-inicio-registro" type="button">Crear Cuenta</button>
                                </div>

                            <button type="button" onClick={()=>navigate("/registrar_jugador")} className="boton-inicio-registro">Iniciar Sesión</button>
                                
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

export default SignUpPlayer;