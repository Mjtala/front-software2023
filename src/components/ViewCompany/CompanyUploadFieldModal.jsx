import React, { useState } from 'react';
import axios from 'axios'
import config from '../../config'
import InputField from '../InputField/InputField';
import { useLocalStorage } from 'usehooks-ts';

const CompanyUploadFieldModal = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    // const [varTxt, setTxt] = useState("Valor Inicial");
    // const [valInput, setValInput] = useState("XXXX");
    const [formData, setFormData] = useState({
        name: "", address: "", district: "", socialmedia: "", email: ""
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
                    "Authorization": userConnectedData,
                    withCredentials: true
                }
            };
            const url = `${config.route}enclousures` //TODO:
            const response = await axios.get(url, configaxios)
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
                        <InputField name={"name"} placeholder={"Nombre Lugar"} value={formData.name} onChange={handleChange} />
                        <div className="">
                            <input type="text" name="location" placeholder="Dirección" value={formData.address} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="province" placeholder="Comuna" value={formData.district} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="socialmedia" placeholder="Social media" value={formData.socialmedia} onChange={handleChange}></input>
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