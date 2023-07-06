import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const PlayerProfileInformationModal = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [info, setInfo] = useState("")
    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            console.log( "userConnectedData",userConnectedData);
            const url = `${config.route}profile/info`
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
                <h1 className="">Información</h1>
                <h2 className="">Nombre</h2>
                <p className="">{info.name}</p>
                <h2 className="">Correo</h2>
                <p className="">{info.email}</p>
                <h2 className="">Teléfono</h2>
                <p className="">{(info.phonenumber)}</p>
            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modalinfo">
            <div className="" >
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <div>
                        {getInfoPlayer()}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PlayerProfileInformationModal