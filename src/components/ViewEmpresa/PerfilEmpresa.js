
import './perfilempresa.css';
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import ModalInfoEmpresa from './ModalInformacionEmpresa';
import ModalMisCanchas from './ModalMisCanchas';
import ModalSubirCancha from './ModalSubirCancha';


export default function PerfilEmpresa() {
    const [isOpenModalinfoempresa, setIsOpenModalinfoempresa] = useState(true);
    const [isOpenModalmisCanchas, setIsOpenModalmisCanchas] = useState(false);
    const [isOpenModalsubirCancha, setIsOpenModalsubirCanchas] = useState(false);

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

    const openModalinfoempresa = () => {
        setIsOpenModalinfoempresa(true);
        setIsOpenModalmisCanchas(false);
        setIsOpenModalsubirCanchas(false);
    }
    const openModalmisCanchas = () => {
        setIsOpenModalinfoempresa(false);
        setIsOpenModalmisCanchas(true);
        setIsOpenModalsubirCanchas(false);
    }
    const openModalsubirCancha = () => {
        setIsOpenModalinfoempresa(false);
        setIsOpenModalmisCanchas(false);
        setIsOpenModalsubirCanchas(true);
    }

    return <div>
        <div class="tablaperfil">  
            <div className="agrupacion">
                <button className='item_perfil' onClick={openModalinfoempresa}>Mi Información</button>
                <button className='item_perfil' onClick={openModalmisCanchas}>Mis Canchas</button>
                <button className='item_perfil' onClick={openModalsubirCancha}>Subir Cancha</button>
            </div>
            <div className="derecha">
            {isOpenModalinfoempresa && <ModalInfoEmpresa isOpen={isOpenModalinfoempresa}/>}
            {isOpenModalmisCanchas && <ModalMisCanchas isOpen={isOpenModalmisCanchas}/>}
            {isOpenModalsubirCancha && <ModalSubirCancha isOpen={isOpenModalsubirCancha}/>}

            </div>
            
    </div>   
    </div>
  }


  
