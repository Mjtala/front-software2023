import  axios  from 'axios'
import config from '../../config'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts'; 
import { useParams } from 'react-router-dom';

const ModalEditField = () => {
    const params = useParams()
    const event_id = params.id
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [validation, setValidation] = useState("");
    const navigate = useNavigate();
    
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    const myfields = () => {
        navigate("/perfil_empresa")
    }

    const [formData, setFormData] = useState({
        name: "", address: "", district: "", maxplayers: "", manager: "",
        phonenumber: "", price: ""
    })

    const [formDatarecive, setFormDatarecive] = useState({
        name: "", location: "", price: "", 
        province: "",day: ''
    })

    const getInfo = async () => {
        try {
            const configaxios = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}enclousures/${event_id}` //TODO:
            const response = await axios.get(url, configaxios)
            setFormDatarecive(response.data)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getInfo()
    },[])



    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        setValidation("")
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const sentToApi = async (event) => {
        event.preventDefault()
        setValidation("Cancha editada correctamente")
        try {
            const configaxios = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const body = formData
            console.log(formData)
            const url = `${config.route}enclousures/update` //TODO:
            console.log(url)
            const response = await axios.post(url, body,  configaxios)
            console.log(response.data, "response.data")
        } catch (error) {
            console.log(error, "hay error");
        }  
    }

    return (
        <div className="fieldedit">
            <div className="modal__dialog" onClick={handleModalDialogClick}>

            <h3 className="titulonuevacancha">Editar Cancha </h3>
            <p className='fieldname-edit'>{formDatarecive.name}</p>
            {validation && <div className="validation-control">{validation}</div>}
            <p className='text-omitted'>(Campos vacíos se omitirán)</p>
                <form className="formulario" onSubmit={sentToApi}>
                    
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
                            <button type="submit" className='botonsubmit' onClick={sentToApi}>Aceptar</button>
                        </div>
                        <div>
                            <button type="backeditbutton" className='botonsubmit' onClick={myfields}>Volver</button>
                        </div>

                </form>

        </div>
        </div>
    )
}

export default ModalEditField