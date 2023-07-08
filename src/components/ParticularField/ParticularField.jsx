import React, {useEffect, useState } from "react";
import axios from "axios";
import HoursTable from "../HoursTable/HoursTable";
import "./ParticularField.css"
import { useParams } from 'react-router-dom';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

function ParticularField() {

    const params = useParams()
    const event_id = params.id
    const [userConnectedData] = useLocalStorage("UserInfo", null)

    const [formData, setFormData] = useState({
        name: "", location: "", price: "", 
        province: "",day: ''
    })
    console.log(formData)

    const [viewreservation, setViewReservation] = useState(false);
    const [day, setDay] = useState('')
    const [fields, setFields] = useState([]);

    const handleViewHours = async (day) => {
        console.log(day)
        try {
            const configaxios = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}player/datesinfo/${event_id}/${day}` //TODO:
            const response = await axios.get(url, configaxios)
            setFormData(response.data)
            setViewReservation(true);
            console.log("RESPONSE: ", response)
        } catch (error) {
            console.log(error, "hay error");
        }
    };

    const handleNotViewHours = () => {
        setViewReservation(false);
    };

    const getHours = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(``) // Link1234
            setFields(response.data)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    const formSend = (
        <div className="MainDivForm">
            <form onSubmit={getHours}>
                <div className="DivFormText">
                    <label className="Divselectday">
                        Seleccionar día:
                        <input className="dates" type="date" name="day" value={day} onChange={(e) => setDay(e.target.value)} />
                    </label>
                </div>
            </form>
        </div>
    )

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
            setFormData(response.data)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    /*
    const getHoursTime = async () => {
        try {
            const date = "08-07-2023"
            const configaxios = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}enclousures/${event_id}/${date}` //TODO:
            const response = await axios.get(url, configaxios)
            setFormData(response.data)
        } catch (error) {
            console.log(error, "hay error");
        }
    }
    */
    useEffect(() => {
        getInfo()
    },[])

    return (
        <div className="MainDivParticularField">
            <div className="DivTitle">
                <h1>{formData.name}</h1>
            </div>

            <div className="DivInformation">
                <li className="Divrowinformation">
                    <h4>Dirección: </h4><p className="textinformation">{formData.address}</p>
                </li>
                <li className="Divrowinformation">
                    <h4>Precio: </h4>
                    {!formData.price && (<p className="textinformation">Gratis</p>)}
                    {formData.price && (<p className="textinformation">{formData.price}</p>)}
                </li>
                <li className="Divrowinformation">
                    <h4>Comuna: </h4><p className="textinformation">{formData.district}</p>
                </li>
                <li className="Divrowinformation">
                    <h4>Máximo Jugadores: </h4>
                    {!formData.maxplayers && (<p className="textinformation">10</p>)}
                    {formData.maxplayers && (<p className="textinformation">{formData.maxplayers}</p>)}
                </li>
                <li className="Divrowinformation">
                    <h4>Télefono de Contacto: </h4><p className="textinformation">{formData.phonenumber}</p>
                </li>
                <li className="Divrowinformation2">
                    <h4>Correo de Contacto: </h4><p className="textinformation">{formData.email}</p>
                </li>
            </div>

            <div className="MainDivForm">{formSend}</div>
            <div className="DivMainHours">
                {viewreservation ? (
                    <div className="DivNoHours">
                        <HoursTable fields={fields} />
                        <button className="botonnohour" onClick={handleNotViewHours}>Cerrar horas</button>
                    </div>
                ) : (
                    <div className="DivSeeHours">
                        <button className="botonnohour" onClick={() => handleViewHours(day)}>Ver horas</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ParticularField;