import React, {useEffect, useState } from "react";
import axios from 'axios';
import "./SearchField.css"
import { useNavigate } from 'react-router-dom';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

function SearchField() {

    const [formData, setFormData] = useState({ page: 0, fields: 5 })
    const [errorhook, setError] = useState('')
    const [fields_shown, setFields] = useState([])
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const navigate = useNavigate();


    const myfields = () => {
        navigate("/")
    }

    /*const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    */

    const sentToApi = async () => {
        setFormData({ page: 0, fields: 5 })
        if (formData.page <= -1 || formData.fields <= 0) {
            setError("Error: Debe poner un page mayor a 0 y un count mayor o igual a 1")
        } else {
            try {
                const response = await axios.get()
                setFields(response.data)
            } catch (error) {
                console.log(error, "hay error");
            }
        }
    }

    const formSend = (
        <form onSubmit={sentToApi}>

        </form>
    )


    const getInfo = async () => {
        try {
            const configaxios = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}enclousures/all` //TODO:
            const response = await axios.get(url, configaxios)
            setFields(response.data)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getInfo()
    },[])

    return (
        <div className="DivPrincipalSearch">
            <div className="DivTitle">
                <h1 className="title">Espacios deportivos</h1>
            </div>
            <div className="">
                <h2>{errorhook}</h2>
            </div>

            {formSend}
            <div className="MainDivListFields">
                {Array.isArray(fields_shown) && fields_shown.length > 0 ? (
                    fields_shown.map(r => {
                        return (
                            <div key={r.id} className="labelfield">
                                <h4 className="text-linkname">{r.name}</h4>
                                <p className="labelspecific">Comuna: {r.district}</p>
                                <p className="labelspecific">Dirección: {r.address}</p>
                                {!r.price && <p className="labelspecific">Precio: Gratis</p>}
                                {r.price && <p className="labelspecific">Precio: {r.price}</p>}
                                <p className="labelspecific">Teléfono: {r.phonenumber}</p>
                                <p className="labelspecific">Jugadores Máx: {r.maxplayers}</p>
                                
                                <a href={`/canchas/${r.id}`}><button className="botonsubmit2">Ver cancha</button></a>
                            </div>

                        )
                    })) : (
                    <div className="DivNoFields">
                        <p>No hay canchas que mostrar</p>
                    </div>
                )}

            </div>
            <div className="DivTitleBack">
                <button type="" className='botonsubmit3' onClick={myfields}>Volver</button>
                </div>
        </div>

    )
}

export default SearchField;

/*

    const formSend = (
        <form onSubmit={sentToApi}>
            <div className="MainDivForm">
                <div className="DivFormText">
                    <label>
                        Canchas por página:
                        <input className="labelinput" type="number" name="fields" value={formData.fields} data-testid="inputfields" onChange={handleChange} />
                    </label>
                </div>
                <div className="DivFormText">
                    <label>
                        Pagina:
                        <input className="labelinput" type="number" name="page" value={formData.page} data-testid="inputpage" onChange={handleChange} />
                    </label>
                </div>
                <div className="DivFormSummit">
                    <button className="FieldsButtons" type="submit">Mostrar canchas</button>
                </div>
            </div>
        </form>
    )
*/