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

    const handleViewHours = () => {
        setViewReservation(true);
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
                    <label>
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
    },[])

    return (
        <div className="MainDivParticularField">
            <div className="DivTitle">
                <h1>{formData.name}</h1>
            </div>

            <div className="DivInformation">
                <h4>Dirección: {formData.address}</h4>
                {!formData.price && <h4>Precio: Gratis</h4>}
                {formData.price && <h4>Precio: {formData.price}</h4>}
                <h4>Comuna: {formData.district}</h4>
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
                        <button className="botonnohour" onClick={handleViewHours}>Ver horas</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ParticularField;