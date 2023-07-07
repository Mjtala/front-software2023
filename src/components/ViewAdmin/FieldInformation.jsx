import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const FieldInformation = () => {
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [myFields, setMyFields] = useState([])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}users/fieldsadmin` ////RUTA DEL BACK HECHA A MANO 777
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            console.log(data)
            let list = []
            const myfieldsfromback = response.data
            if (Array.isArray(myfieldsfromback) && myfieldsfromback.length > 0) {
                for (let i = 0; i < myfieldsfromback.length; i++) {
                    list.push(CreateMyFields(myfieldsfromback[i]))
                }
            }
            setMyFields(list)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function CreateMyFields(information) {
        return (
            <div className='admininfo'>

            <div key={information.id}>
                <p className="">Nombre: {information.name}</p>
                {!information.manager && <p className="">Encargado: Juan Pérez</p>}
                {information.manager && <p className="">Encargado: {information.manager}</p>}

                {!information.phonenumber && <p className="">Contacto: No tiene Número</p>}
                {information.phonenumber && <p className="">Télefono de Contacto: {information.phonenumber}</p>}
            </div>
            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="favoriteModal">
            <div className="">
                <div className="" onClick={handleModalDialogClick}>
                    <h1 className="fieldsTitles">Canchas en la plataforma </h1>
                    {Array.isArray(myFields) && myFields.length > 0 ? (
                        myFields
                    ) : (
                        <div className="">
                            <p>No existen canchas</p>
                            <p>RECORDATORIO: NO EXISTE RUTA EN EL BACK</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FieldInformation