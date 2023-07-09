import React, { useEffect, useState } from "react";
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
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        name: "", location: "", price: "",
        province: "", day: ''
    })


    const [viewreservation, setViewReservation] = useState(false);
    const [day, setDay] = useState('')
    const [fields, setFields] = useState();
    const [playerperhour] = useState({});

    const handleViewHours = async (day) => {
        console.log("Día", day)
        try {
            if (day) {
                const configaxios = {
                    headers: {
                        "Authorization": userConnectedData.id,
                        withCredentials: true
                    }
                };
                const url = `${config.route}player/datesinfo/${event_id}/${day}` //TODO:
                const response = await axios.get(url, configaxios)
                console.log("Respuesta:", response)
                Object.keys(response.data).forEach(key => {
                    console.log("Key", key)
                    ViewHours(response.data[key])
                });
                console.log(playerperhour)
                const checkdata = {
                    'id': event_id,
                    'name': formData.name,
                    'maxplayers': formData.maxplayers,
                    'playerperhour': playerperhour,
                    'day':day
                }
                console.log(checkdata)
                setFields(checkdata)
                console.log(fields)
                setViewReservation(true);
                setError("")
            } else {
                setError("Debe seleccionar un día")
            }
        } catch (error) {
            console.log(error, "hay error");
        }
    };

    const handleNotViewHours = () => {
        setViewReservation(false);
    };

    const ViewHours = (information) => {
        playerperhour[information.hour] = information.quantity_bookings
        console.log("player hour", information.hour, playerperhour[information.hour])
    };

    const formSend = (
        <div className="MainDivForm">
            <form>
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

    useEffect(() => {
        getInfo()
    }, [])

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
                <li className="Divrowinformation2">
                    <h4>Télefono de Contacto: </h4><p className="textinformation">{formData.phonenumber}</p>
                </li>
            </div>

            <div className="MainDivForm">{formSend}</div>
            {error && <div className="error-control2">{error}</div>}
            <div className="DivMainHours">
                {viewreservation ? (
                    <div className="DivNoHours">
                        <HoursTable field={fields} />
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