import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';


const CompanyInformationModal = () => {
    const [info, setInfo] = useState("")
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    useEffect(() => {
        async function getData() {
            try {
                //obtener la información del back
                const axiosConfiguration = {
                    headers: {
                        "cookie": userConnectedData,
                        withCredentials: true
                    }
                };
                const url = `${config.route}/enclousures/${userConnectedData.id}`
                const response = await axios.get(url, axiosConfiguration) 
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
            <div className="">
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

