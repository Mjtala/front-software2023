import './CompanyProfile.css';
import React, { useState, useEffect } from 'react';
import CompanyInformationModal from '../../components/ViewCompany/CompanyInformationModal';
import CompanyInformationEdit from '../../components/ViewCompany/CompanyInformationEdit';
import CompanyFieldsModal from '../../components/ViewCompany/CompanyFieldsModal';
import CompanyUploadFieldModal from '../../components/ViewCompany/CompanyUploadFieldModal';
import { useLocalStorage } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom';


export default function CompanyProfile() {
    const [isOpenModalCompanyInformation, setIsOpenModalCompanyInformation] = useState(true);
    const [isOpenModalCompanyInformationEdit, setIsOpenModalCompanyInformationEdit] = useState(false);
    const [isOpenModalMyFields, setIsOpenModalMyFields] = useState(false);
    const [isOpenModalUploadField, setIsOpenModalUploadField] = useState(false);

    const [connected] = useLocalStorage("Connected", false)
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const navigate = useNavigate();

    const getData = async () => {

    }

    useEffect(() => {
        if (connected) {
            if (userConnectedData.type === 'company') {
              navigate("/perfil_empresa")
            } 
        } else {
            navigate("/perfil_empresa")
        }
        getData()
    }, [])

    const openModalcompanyinfo = () => {
        setIsOpenModalCompanyInformation(true);
        setIsOpenModalCompanyInformationEdit(false);
        setIsOpenModalMyFields(false);
        setIsOpenModalUploadField(false);
    }
    const openModalcompanyinfoedit = () => {
        setIsOpenModalCompanyInformation(false);
        setIsOpenModalCompanyInformationEdit(true);
        setIsOpenModalMyFields(false);
        setIsOpenModalUploadField(false);
    }
    const openModalMyFields = () => {
        setIsOpenModalCompanyInformation(false);
        setIsOpenModalCompanyInformationEdit(false);
        setIsOpenModalMyFields(true);
        setIsOpenModalUploadField(false);
    }
    const openModalUploadField = () => {
        setIsOpenModalCompanyInformation(false);
        setIsOpenModalCompanyInformationEdit(false);
        setIsOpenModalMyFields(false);
        setIsOpenModalUploadField(true);
    }


    return <div>
        <div className="profileTable">
            <div className="team">
                <button className='item_profile' onClick={() => openModalcompanyinfo()}>Mi Información</button>
                <button className='item_profile' onClick={() => openModalcompanyinfoedit()}>Editar Perfil</button>
                <button className='item_profile' onClick={() => openModalMyFields()}>Mis Canchas</button>
                <button className='item_profile' onClick={() => openModalUploadField()}>Subir Cancha</button>
            </div>
            <div className="rightbox">
                {isOpenModalCompanyInformation && <CompanyInformationModal />}
                {isOpenModalCompanyInformationEdit && <CompanyInformationEdit />}
                {isOpenModalMyFields && <CompanyFieldsModal  />}
                {isOpenModalUploadField && <CompanyUploadFieldModal />}

            </div>

        </div>
    </div>
}



