import React, { useState } from 'react';
import axios from 'axios'
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const PlayerProfileInformationEdit = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [validation, setValidation] = useState("");
    const [errors, setErrors] = useState({name: "", phonenumber: "", email: "", password: "",
    });

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    const [formData, setFormData] = useState({
        name: "", email: "", password: "", phonenumber: "", type: "player"
    })

    const handleChange = (event) => {
        setValidation("")
        const { name, value } = event.target;
        console.log(name, value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sentToApi = async (event) => {
        event.preventDefault()
        const err = onValidate(formData)
        setErrors(err)
        setValidation("")
        if (Object.keys(err).length === 0) {
            setValidation("Cambios realizados correctamente")
            try {
                const configaxios = {
                    headers: {
                        "Authorization": userConnectedData.id,
                        withCredentials: true
                    }
                };
                const body = formData
                console.log(formData)
                const url = `${config.route}profile/update` //TODO:
                const response = await axios.put(url, body,  configaxios)
                console.log(response.data, "response.data")
            } catch (error) {
                console.log(error, "hay error");
            }
    }
    }


    const onValidate = (form) => {
        let errors = {}
        let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;  //Minimum 8 characters, at least 1 letter, 1 number and 1 special character
        let regexphonenumber = /(\+56|56|)?(2|9)([0-9]){8}/;

        if (form.email) {
            if (!regexEmail.test(form.email)) {
                errors.email = 'El campo "Correo" contiene un formato no válido'
            } 
        }
        if (form.password) {
            if (!regexPassword.test(form.password)) {
                errors.password = 'El campo "Contraseña" debe tener como mínimo 8 caracteres, 1 letra, 1 número y 1 caracter especial'
            }            
        }
        if (form.phonenumber) {
            if (!regexphonenumber.test(form.phonenumber)) {
                errors.phonenumber = 'El campo "Celular" contiene un formato no válido'
            }            
        }

        return errors
    }

    return (
        <div className="companyinfomodaledit">
            <div className="">
                <div className="modal__dialog" onClick={handleModalDialogClick}>

                    <h3 className="newFieldTitle">Editar Perfil</h3>
                    <div className="ommited-text-perfildata"><p>(Campos vacíos se omitirán)</p></div>
                    {validation && <div className="validation-control">{validation}</div>}
                    <form className="form" onSubmit={sentToApi}>
                        {errors.name && <div className="error-control">{errors.name}</div>}
                        <div className="editlabel">
                            <input type="text" name="name" placeholder="Nuevo Nombre" value={formData.name} onChange={handleChange}></input>
                        </div>
                        {errors.phonenumber && <div className="error-control">{errors.phonenumber}</div>}
                        <div className="editlabel">
                            <input type="text" name="phonenumber" placeholder="Nuevo Celular" value={formData.phonenumber} onChange={handleChange}></input>
                        </div>
                        {errors.email && <div className="error-control">{errors.email}</div>}
                        <div className="editlabel">
                            <input type="text" name="email" placeholder="Nuevo Correo" value={formData.email} onChange={handleChange}></input>
                        </div>
                        {errors.password && <div className="error-control">{errors.password}</div>}
                        <div className="editlabel">
                            <input type="text" name="password" placeholder="Nuevo Contraseña" value={formData.password} onChange={handleChange}></input>
                        </div>
                        <div>
                            <button type="submit" className='botonsubmit' onClick={sentToApi}>Aceptar</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}


export default PlayerProfileInformationEdit