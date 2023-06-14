import { useEffect, useState } from "react";
import axios from "axios";
import HoursTable from "../HoursTable/HoursTable";
import "./ParticularField.css"
import {useParams} from 'react-router-dom';

function ParticularField() {

    //Leemos el evento segun el param
    const params = useParams()
    const event_name = params.name


    // Creamos los hooks asociados a guardar informacion:
    const [name, setName] = useState(event_name)
    const [information, setInformation] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [province, setProvince] = useState('')

    // Creamos los hooks asociados a la reserva de horas
    const [viewreservation, setViewReservation] = useState(false);
    const [day, setDay] = useState('')
    const [haveday, setHaveDay] = useState(false)

    const [canchas, setCanchas] = useState([]);

    // Creamos la funcion que muestra las reservas  disponibles:
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
            setCanchas(response.data)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    // Creamos el form para seleccionar el dia

    const formSend = (
        <div className="DivFormPrincipal">
            <form onSubmit={getHours}>
                <div className="DivFormText">
                    <label>
                        Seleccionar día: 
                        <input className="fechas" type="date" name="day" value={day} onChange={(e) => setDay(e.target.value)} />
                    </label>
                </div>
            </form>
        </div>
    )

    // Creamos el useEfect base y su funcion asociada
    const getInfo = async () => {
        try {
            const response = await axios.get(``) // Falta colocar links.
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


    // Por ultimo creamos el return:
    return (
        <div className="DivPrincipalParticularField">
            <div className="DivTitle">
                <h1>{name}</h1>
            </div>
            
            <div className="DivInformacion">
                <h4>Información: {information}</h4>
                <h4>Dirección: {location}</h4>
                <h4>Precio: {price}</h4>
                <h4>Comuna: {province}</h4>
            </div>
            
            <div className="DivFormPrincipal">{formSend}</div>
            <div className="DivMainHours">
                {viewreservation ? (
                    <div className="DivNoHours">
                        <HoursTable canchas={canchas} />
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