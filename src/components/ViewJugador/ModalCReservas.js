import React from 'react'
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import config from '../../config'
import Cookies from 'js-cookie';

const ModalReservas = ({ isOpen, closeModal, title, titulo, imagen }) => {
    const [reservas, setReservas] = useState([1])
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
            const url = `${config.route}/profile/info` // Link1234
            await axios.get(url).then( 
                async (response) => {
                    let data = response.data
                    console.log(data)
                    let lista = []
                    for (let i = 0; i< data.reservas.length; i++) {
                        lista.push(armaReservasJugador(data.reservas[i]))
                    }
                    setReservas(lista)
                    
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        getData()
    }, [])

    function armaReservasJugador(params) {
        return (
            <div className="">
                <h2 class="">Reserva {params.number}:</h2>
                    <div className="labelinfo">
                    <p class="">Precio: {params.price}</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Lugar: {params.place}</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Día: {params.date}</p>
                     </div>
                     <div className="labelinfo">
                    <p class="">Hora: {params.time}</p>
                     </div>
                     <div className="labelinfo">
                    <p className="jugainscrito">Jugadores Inscritos: {params.players}</p>
                     </div>
            </div>
      )}


    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalreservas">
        <div className="" onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
            <h1 class="">Reservas </h1>
                <div>
                    {reservas}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ModalReservas
/* Linea 72
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

 */