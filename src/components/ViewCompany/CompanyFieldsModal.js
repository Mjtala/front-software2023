import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const CompanyFieldsModal = () => {
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [myFields, setMyFields] = useState([1])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "cookie": userConnectedData,
                    withCredentials: true
                }
            };
            // TODO: Change the url to the correct one todos los fields de solo una empresa
            const url = `${config.route}/fields`
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            let list = []
            const myfieldsfromback = data.favorites
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

    function CreateMyFields(params) {
        return (
            <div className="">
                <h2 className="fieldsTitles">{params.field_title}</h2>
                <div className="labelinfo">
                    <p className="">{params.price}</p>
                </div>
                <div className="labelinfo">
                    <p className="registedplayer">{params.place}</p>
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