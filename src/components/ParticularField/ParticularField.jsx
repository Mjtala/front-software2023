import React, {useEffect, useState } from "react";
import axios from "axios";
import HoursTable from "../HoursTable/HoursTable";
import "./ParticularField.css"
import { useParams } from 'react-router-dom';

function ParticularField() {

    const params = useParams()
    const event_id = params.id
    console.log(event_id)

    const [name, setName] = useState('')
    const [information, setInformation] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [province, setProvince] = useState('')
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
            const response = await axios.get(``)
            setName(response.data.name)
            setInformation(response.data.information)
            setLocation(response.data.location)
            setPrice(response.data.price)
            setProvince(response.data.province)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getInfo()
    })

    return (
        <div className="MainDivParticularField">
            <div className="DivTitle">
                <h1>{name}</h1>
            </div>

            <div className="DivInformation">
                <h4>Información: {information}</h4>
                <h4>Dirección: {location}</h4>
                <h4>Precio: {price}</h4>
                <h4>Comuna: {province}</h4>
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