import React from 'react'
import {useState, useEffect, useRef} from 'react';

const ModalInfo = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalinfo">
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
            <h1 class="">Información </h1>
                <h2 class="">Correo</h2>
                <p class="">XXXXXX@uc.cl</p>
                <h2 class="">Teléfono</h2>
                <p class="">+569 XXXXXXXX</p>
                <h2 class="">Contraseña</h2>
                <p class="">XXXXXXX</p>
            </div>
        </div>
        </div>
    )
}

export default ModalInfo
