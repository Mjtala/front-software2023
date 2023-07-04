import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';
import { Link } from "react-router-dom";

const CompanyFieldsModal = () => {
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [myFields, setMyFields] = useState([1])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}enclousures`
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
            <div key={information.id}>
                <h2 className="fieldsTitles">{information.name}</h2>
                <div className="labelinfo">
                    {!information.price && <p className="registedplayer">Precio: Gratis</p>}
                    {information.price && <p className="registedplayer">Precio: {information.price}</p>}
                    <p className="registedplayer">Dirección: {information.address}</p>
                    <Link className='text-link' to={`/canchas/${information.id}`}>Ver cancha</Link>
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
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <h1 className="fieldsTitles">Mis Canchas </h1>
                    {myFields}
                </div>
            </div>
        </div>
    )
}

export default CompanyFieldsModal