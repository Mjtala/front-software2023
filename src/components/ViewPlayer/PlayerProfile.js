import './PlayerProfile.css';
import React, { useState, useEffect } from 'react';
import PlayerProfileInformationModal from './PlayerProfileInformationModal'
import PlayerProfileFavoriteFields from './PlayerProfileFavoriteFields'
import PlayerProfileMyBookings from './PlayerProfileMyBookings'

export default function PlayerProfile() {
    const [isOpenPlayerInformationModal, setIsOpenPlayerInformationModal] = useState(true);
    const [isOpenPlayerFavoriteFields, setIsOpenPlayerFavoriteFields] = useState(false);
    const [isOpenPlayerBookings, setIsOpenPlayerBookings] = useState(false);

    const getData = async () => {

    }

    useEffect(() => {
        getData()
    }, [])

    const openPlayerInformationModal = () => {
        setIsOpenPlayerInformationModal(true);
        setIsOpenPlayerFavoriteFields(false);
        setIsOpenPlayerBookings(false);
    }
    const openPlayerFavoriteFieldsModal = () => {
        setIsOpenPlayerInformationModal(false);
        setIsOpenPlayerFavoriteFields(true);
        setIsOpenPlayerBookings(false);
    }
    const openPlayerBookings = () => {
        setIsOpenPlayerInformationModal(false);
        setIsOpenPlayerFavoriteFields(false);
        setIsOpenPlayerBookings(true);
    }

    return <div>
        <div className="profiletable">
            <div className="team">
                <button className='itemprofile' onClick={openPlayerInformationModal}>Mi Información</button>
                <button className='itemprofile' onClick={openPlayerFavoriteFieldsModal}>Mis Canchas Favoritas</button>
                <button className='itemprofile' onClick={openPlayerBookings}>Mis Reservas</button>
            </div>
            <div className="rightbox">
                {isOpenPlayerInformationModal && <PlayerProfileInformationModal isOpen={isOpenPlayerInformationModal} />}
                {isOpenPlayerFavoriteFields && <PlayerProfileFavoriteFields isOpen={isOpenPlayerFavoriteFields} />}
                {isOpenPlayerBookings && <PlayerProfileMyBookings isOpen={isOpenPlayerBookings} />}

            </div>

        </div>
    </div>
}



