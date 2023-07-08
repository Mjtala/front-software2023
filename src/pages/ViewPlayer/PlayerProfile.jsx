import './PlayerProfile.css';
import React, { useState, useEffect } from 'react';
import PlayerProfileInformationModal from '../../components/ViewPlayer/PlayerProfileInformationModal'
import PlayerProfileInformationEdit from '../../components/ViewPlayer/PlayerProfileInformationEdit'
import PlayerProfileMyBookings from '../../components/ViewPlayer/PlayerProfileMyBookings'
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts'

export default function PlayerProfile() {
    const [isOpenPlayerInformationModal, setIsOpenPlayerInformationModal] = useState(true);
    const [isOpenPlayerInformationEdit, setIsOpenPlayerInformationEdit] = useState(false);
    const [isOpenPlayerBookings, setIsOpenPlayerBookings] = useState(false);
    const [connected] = useLocalStorage("Connected", false);
    const [userConnectedData] = useLocalStorage("UserInfo", null);
    const navigate = useNavigate();

    const getData = async () => {

    }

    useEffect(() => {
        if (connected) {
            if (userConnectedData.type === 'player') {
              navigate("/perfil_jugador")
            } 
        } else {
            navigate("/perfil_jugador")
        }
        getData()
    }, [])

    const openPlayerInformationModal = () => {
        setIsOpenPlayerInformationModal(true);
        setIsOpenPlayerInformationEdit(false);
        setIsOpenPlayerBookings(false);
    }
    const openPlayerInformationEdit = () => {
        setIsOpenPlayerInformationModal(false);
        setIsOpenPlayerInformationEdit(true);
        setIsOpenPlayerBookings(false);
    }
    const openPlayerBookings = () => {
        setIsOpenPlayerInformationModal(false);
        setIsOpenPlayerInformationEdit(false);
        setIsOpenPlayerBookings(true);
    }
    const searchfield = () => {
        navigate("/buscar_cancha")
    }

    return <div>
        <div className="profileTable">
            <div className="team">
                <button className='itemprofile' onClick={openPlayerInformationModal}>Mi Información</button>
                <button className='itemprofile' onClick={openPlayerInformationEdit}>Editar Perfil</button>
                <button className='itemprofile' onClick={openPlayerBookings}>Mis Reservas</button>
                <button className='itemprofile' onClick={searchfield}>Buscar Canchas</button>
            </div>
            <div className="rightbox">
                {isOpenPlayerInformationModal && <PlayerProfileInformationModal isOpen={isOpenPlayerInformationModal} />}
                {isOpenPlayerInformationEdit && <PlayerProfileInformationEdit isOpen={isOpenPlayerInformationEdit} />}
                {isOpenPlayerBookings && <PlayerProfileMyBookings isOpen={isOpenPlayerBookings} />}

            </div>

        </div>
    </div>
}