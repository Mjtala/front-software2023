import React from 'react'
import {useState, useEffect, useRef} from 'react';

const ModalSubirCancha = ({ isOpen, closeModal, title, titulo, imagen }) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    const [varTxt, setTxt] = useState("Valor Inicial");
    const [valInput, setValInput] = useState("XXXX");
  
    function cambiaTxt() {
      setTxt(valInput);
    }
    const manejaSubmit = (ev) => {
      ev.preventDefault();
    };
    const cambiaInput = (ev) => {
      setValInput(ev.target.value);
    };

    return (
        <div className="modalinfoempresa">
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>

            <h3 class="titulonuevacancha">Subir Cancha </h3>
                <form class="formulario" onSubmit={manejaSubmit}>
                    <div class="">
                        <input type="text" placeholder="Nombre Lugar" onChange={cambiaInput}></input>
                    </div>

                    <div class="">
                        <input type="text" placeholder="Dirección" onChange={cambiaInput}></input>
                    </div>

                    <div class="">
                        <input type="text" placeholder="Comuna" onChange={cambiaInput}></input>
                    </div>

                    <div class="">
                        <input type="text" placeholder="Cantidad de Jugadores" onChange={cambiaInput}></input>
                    </div>

                    <div class="">
                        <input type="text" placeholder="Encargado/a" onChange={cambiaInput}></input>
                    </div>

                    <div class="">
                        <input type="text" placeholder="Télefono Contacto" onChange={cambiaInput}></input>
                    </div>

                    <div class="">
                        <input type="text" placeholder="Precio" onChange={cambiaInput}></input>
                    </div>

                    <div class="">
                        <label>Horarios Disponibles</label>
                    </div>

                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>8:00 - 9:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>9:00 - 10:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>10:00 - 11:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>11:00 - 12:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>12:00 - 13:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>13:00 - 14:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>14:00 - 15:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>15:00 - 16:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>16:00 - 17:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>17:00 - 18:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>18:00 - 19:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>19:00 - 20:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>20:00 - 21:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>21:00 - 22:00</label>
                    </div>
                    <div>
                        <input type="checkbox" className=''></input>
                        <label className='horario'>22:00 - 23:00</label>
                    </div>

                    <div>
                        <button type="submit" className='botonsubmit' onClick={cambiaTxt}>Subir</button>
                    </div>

                </form>

            </div>
        </div>
        </div>
    )
}

export default ModalSubirCancha