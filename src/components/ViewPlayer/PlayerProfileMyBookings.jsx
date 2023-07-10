import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';
import Modal from './PlayerProfileRateBookings';


const PlayerProfileMyBookings = () => {
    const [userConnectedData] = useLocalStorage("UserInfo", null);
    const [bookings, setBookings] = useState("");
    const [modal, setModal] = useState(false);
    const [currentreservation, setCurrentReservation] = useState("");

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Agrega un 0 inicial si el mes es menor a 10
    const day2 = String(currentDate.getDate()).padStart(2, '0'); // Agrega un 0 inicial si el día es menor a 10

    const formattedDate = `${year}-${month}-${day2}`;

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true,
                }
            };
            const url = `${config.route}bookings/`
            const response = await axios.get(url, axiosConfiguration)
            console.log("RESPONSE ID BOOKING", response)
            console.log("RESPONSE ID BOOKING DATA", response.data)
            let bookingsfromback = response.data
            let list = []
            if (Array.isArray(bookingsfromback) && bookingsfromback.length > 0) {
                for (let i = 0; i < bookingsfromback.length; i++) {
                    list.push(ViewMyBookings(bookingsfromback[i][0], bookingsfromback[i][1]))
                }
            }
            console.log("RESPONSE ID BOOKING", response)
            setBookings(list)

        } catch (error) {
            console.log(error, "hay error");
        }
    }


    const handleCancelBooking = async (id) => {

        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true,
                }
            };
            console.log("ID BOOKING", id);
            const url = `${config.route}player/booking/${id}`
            await axios.delete(url, axiosConfiguration)
            await getData()


        } catch (error) {
            console.log(error, "hay error");
        }
    }


    useEffect(() => {
        getData()
      }, [modal]);

    
    const handlereview = async(event) => {
        setCurrentReservation(event)
        setModal(true)
    }


    function ViewMyBookings(information, booking) {
        const isDateBeforeCurrent = booking.date < formattedDate
        console.log(formattedDate)
        console.log(isDateBeforeCurrent)
        console.log(booking.date)
        return (
            <div key={information.id}>
                <div className="labelinfo">
                    <p className="">Nombre: {information.name}</p>
                    <p className="">Comuna: {information.district}</p>
                    <p className="">Dirección: {information.address}</p>
                    {!information.manager && <p className="">Encargado: Juan Pérez</p>}
                    {information.manager && <p className="">Encargado: {information.manager}</p>}
                    {!information.price && <p className="">Precio: Gratis</p>}
                    {information.price && <p className="">Precio: {information.price}</p>}
                    {!information.maxplayers && <p className="">Máx Jugadores: 10</p>}
                    {information.maxplayers && <p className="">Máx Jugadores: {information.maxplayers}</p>}
                    {!booking.hour && <p className="">Hora: No disponible</p>}
                    {booking.hour && <p className="">Hora: {booking.hour}:00 - {parseInt(booking.hour) + 1}:00</p>}
                    
                    <button className='buttondeletebooking' onClick={() => handleCancelBooking(booking.id)}> Eliminar reserva </button>
                    
                    {isDateBeforeCurrent && 
                    <div>
                        <button className='buttondeletebooking'  onClick={() => handlereview(information)}> Calificar </button>
                    </div>      
                    } 
                    {!isDateBeforeCurrent && 
                    <div>
                        <button className='buttondeletebooking'  onClick={() => handlereview(information)} disabled> Es muy temprano para calificar</button>
                    </div>      
                    }

                </div>
            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="bookingModal">
            <div className="">
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <h1 className="">Reservas </h1>

                    <div className="MainDivListFields">
                    {modal===true&&(<Modal setModal={setModal} fieldid={currentreservation.id} fieldname={currentreservation.name} > </Modal>)}
                    {Array.isArray(bookings) && bookings.length > 0 ? (
                        bookings
                    ) : (
                        <div className="">
                            <p>No hay canchas reservadas</p>
                        </div>
                    )}

            </div>

                </div>
            </div>
        </div>
    )
}

export default PlayerProfileMyBookings