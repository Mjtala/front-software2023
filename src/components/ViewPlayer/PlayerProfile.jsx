import './PlayerProfile.css';
import React, { useState, useEffect } from 'react';
import PlayerProfileInformationModal from './PlayerProfileInformationModal'
import PlayerProfileFavoriteFields from './PlayerProfileFavoriteFields'
import PlayerProfileMyBookings from './PlayerProfileMyBookings'
import { useLocalStorage } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom';

export default function PlayerProfile() {
    const [isOpenPlayerInformationModal, setIsOpenPlayerInformationModal] = useState(true);
    const [isOpenPlayerFavoriteFields, setIsOpenPlayerFavoriteFields] = useState(false);
    const [isOpenPlayerBookings, setIsOpenPlayerBookings] = useState(false);

    const [connected] = useLocalStorage("Connected", false)
    const [userConnectedData] = useLocalStorage("UserInfo", null)
    const navigate = useNavigate();

    const getData = async () => {

    }

    useEffect(() => {
        if (connected) {
            if (userConnectedData.type === 'owner') {
              navigate("/perfil_empresa")
            } 
        } else {
            navigate("/")
        }
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
                <button className='itemprofile' onClick={() => openPlayerInformationModal()}>Mi Información</button>
                <button className='itemprofile' onClick={() => openPlayerFavoriteFieldsModal()}>Mis Canchas Favoritas</button>
                <button className='itemprofile' onClick={() => openPlayerBookings()}>Mis Reservas</button>
            </div>
            <div className="rightbox">
                {isOpenPlayerInformationModal && <PlayerProfileInformationModal/>}
                {isOpenPlayerFavoriteFields && <PlayerProfileFavoriteFields />}
                {isOpenPlayerBookings && <PlayerProfileMyBookings />}

            </div>

        </div>
    </div>
}



