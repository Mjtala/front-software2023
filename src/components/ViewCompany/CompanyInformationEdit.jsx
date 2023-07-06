import React, { useState } from 'react';
import axios from 'axios'
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const CompanyProfileInformationEdit = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [validation, setValidation] = useState("");

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    const [formData, setFormData] = useState({
        name: "", email: "", password: "", phone: "", type: "company"
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
            console.log(url)
            const response = await axios.put(url, body,  configaxios)
            console.log(response.data, "response.data")
        } catch (error) {
            console.log(error, "hay error");
        }   
    }

    return (
        <div className="companyinfomodaledit">
            <div className="">
                <div className="modal__dialog" onClick={handleModalDialogClick}>

                    <h3 className="newFieldTitle">Editar Perfil</h3>
                    <div className="ommited-text-perfildata"><p>(Campos vacíos se omitirán)</p></div>
                    {validation && <div className="validation-control">{validation}</div>}
                    <form className="form" onSubmit={sentToApi}>
                        <div className="editlabel">
                            <input type="text" name="name" placeholder="Nuevo Nombre" value={formData.name} onChange={handleChange}></input>
                        </div>
                        <div className="editlabel">
                            <input type="text" name="phone" placeholder="Nuevo Celular" value={formData.phonenumber} onChange={handleChange}></input>
                        </div>
                        <div className="editlabel">
                            <input type="text" name="email" placeholder="Nuevo Correo" value={formData.email} onChange={handleChange}></input>
                        </div>
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


export default CompanyProfileInformationEdit