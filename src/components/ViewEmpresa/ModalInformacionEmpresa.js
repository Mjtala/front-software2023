import React from 'react'
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';

const ModalInfoEmpresa = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const [info, setInfo] = useState([1])

    useEffect(()=>{
        async function getData(){
            //obtener la información del back
            try {
                const response = await axios.get('http://localhost:7777/ruta') // Link1234
                let data = response.data
                setInfo(data)    
            } catch (error) {
                console.log(error, "hay error");
            }
        }
        getData()
    }, [])

    function armaInfoEmpresa(params) {
        return (
            <div className="">
                <h2 class="">Información </h2>
                <h3 class="">Correo</h3>
                    <p class="">{params.mail}</p>
                <h3 class="">Teléfono</h3>
                    <p class="">{params.phone}</p>
                <h3 class="">Contraseña</h3>
                    <p class="">{params.password}</p>
                <h3 class="">Empresa</h3>
                    <p class="">{params.empresa}</p>
                <h3 class="">Ubicación</h3>
                    <p class="">{params.place}</p>
            </div>
      )}


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
