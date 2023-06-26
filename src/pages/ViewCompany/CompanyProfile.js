import './CompanyProfile.css';
import React, { useState, useEffect } from 'react';
import CompanyInformationModal from '../../components/ViewCompany/CompanyInformationModal';
import CompanyFieldsModal from '../../components/ViewCompany/CompanyFieldsModal';
import CompanyUploadFieldModal from '../../components/ViewCompany/CompanyUploadFieldModal';
import { useLocalStorage } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom';


export default function CompanyProfile() {
    const [isOpenModalCompanyInformation, setIsOpenModalCompanyInformation] = useState(true);
    const [isOpenModalMyFields, setIsOpenModalMyFields] = useState(false);
    const [isOpenModalUploadField, setIsOpenModalUploadField] = useState(false);

    const [connected] = useLocalStorage("Connected", false)
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const navigate = useNavigate();

    const getData = async () => {

    }

    useEffect(() => {
        if (connected) {
            if (userConnectedData.type === 'player') {
              navigate("/perfil_jugador")
            } 
        } else {
            navigate("/")
        }
        getData()
    }, [])

    const openModalcompanyinfo = () => {
        setIsOpenModalCompanyInformation(true);
        setIsOpenModalMyFields(false);
        setIsOpenModalUploadField(false);
    }
    const openModalMyFields = () => {
        setIsOpenModalCompanyInformation(false);
        setIsOpenModalMyFields(true);
        setIsOpenModalUploadField(false);
    }
    const openModalUploadField = () => {
        setIsOpenModalCompanyInformation(false);
        setIsOpenModalMyFields(false);
        setIsOpenModalUploadField(true);
    }
    return <div>
        <div className="profileTable">
            <div className="team">
                <button className='item_profile' onClick={() => openModalcompanyinfo()}>Mi Información</button>
                <button className='item_profile' onClick={() => openModalMyFields()}>Mis Canchas</button>
                <button className='item_profile' onClick={() => openModalUploadField()}>Subir Cancha</button>
            </div>
            <div className="rightbox">
                {isOpenModalCompanyInformation && <CompanyInformationModal />}
                {isOpenModalMyFields && <CompanyFieldsModal  />}
                {isOpenModalUploadField && <CompanyUploadFieldModal />}

            </div>

        </div>
    </div>
}



