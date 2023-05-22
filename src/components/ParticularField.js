import { useEffect, useState } from "react";
import axios from "axios";
import HoursTable from "./HoursTable";

function ParticularField(props) {

    // Creamos los hooks asociados a guardar informacion:
    const [name, setName] = useState('')
    const [information, setInformation] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [province, setProvince] = useState('')

    // Creamos los hooks asociados a la reserva de horas
    const [viewreservation, setViewReservation] = useState(false)
    const [hours, setHours] = useState([])
    const [day, setDay] = useState('')
    const [haveday, setHaveDay] = useState(false)

    // Creamos la funcion que muestra las reservas  disponibles:
    const handleViewHours = () => {
        setViewReservation(true);
      };
    const handleNotViewHours = () => {
        setViewReservation(false);
    };

    const getHours = async(day) => {
        try {
            if(haveday) {
                const response = await axios.get(``) // Falta colocar links.
                setHours(response.data)
            }
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    // Creamos el form para seleccionar el dia

    const changeDay = (event) => {
        const { value } = event.target;
        console.log(value)
        setHaveDay(true)
        setDay(value);
    };

    const formSend = (
        <form onSubmit={getHours(day)}>
            <label>
                Seleccionar dia:
                <input type="date" name="day" value={day} onChange={changeDay}/>
            </label>
        </form>
    )

    // Creamos el useEfect base y su funcion asociada
    const getInfo = async() => {
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
    return(
        <> 
            <h1>{name}</h1>
            <h4>Información: {information}</h4>
            <h4>Dirección: {location}</h4>
            <h4>Precio: {price}</h4>
            <h4>Comuna: {province}</h4>


            {viewreservation ? (
                Array.isArray(hours) && hours.length > 0 ? (
                    <HoursTable field={hours}/>
                ) : (
                    <p>No hay horarios disponibles</p>
                )
                ) : (
                    <button onClick={handleViewHours}>Ver horas</button>
                )}
                <div>
                    <button onClick={handleNotViewHours}>Dejar de ver horas</button>
                </div>
        </>
    )
}
export default ParticularField;