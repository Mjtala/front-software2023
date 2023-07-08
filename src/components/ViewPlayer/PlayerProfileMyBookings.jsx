import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';
import { Link } from "react-router-dom";
import {bookingsMock} from '../../mocks/booking';
import Modal from './PlayerProfileRateBookings';


const PlayerProfileMyBookings = () => {
    const [userConnectedData] = useLocalStorage("UserInfo", null);
    const [bookings, setBookings] = useState("");
    const [modal, setModal] = useState(false);

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
            let bookingsfromback = response.data
            console.log("RESPONSE RESPONSE:", response)
            let list = []
            console.log("BOOKINGFROMBACK:", bookingsfromback.length)
            console.log("ARRAY:", Array.isArray(bookingsfromback))
            if (Array.isArray(bookingsfromback) && bookingsfromback.length > 0) {
                for (let i = 0; i < bookingsfromback.length; i++) {
                    list.push(CreateMyBookings(bookingsfromback[i]))
                }
            }

            for (let i = 0; i < bookingsMock.length; i++) {
                console.log(bookingsMock[i])
                list.push(CreateMyBookings(bookingsMock[i]))
            }

            setBookings(list)

        } catch (error) {
            console.log(error, "hay error");
        }
    }


    const handleCancelBooking = async (id) => {
        console.log(id)

        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true,
                }
            };
            const url = `${config.route}player/booking/:${id}`
            const response = await axios.delete(url, axiosConfiguration)

            let data = response.data
            console.log(data)

            console.log("BOOKING:", bookings)

        } catch (error) {
            console.log(error, "hay error");
        }
    }


    useEffect(() => {
        console.log(modal);
      }, [modal]);

    useEffect(() => {
        getData()
    }, [])


    function CreateMyBookings(information) {
        console.log("INFO:")
        console.log(information.date)
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
                    <button onClick={() => handleCancelBooking(information.id)}> Eliminar reserva </button>
                    <div>
                        <button onClick={() => setModal(true)}> Calificar </button>
                    </div>      
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
                    {modal===true&&(<Modal setModal={setModal}> </Modal>)}
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