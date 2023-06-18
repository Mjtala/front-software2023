import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

const PlayerProfileInformationModal = ({ closeModal }) => {

    const [info, setInfo] = useState("")
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
            setInfo(response.data)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function getInfoPlayer() {
        return (
            <div className="">
                <h1 className="">Información </h1>
                <h2 className="">Correo</h2>
                <p className="">{info.mail}</p>
                <h2 className="">Teléfono</h2>
                <p className="">{info.phone}</p>
                <h2 className="">Contraseña</h2>
                <p className="">{info.password}</p>
            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modalinfo">
            <div className="" onClick={closeModal}>
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <div>
                        {getInfoPlayer()}
                    </div>
                </div>
            </div>
        </div>
    )
}

PlayerProfileInformationModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default PlayerProfileInformationModal
