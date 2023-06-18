import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

const PlayerProfileFavoriteFields = ({ closeModal }) => {
    const [favorites, setFavorites] = useState([1])
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
            for (let i = 0; i < data.favorites.length; i++) {
                list.push(CreateMyFavorites(data.favorites[i]))
            }
            setFavorites(list)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function CreateMyFavorites(params) {
        return (
            <div className="">
                <h2 className="fieldsTitles">{params.field_title}</h2>
                <div className="labelinfo">
                    <p className="">Precio: {params.price}</p>
                </div>
                <div className="labelinfo">
                    <p className="registedplayer">Lugar: {params.place}</p>
                </div>
            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modalfav">
            <div className="" onClick={closeModal}>
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <h1 className="fieldsTitles">Canchas Favoritas </h1>
                    {favorites}
                </div>
            </div>
        </div>
    )
}

PlayerProfileFavoriteFields.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default PlayerProfileFavoriteFields
