// Referencia HTML y CSS: https://mdbootstrap.com/docs/standard/extended/login/
import 'bootstrap/dist/css/bootstrap.min.css';
import React,  {useState, useEffect} from "react";
import './SignUpView.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpJugador() {
    
    let route = "https://backend-software-production.up.railway.app"

    const useForm = (initialData, onValidate) => {
        const [form, setForm] = useState(initialData);
        const [loading, setLoading] = useState(false);  
        const [errors, setErrors] = useState({});
        const [readyToSendRequest, setReadyToSendRequest] = useState(false);
        const [data, setData] = useState("");

        const handleChange = (event) => {
            const {name, value} = event.target
            setForm({ ...form, [name]: value })
        }
        
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
            <section className="section-login background" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                        <div className="row g-0">
                            <div className="col-lg-6">
                            <div className="card-body p-md-5 mx-md-4">

                                <div className="text-center">
                                <img src={require("../../assets/teamup-logo.png")} 
                                    className="size-img" alt="logo"></img>
                                </div>

                                <form onSubmit={handleSubmit}>
                                <p className="subtitle-login">Regístrate como Jugador</p>

                                <div className="form-outline mb-4">
                                    <input id="form2Example11" className="form-control" value={form.name}
                                    onChange={handleChange} placeholder="Nombre de usuario" name="name" />
                                    {errors.name && <div className="alert alert-danger p-1">{errors.name}</div>}
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control" value={form.email}
                                    onChange={handleChange} placeholder="Email" name="email" />
                                    {errors.email && <div className="alert alert-danger p-1">{errors.email}</div>}
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" className="form-control" value={form.password}
                                    onChange={handleChange} placeholder="Contraseña" name="password"/>
                                    {errors.password && <div className="alert alert-danger p-1">{errors.password}</div>}
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="phone" className="form-control" value={form.phone}
                                    onChange={handleChange} placeholder="Celular" name="phone"/>
                                    {errors.phone && <div className="alert alert-danger p-1">{errors.phone}</div>}
                                </div>
                                <div className="text-center pt-1 mb-5 pb-1">
                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 size-button">
                                        Crear cuenta</button>
                                </div>
                                
                                </form>

                                <div className="d-flex align-items-center justify-content-center pb-4">
                                    <p className="mb-0 me-2">¿Ya tienes una cuenta?</p>
                                    <button type="button" onClick={()=>navigate("/LoginJugador")} className="btn btn-outline-dark">Iniciar Sesión</button>
                                </div> 

                                

                            </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <div classNAme="text-center">
                                    <img src={require("../../assets/player.png")} 
                                    className="size-img-player" alt="logo"></img>
                                </div>
                                <h4 className="mb-4">¿Quieres encontrar canchas y equipos para jugar?</h4>
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
        </>
    )
}

export default SignUpJugador;