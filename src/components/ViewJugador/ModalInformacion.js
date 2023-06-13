import React from 'react'
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';

const ModalInfo = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const [info, setInfo] = useState([1])

    useEffect(()=>{
        async function getData(){
            //obtener la información del back
            await axios.get('http://localhost:7777/ruta').then(
                async (response) => {
                    let data = response.data
                    //console.log(data)
                    //Await
                    setInfo(data)    
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        getData()
    }, [])

    function armaInfoJugador(params) {
        return (
            <div className="">
                <h1 class="">Información </h1>
                <h2 class="">Correo</h2>
                    <p class="">{params.mail}</p>
                <h2 class="">Teléfono</h2>
                    <p class="">{params.phone}</p>
                <h2 class="">Contraseña</h2>
                    <p class="">{params.password}</p>
            </div>
      )}

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