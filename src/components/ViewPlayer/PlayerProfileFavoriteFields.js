import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const PlayerProfileFavoriteFields = () => {
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [favorites, setFavorites] = useState([1])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "cookie": userConnectedData,
                    withCredentials: true
                }
            };
            const url = `${config.route}/profile/info`
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            let list = []
            const favoritesfromback = data.favorites
            if (Array.isArray(favoritesfromback) && favoritesfromback.length > 0) {
                for (let i = 0; i < favoritesfromback.length; i++) {
                    list.push(CreateMyFavorites(favoritesfromback[i]))
                }
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
            <div className="" >
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <h1 className="fieldsTitles">Canchas Favoritas </h1>
                    {favorites}
                </div>
            </div>
        </div>
    )
}

export default PlayerProfileFavoriteFields
