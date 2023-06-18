import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';


const ModalCompanyInfo = ({ closeModal }) => {

    const [info, setInfo] = useState("")
    const cookie = Cookies.get()

    useEffect(() => {
        async function getData() {
            try {
                //obtener la información del back
                const configaxios = {
                    headers: {
                        "cookie": cookie,
                        withCredentials: true
                    }
                };
                const url = `${config.route}/profile/info`
                const response = await axios.get(url, configaxios) // Link1234
                setInfo(response.data)
            } catch (error) {
                console.log(error, "hay error");
            }
        }
        getData()
    }, [])

    function getInfoCompany() {
        return (
            <div className="">
                <h2 className="">Información </h2>
                <h3 className="">Correo</h3>
                <p className="">{info.mail}</p>
                <h3 className="">Teléfono</h3>
                <p className="">{info.phone}</p>
                <h3 className="">Contraseña</h3>
                <p className="">{info.password}</p>
                <h3 className="">Empresa</h3>
                <p className="">{info.empresa}</p>
                <h3 className="">Ubicación</h3>
                <p className="">{info.place}</p>
            </div>
        )
    }


    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modalinfoempresa">
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

ModalCompanyInfo.propTypes = {
    closeModal: PropTypes.func.isRequired,
  };
  
export default ModalCompanyInfo

