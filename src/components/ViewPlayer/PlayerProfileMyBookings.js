import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

const PlayerProfileMyBookings = ({ closeModal }) => {
    const [bookings, setBookings] = useState([1])
    const cookie = Cookies.get()

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "cookie": cookie,
                    withCredentials: true
                }
            };
            const url = `${config.route}/profile/info`
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            let list = []
            for (let i = 0; i < data.bookings.length; i++) {
                list.push(CreateMyBookings(data.bookings[i]))
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
            <div className="" onClick={closeModal}>
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

PlayerProfileMyBookings.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default PlayerProfileMyBookings