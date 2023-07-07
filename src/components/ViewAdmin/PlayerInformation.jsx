import React, { useState, useEffect } from 'react';
import axios from 'axios'
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const PlayerInformation = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [Players, setPlayers] = useState([])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}//AJUSTAR_RUTA` //RUTA DEL BACK 777
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            console.log(data)
            let list = []
            const playersfromback = response.data
            if (Array.isArray(playersfromback) && playersfromback.length > 0) {
                for (let i = 0; i < playersfromback.length; i++) {
                    list.push(CreatePlayers(playersfromback[i]))
                }
            }
            setPlayers(list)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function CreatePlayers(information) {
        return (
            <div key={information.id}>

            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="favoriteModal">
            <div className="">
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <h1 className="fieldsTitles">Jugadores en la plataforma </h1>
                    {Array.isArray(Players) && Players.length > 0 ? (
                        Players
                    ) : (
                        <div className="">
                            <p>No existen jugadores</p>
                            <p>RECORDATORIO: NO EXISTE RUTA EN EL BACK</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default PlayerInformation