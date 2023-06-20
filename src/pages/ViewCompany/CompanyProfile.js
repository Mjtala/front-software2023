import './CompanyProfile.css';
import React, { useState, useEffect } from 'react';
import CompanyInformationModal from '../../components/ViewCompany/CompanyInformationModal';
import CompanyFieldsModal from '../../components/ViewCompany/CompanyFieldsModal';
import CompanyUploadFieldModal from '../../components/ViewCompany/CompanyUploadFieldModal';


export default function CompanyProfile() {
    const [isOpenModalCompanyInformation, setIsOpenModalCompanyInformation] = useState(true);
    const [isOpenModalMyFields, setIsOpenModalMyFields] = useState(false);
    const [isOpenModalUploadField, setIsOpenModalUploadField] = useState(false);

    const getData = async () => {

    }

    useEffect(() => {
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
                <button className='item_profile' onClick={openModalcompanyinfo}>Mi Información</button>
                <button className='item_profile' onClick={openModalMyFields}>Mis Canchas</button>
                <button className='item_profile' onClick={openModalUploadField}>Subir Cancha</button>
            </div>
            <div className="rightbox">
                {isOpenModalCompanyInformation && <CompanyInformationModal isOpen={isOpenModalCompanyInformation} />}
                {isOpenModalMyFields && <CompanyFieldsModal isOpen={isOpenModalMyFields} />}
                {isOpenModalUploadField && <CompanyUploadFieldModal isOpen={isOpenModalUploadField} />}

            </div>

        </div>
    </div>
}



