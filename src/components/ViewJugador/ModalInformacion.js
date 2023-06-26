import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import PropTypes from 'prop-types';
import { useLocalStorage } from 'usehooks-ts'

const ModalInfo = (closeModal) => {

    const [info, setInfo] = useState("")
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        mail: "",
        phone: "",
        password: ""
    });
    const [userConnectedData] = useLocalStorage("UserInfo", null)

    useEffect(() => {
        async function getData() {
            try {
                //obtener la información del back
                const configaxios = {
                    headers: {
                        "cookie": userConnectedData,
                        withCredentials: true
                    }
                };
                const url = `${config.route}profile/info`
                const response = await axios.get(url, configaxios) // Link1234
                setInfo(response.data)
                setFormData(response.data);
            } catch (error) {
                console.log(error, "hay error");
            }
        }
        getData()
    }, [])

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            // Envía los datos modificados al backend para guardarlos
            const configaxios = {
                headers: {
                    "cookie": userConnectedData,
                    withCredentials: true
                }
            };
            
            const url = `${config.route}users/${userConnectedData.id}/update`;
            await axios.put(url, formData, configaxios);

            setIsEditing(false);
            setInfo(formData);
        } catch (error) {
            console.log(error, "hay error");
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setFormData(info);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    console.log("INFO ES:", info)
    // tengo q preguntarle si esta editando y si es admin tmb
    function getInfoPlayer() {
        return (
            <div className="">
                <h1 className="">Información </h1>
                <h2 className="">Correo</h2>
                {isEditing ? (
                    <input
                        type="text"
                        name="mail"
                        value={formData.mail}
                        onChange={handleChange}
                    />
                ) : (
                    <p className="">{info.mail}</p>
                )}
                <h2 className="">Teléfono</h2>
                {isEditing ? (
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                ) : (
                    <p className="">{info.phone}</p>
                )}
                <h2 className="">Contraseña</h2>
                {isEditing ? (
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                ) : (
                    <p className="">{info.password}</p>
                )}
            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modalinfo">
            <div className="" onClick={closeModal}>
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <div>
                        {getInfoPlayer()}
                        {isEditing ? (
                            <div>
                                <button onClick={handleSaveClick}>Guardar</button>
                                <button onClick={handleCancelClick}>Cancelar</button>
                            </div>
                        ) : (<button onClick={handleEditClick}>Modificar datos</button>) }
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalInfo.propTypes = {
    closeModal: PropTypes.func.isRequired
};

export default ModalInfo

