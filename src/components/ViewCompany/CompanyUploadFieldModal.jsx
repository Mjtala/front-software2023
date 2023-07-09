import React, { useState } from 'react';
import axios from 'axios'
import config from '../../config' 
import { useLocalStorage } from 'usehooks-ts'; 

const CompanyUploadFieldModal = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [errors, setErrors] = useState({name: "", address: "", district: "", maxplayers: "", manager: "",
    phonenumber: "", price: ""
    });
    const [validation, setValidation] = useState("");

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const [formData, setFormData] = useState({
        name: "", address: "", district: "", maxplayers: "", manager: "",
        phonenumber: "", price: ""
    })


    const handleChange = (event) => {
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
        if (Object.keys(err).length === 0)  {
            setValidation("Cancha creada correctamente")
            try {
                const configaxios = {
                    headers: {
                        "Authorization": userConnectedData.id,
                        withCredentials: true
                    }
                };
                const body = formData
                console.log(formData)
                const url = `${config.route}enclousures/` //TODO:
                console.log(url)
                const response = await axios.post(url, body,  configaxios)
                console.log(response.data, "response.data")
            } catch (error) {
                console.log(error, "hay error");
            } 
        }
    }

    const onValidate = (form) => {
        // que los campos no vengan vacíos
        let errors = {}
        if (!form.name.trim()) {
            errors.name = 'El campo "Nombre Lugar" no puede estar vacío'
        } 
        if (!form.address.trim()) {
            errors.address = 'El campo "Dirección" no puede estar vacío'
        } 
        if (!form.district.trim()) {
            errors.district = 'El campo "Comuna" no puede estar vacío'
        } 
        if (!form.maxplayers.trim()) {
            errors.maxplayers = 'El campo "Cantidad de Jugadores" no puede estar vacío'
        } 
        if (!form.manager.trim()) {
            errors.manager = 'El campo "Encargado/a" no puede estar vacío'
        } 
        if (!form.phonenumber.trim()) {
            errors.phonenumber = 'El campo "Télefono de Contacto" no puede estar vacío'
        } 
        if (!form.price.trim()) {
            errors.price = 'El campo "Precio" no puede estar vacío'
        } 
        return errors
    }


    return (
        <div className="companyuploadfieldmodal">
            <div className="">
                <div className="modal__dialog" onClick={handleModalDialogClick}>

                    <h3 className="newFieldTitle">Subir Cancha </h3>
                    {validation && <div className="validation-control">{validation}</div>}

                    <form className="form" onSubmit={sentToApi}>
                        {errors.name && <div className="error-control">{errors.name}</div>}
                        <div className="">
                            <input type="text" name="name" placeholder="Nombre Lugar" value={formData.name} onChange={handleChange}></input>
                        </div>
                        {errors.address && <div className="error-control">{errors.address}</div>}
                        <div className="">
                            <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange}></input>
                        </div>
                        {errors.district && <div className="error-control">{errors.district}</div>}
                        <div className="">
                            <input type="text" name="district" placeholder="Comuna" value={formData.district} onChange={handleChange}></input>
                        </div>
                        {errors.maxplayers && <div className="error-control">{errors.maxplayers}</div>}
                        <div className="">
                            <input type="text" name="maxplayers" placeholder="Cantidad de Jugadores" value={formData.maxplayers} onChange={handleChange}></input>
                        </div>
                        {errors.manager && <div className="error-control">{errors.manager}</div>}
                        <div className="">
                            <input type="text" name="manager" placeholder="Encargado/a" value={formData.manager} onChange={handleChange}></input>
                        </div>
                        {errors.phonenumber && <div className="error-control">{errors.phonenumber}</div>}
                        <div className="">
                            <input type="text" name="phonenumber" placeholder="Télefono Contacto" value={formData.phonenumber} onChange={handleChange}></input>
                        </div>
                        {errors.price && <div className="error-control">{errors.price}</div>}
                        <div className="">
                            <input type="text" name="price" placeholder="Precio" value={formData.price} onChange={handleChange}></input>
                        </div>

                        <div>
                            <button type="submit" className='botonsubmit' onClick={sentToApi}>Subir</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}


export default CompanyUploadFieldModal
