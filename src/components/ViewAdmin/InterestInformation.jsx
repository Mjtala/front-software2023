import React, { useState, useEffect } from 'react';
import axios from 'axios'
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const InterestInformation = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [contadorPlayers, setContadorPlayers] = useState([])
    const [contadorOwners, setContadorOwners] = useState([])
    const [contadorFields, setContadorFields] = useState([])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}profile/infoadmin` ////RUTA DEL BACK HECHA A MANO 777
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            setContadorPlayers(data.players)
            setContadorOwners(data.owners)
            setContadorFields(data.fields)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="favoriteModal">
            <div className="">
                <div className="" onClick={handleModalDialogClick}>
                    <h1 className="fieldsTitles">Información de Monitoreo </h1>
                    <p className="numberadmin">Número de Jugadores: {contadorPlayers}</p>
                    <p className="">Número de Empresas: {contadorOwners}</p>
                    <p className="">Número de Canchas: {contadorFields}</p>
                </div>
            </div>
        </div>
    )
}


export default InterestInformation