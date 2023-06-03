import React from 'react'
import {useState, useEffect, useRef} from 'react';

const ModalMisCanchas = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalfav">
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
            <h1 class="titulocanchas">Mis Canchas </h1>
                <h2 class="titulocanchas">San Carlos de Apoquindo</h2>
                    <div className="labelinfo">
                    <p class="">Precio: 20.000</p>
                     </div>
                     <div className="labelinfo">
                    <p class="jugainscrito">Lugar: Las Condes</p>
                     </div>


                     <h2 class="titulocanchas">Parque Araucano </h2>
                    <div className="labelinfo">
                    <p class="">Precio: 15.000</p>
                     </div>
                     <div className="labelinfo">
                    <p class="jugainscrito">Lugar: Las Condes </p>
                     </div>


                     <h2 class="titulocanchas">Los Cancheros </h2>
                    <div className="labelinfo">
                    <p class="">Precio: 23.000 </p>
                     </div>
                     <div className="labelinfo">
                    <p class="jugainscrito">Lugar: La Reina </p>
                     </div>

                     <h2 class="titulocanchas">Club Palestino </h2>
                    <div className="labelinfo">
                    <p class="">Precio: 18.000 </p>
                     </div>
                     <div className="labelinfo">
                    <p class="jugainscrito">Lugar: Las Condes </p>
                     </div>
            </div>
        </div>
        </div>
    )
}

export default ModalMisCanchas
