import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import config from '../../config'
import Cookies from 'js-cookie';


const CompanyInformationModal = ({ closeModal }) => {

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
                <h2 className="">Información </h2>
                <h3 className="">Correo</h3>
                <p className="">{info.mail}</p>
                <h3 className="">Teléfono</h3>
                <p className="">{info.phone}</p>
                <h3 className="">Contraseña</h3>
                <p className="">{info.password}</p>
                <h3 className="">Empresa</h3>
                <p className="">{info.company}</p>
                <h3 className="">Ubicación</h3>
                <p className="">{info.place}</p>
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

CompanyInformationModal.propTypes = {
    closeModal: PropTypes.func.isRequired
};

export default CompanyInformationModal
