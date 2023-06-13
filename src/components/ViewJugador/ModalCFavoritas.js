import React from 'react'
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';

const ModalFav = ({ isOpen, closeModal, title, titulo, imagen }) => {
    const [favoritas, setFavoritas] = useState([1])

    useEffect(()=>{
        async function getData(){
            //obtener la información del back
            await axios.get('http://localhost:7777/ruta').then(
                async (response) => {
                    let data = response.data
                    console.log(data)
                    let lista = []
                    for (let i = 0; i< data.favoritas.length; i++) {
                        lista.push(armaFavoritasJugador(data.favoritas[i]))
                    }
                    setFavoritas(lista)
                    
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        getData()
    }, [])

    function armaFavoritasJugador(params) {
        return (
            <div className="">
                <h2 class="titulocanchas">{params.titulo_cancha}</h2>
                    <div className="labelinfo">
                    <p class="">Precio: {params.price}</p>
                     </div>
                     <div className="labelinfo">
                    <p class="jugainscrito">Lugar: {params.place}</p>
                     </div>
            </div>
      )}

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
  
    return (
        <div className="modalfav">
        <div className="" onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
            <h1 class="titulocanchas">Canchas Favoritas </h1>
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

export default ModalFav
