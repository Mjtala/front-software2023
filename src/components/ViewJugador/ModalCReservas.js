import React from 'react'
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const ModalReservas = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalreservas">
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
            <h1 class="">Reservas </h1>
                <h2 class="">Reserva 1:</h2>
                    <div className="labelinfo">
                    <p class="">Precio: 15.000</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Lugar: San Carlos de Apoquindo, Las Condes</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Día: 23/03/2023</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Hora: 15:00</p>
                     </div>
                     <div className="labelinfo">
                    <p className="jugainscrito">Jugadores Inscritos: 5</p>
                     </div>


                     <h2 class="">Reserva 2: </h2>
                     <div className="labelinfo">
                    <p class="">Precio: 15.000</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Lugar: San Carlos de Apoquindo, Las Condes</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Día: 27/03/2023</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Hora: 11:00</p>
                     </div>
                     <div className="labelinfo">
                    <p className="jugainscrito">Jugadores Inscritos: 1</p>
                     </div>

                     <h2 class="">Reserva 3: </h2>
                     <div className="labelinfo">
                    <p class="">Precio: 15.000</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Lugar: San Carlos de Apoquindo, Las Condes</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Día: 24/03/2023</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Hora: 18:00</p>
                     </div>
                     <div className="labelinfo">
                    <p className="jugainscrito">Jugadores Inscritos: 2</p>
                     </div>
            </div>
        </div>
        </div>
    )
}

export default ModalReservas
