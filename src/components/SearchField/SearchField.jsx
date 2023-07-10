import React, {useEffect, useState } from "react";
import axios from 'axios';
import "./SearchField.css"
import { useNavigate } from 'react-router-dom';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

function SearchField() {


    const [fields_shown, setFields] = useState([])
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const navigate = useNavigate();


    const myfields = () => {
        navigate("/")
    }


    const getInfo = async () => {
        try {
            const configaxios = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}enclousures/all` //TODO:
            console.log(url)
            const response = await axios.get(url, configaxios)
            console.log(response)
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
