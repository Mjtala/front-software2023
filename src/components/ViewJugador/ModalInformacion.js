import React from 'react'
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import config from '../../config'
import Cookies from 'js-cookie';


const ModalInfo = ({ isOpen, closeModal, title, titulo, imagen }) => {

    const [info, setInfo] = useState("")
    const cookie = Cookies.get()

    useEffect(()=>{
        async function getData(){
            //obtener la información del back
            const configaxios = {
                headers:{
                  "cookie": cookie,
                  withCredentials: true
                }
              };
            const url = `${config.route}/profile/info`
            await axios.get(url, configaxios  // Link1234
            ).then( async (response) => {
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

    console.log("INFO ES:", info)
    function getInfoPlayer() {
        return (
            <div className="">
                <h1 class="">Información </h1>
                <h2 class="">Correo</h2>
                    <p class="">{info.mail}</p>
                <h2 class="">Teléfono</h2>
                    <p class="">{info.phone}</p>
                <h2 class="">Contraseña</h2>
                    <p class="">{info.password}</p>
            </div>
      )}

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalinfo">
        <div className="" onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <div>
                    {getInfoPlayer()}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ModalInfo
