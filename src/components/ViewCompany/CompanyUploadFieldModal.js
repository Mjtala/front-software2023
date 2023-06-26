import React, { useState } from 'react';
import axios from 'axios'
import config from '../../config'
import InputField from '../InputField/InputField';
import { useLocalStorage } from 'usehooks-ts';

const CompanyUploadFieldModal = () => {

    const [userConnectedData] = useLocalStorage("UserInfo", null)

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }
    // const [varTxt, setTxt] = useState("Valor Inicial");
    // const [valInput, setValInput] = useState("XXXX");
    const [formData, setFormData] = useState({
        name: "", location: "", province: "", max_players: "", administrator: "",
        phone: "", price: "", box8: false, box9: false, box10: false, box11: false,
        box12: false, box13: false, box14: false, box15: false, box16: false,
        box17: false, box18: false, box19: false, box20: false, box21: false, box22: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeBox = (event, check) => {
        const { name, value } = event.target;
        console.log(name, value, check)
        setFormData((prevData) => ({
            ...prevData,
            [name]: check,
        }));
    };

    const sentToApi = async () => {
        try {
            const configaxios = {
                headers: {
                    "cookie": userConnectedData,
                    withCredentials: true
                }
            };
            const url = `${config.route}profile/info/inex`
            const response = await axios.get(url, configaxios) // Link1234
            console.log(response.data, "response.data")
        } catch (error) {
            console.log(error, "hay error");
        }
    }

    return (
        <div className="companyinfomodal">
            <div className="">
                <div className="modal__dialog" onClick={handleModalDialogClick}>

                    <h3 className="newFieldTitle">Subir Cancha </h3>
                    <form className="form" onSubmit={sentToApi}>
                        <InputField name={"name"} placeholder={"Nombre Lugar"} value={formData.name} onChange={handleChange} />
                        <div className="">
                            <input type="text" name="location" placeholder="Dirección" value={formData.location} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="province" placeholder="Comuna" value={formData.province} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="max_players" placeholder="Cantidad de Jugadores" value={formData.max_players} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="administrator" placeholder="Encargado/a" value={formData.administrator} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="phone" placeholder="Télefono Contacto" value={formData.phone} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <input type="text" name="price" placeholder="Precio" value={formData.price} onChange={handleChange}></input>
                        </div>

                        <div className="">
                            <label>Horarios Disponibles</label>
                        </div>

                        <div>
                            <input type="checkbox" className='' name="box8" value={formData.box8} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>8:00 - 9:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box9" value={formData.box9} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>9:00 - 10:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box10" value={formData.box10} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>10:00 - 11:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box11" value={formData.box11} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>11:00 - 12:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box12" value={formData.box12} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>12:00 - 13:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box13" value={formData.box13} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>13:00 - 14:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box14" value={formData.box14} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>14:00 - 15:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box15" value={formData.box15} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>15:00 - 16:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box16" value={formData.box16} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>16:00 - 17:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box17" value={formData.box17} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>17:00 - 18:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box18" value={formData.box18} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>18:00 - 19:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box19" value={formData.box19} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>19:00 - 20:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box20" value={formData.box20} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>20:00 - 21:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box21" value={formData.box21} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>21:00 - 22:00</label>
                        </div>
                        <div>
                            <input type="checkbox" className='' name="box22" value={formData.box22} onChange={(event) => handleChangeBox(event, event.target.checked)}></input>
                            <label className='horario'>22:00 - 23:00</label>
                        </div>

                        <div>
                            <button type="submit" className='botonsubmit' onClick={sentToApi}>Subir</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}


export default CompanyUploadFieldModal