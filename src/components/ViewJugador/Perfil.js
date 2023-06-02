
import '../assets/styles/salaespera.css';
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import ModalInfo from './ModalInformacion';
import ModalFav from './ModalCFavoritas';
import ModalReservas from './ModalCReservas';


export default function Perfil() {
    const [isOpenModalinfo, setIsOpenModalinfo] = useState(true);
    const [isOpenModalfav, setIsOpenModalfav] = useState(false);
    const [isOpenModalreservas, setIsOpenModalreservas] = useState(false);

    useEffect(()=>{
        async function getData(){
            await axios.get('http://localhost:3000/ruta_especifica').then(
                async (response) => {

            })
            .catch(function (error) {
                console.log(error);
            })
        }
        getData()
    }, [])

    const openModalinfo = () => {
        setIsOpenModalinfo(true);
        setIsOpenModalfav(false);
        setIsOpenModalreservas(false);
    }
    const openModalfav = () => {
        setIsOpenModalinfo(false);
        setIsOpenModalfav(true);
        setIsOpenModalreservas(false);
    }
    const openModalreservas = () => {
        setIsOpenModalinfo(false);
        setIsOpenModalfav(false);
        setIsOpenModalreservas(true);
    }

    return <div>
        <div class="tablaperfil">  
            <div className="agrupacion">
                <button className='item_perfil' onClick={openModalinfo}>Mi Información</button>
                <button className='item_perfil' onClick={openModalfav}>Mis Canchas Favoritas</button>
                <button className='item_perfil' onClick={openModalreservas}>Mis Reservas</button>
            </div>
            <div className="derecha">
            {isOpenModalinfo && <ModalInfo isOpen={isOpenModalinfo}/>}
            {isOpenModalfav && <ModalFav isOpen={isOpenModalfav}/>}
            {isOpenModalreservas && <ModalReservas isOpen={isOpenModalreservas}/>}

            </div>
            
    </div>   
    </div>
  }


  
