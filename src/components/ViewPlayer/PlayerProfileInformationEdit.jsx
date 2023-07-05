import React, { useState } from 'react';
import axios from 'axios'
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const PlayerProfileInformationEdit = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    const [formData, setFormData] = useState({
        name: "", lastname: "", email: "", password: "", phonenumbernumber: "", type: "player"
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
            const url = `${config.route}/profile/update` //TODO:
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

                    <h3 className="newFieldTitle">Editar Perfil</h3>
                    <form className="form" onSubmit={sentToApi}>

                        <div className="">
                            <input type="text" name="name" placeholder="Nuevo Nombre" value={formData.name} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="lastname" placeholder="Nuevo Apellido" value={formData.lastname} onChange={handleChange}></input>
                        </div>


                        <div className="">
                            <input type="text" name="email" placeholder="Nuevo Email" value={formData.email} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="password" placeholder="Nueva Contraseña" value={formData.password} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="phonenumber" placeholder="Nuevo Celular" value={formData.phonenumber} onChange={handleChange}></input>
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