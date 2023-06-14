import React from 'react'
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import config from '../../config'
import Cookies from 'js-cookie';


const CompanyInformationModal = ({ isOpen, closeModal, title, titulo, picture }) => {

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

    function getInfoCompany() {
        return (
            <div className="">
                <h2 class="">Información </h2>
                <h3 class="">Correo</h3>
                <p class="">{info.mail}</p>
                <h3 class="">Teléfono</h3>
                <p class="">{info.phone}</p>
                <h3 class="">Contraseña</h3>
                <p class="">{info.password}</p>
                <h3 class="">Empresa</h3>
                <p class="">{info.company}</p>
                <h3 class="">Ubicación</h3>
                <p class="">{info.place}</p>
            </div>
        )
    }


    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="companyinfomodal">
            <div className="" onClick={closeModal}>
                <div className="modal__dialog" onClick={handleModalDialogClick}>
                    <div>
                        {getInfoCompany()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInformationModal
