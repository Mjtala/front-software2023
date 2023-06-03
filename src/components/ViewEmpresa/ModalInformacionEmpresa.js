import React from 'react'
import {useState, useEffect, useRef} from 'react';

const ModalInfoEmpresa = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalinfoempresa">
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
            <h2 class="">Información </h2>
                <h3 class="">Correo</h3>
                <p class="">XXXXXX@uc.cl</p>
                <h3 class="">Teléfono</h3>
                <p class="">+569 XXXXXXXX</p>
                <h3 class="">Contraseña</h3>
                <p class="">XXXXXXX</p>
                <h3 class="">Empresa</h3>
                <p class="">XXXXXXX</p>
                <h3 class="">Ubicación</h3>
                <p class="">XXXXXXX</p>
            </div>
        </div>
        </div>
    )
}

export default ModalInfoEmpresa
