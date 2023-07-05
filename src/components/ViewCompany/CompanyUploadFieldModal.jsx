import React, { useState } from 'react';
import axios from 'axios'
import config from '../../config' 
import { useLocalStorage } from 'usehooks-ts'; 

const CompanyUploadFieldModal = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)

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


    const sentToApi = async () => {
        try {
            const configaxios = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const body = formData
            console.log(formData)
            const url = `${config.route}enclousures/create` //TODO:
            console.log(url)
            const response = await axios.post(url, body,  configaxios)
            console.log(response.data, "response.data")
        } catch (error) {
            console.log(error, "hay error");
        } 
    }

    return (
        <div className="companyinfomodal">
            <div className="">
                <div className="modal__dialog" onClick={handleModalDialogClick}>

                    <h3 className="newFieldTitle">Subir Cancha </h3>
                    <form className="form" onSubmit={sentToApi}>
                        <div className="">
                            <input type="text" name="name" placeholder="Nombre Lugar" value={formData.name} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="address" placeholder="Dirección" value={formData.address} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="district" placeholder="Comuna" value={formData.district} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="maxplayers" placeholder="Cantidad de Jugadores" value={formData.maxplayers} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="manager" placeholder="Encargado/a" value={formData.manager} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="phonenumber" placeholder="Télefono Contacto" value={formData.phonenumber} onChange={handleChange}></input>
                        </div>

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
