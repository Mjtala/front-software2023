import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../../config'
import { useLocalStorage } from 'usehooks-ts';

const CompanyInformation = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const [Companies, setCompanies] = useState([])

    const getData = async () => {
        try {
            const axiosConfiguration = {
                headers: {
                    "Authorization": userConnectedData.id,
                    withCredentials: true
                }
            };
            const url = `${config.route}users/companysadmin` //RUTA DEL BACK HECHA A MANO 777
            const response = await axios.get(url, axiosConfiguration)
            let data = response.data
            console.log(data)
            let list = []
            const companiesfromback = response.data
            if (Array.isArray(companiesfromback) && companiesfromback.length > 0) {
                for (let i = 0; i < companiesfromback.length; i++) {
                    list.push(CreateCompanies(companiesfromback[i]))
                }
            }
            setCompanies(list)
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    useEffect(() => {
        getData()
    }, [])

    function CreateCompanies(information) {
        return (
            <div className='admininfo'>
                <div key={information.id}>
                <p className="">Nombre: {information.name}</p>
                {!information.phonenumber && <p className="">Celular de Contacto: No tiene Número</p>}
                {information.phonenumber && <p className="">Celular de Contacto: {information.phonenumber}</p>}
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
                    <h1 className="fieldsTitles">Empresas en la plataforma </h1>
                    {Array.isArray(Companies) && Companies.length > 0 ? (
                        Companies
                    ) : (
                        <div className="">
                            <p>Acceso Inválido</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CompanyInformation