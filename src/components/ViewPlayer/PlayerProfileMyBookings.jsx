import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const PlayerProfileMyBookings = () => {
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [bookings, setBookings] = useState([1])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "cookie": userConnectedData,
                    withCredentials: true
                }
            };
            const url = `${config.route}profile/info`
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            let list = []
            const bookingsfromback = data.bookings
            if (Array.isArray(bookingsfromback) && bookingsfromback.length > 0) {
                for (let i = 0; i < bookingsfromback.length; i++) {
                    list.push(CreateMyBookings(bookingsfromback[i]))
                }
            }

            setBookings(list)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function CreateMyBookings(params) {
        return (
            <div className="">
                <h2 className="">Reserva {params.number}:</h2>
                <div className="labelinfo">
                    <p className="">Precio: {params.price}</p>
                </div>
                <div className="labelinfo">
                    <p className="">Lugar: {params.place}</p>
                </div>
                <div className="labelinfo">
                    <p className="">Día: {params.date}</p>
                </div>
                <div className="labelinfo">
                    <p className="">Hora: {params.time}</p>
                </div>
                <div className="labelinfo">
                    <p className="registedplayer">Jugadores Inscritos: {params.players}</p>
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
                    <div>
                        {bookings}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerProfileMyBookings