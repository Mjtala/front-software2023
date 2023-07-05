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
                const axiosConfiguration = {
                    headers: {
                        "Authorization": userConnectedData.id,
                        withCredentials: true,
                    }
                };
                const url = `${config.route}profile/info`
                const response = await axios.get(url, axiosConfiguration) 
                setInfo(response.data)
            } catch (error) {
                console.log(error, "hay error");
            }
        }
        getData()
    }, [])

    console.log(info, "info")
    function getInfoCompany() {
        return (
            <div className="">
                <h2 className="">Información</h2>
                <h3 className="">Empresa</h3>
                <p className="">{info.name}</p>
                <h3 className="">Correo</h3>
                <p className="">{info.email}</p>
                <h3 className="">Teléfono</h3>
                <p className="">{info.phonenumber}</p>
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

