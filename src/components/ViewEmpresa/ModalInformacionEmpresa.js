import React from 'react'
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import config from '../../config'

const ModalInfoEmpresa = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const [info, setInfo] = useState("")

    useEffect(()=>{
        console.log("ENTRA EN EL USEEFFECT")
        async function getData(){
            //obtener la información del back
            /*
            const cookie = document.cookie;
            await axios.get(`${config.route}/profile/info`, {
                headers: {
                    Cookie: cookie
                }
                }).then( async (response) => {
                    let data = response.data
                    //console.log(data)
                    //Await
                    setInfo(data)    
            })
            .catch(function (error) {
                console.log(error);
            })*/
        }
        getData()
    }, [])

    function getInfoCompany() {
        return (
            <div className="">
                <h2 class="">Información </h2>
                <h3 class="">Correo</h3>
                    <p class="">{info.mail}</p>
                <h3 class="">Teléfono</h3>
                    <p class="">{info.phone}</p>
                <h3 class="">Contraseña</h3>
                    <p class="">{info.password}</p>
                <h3 class="">Empresa</h3>
                    <p class="">{info.empresa}</p>
                <h3 class="">Ubicación</h3>
                    <p class="">{info.place}</p>
            </div>
      )}


    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalinfoempresa">
        <div className="" onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <div>
                    {getInfoCompany()}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ModalInfoEmpresa
