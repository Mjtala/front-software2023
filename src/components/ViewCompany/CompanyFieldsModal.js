import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import Cookies from 'js-cookie';

const CompanyFieldsModal = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const [myFields, setMyFields] = useState([1])
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
            for (let i = 0; i < data.myFields.length; i++) {
                list.push(CreateMyFields(data.myFields[i]))
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
                <h2 class="fieldsTitles">{params.field_title}</h2>
                <div className="labelinfo">
                    <p class="">{params.price}</p>
                </div>
                <div className="labelinfo">
                    <p class="registedplayer">{params.place}</p>
                </div>
            </div>
        )
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="favoriteModal">
            <div className="" onClick={closeModal}>
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <h1 class="fieldsTitles">Mis Canchas </h1>
                    {myFields}
                </div>
            </div>
        </div>
    )
}

export default CompanyFieldsModal