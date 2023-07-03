import React, {useEffect, useState } from "react";
import axios from 'axios';
import "./SearchField.css"

function SearchField() {

    const [formData, setFormData] = useState({ page: 0, fields: 5 })
    const [errorhook, setError] = useState('')
    const [fields_shown, setFields] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sentToApi = async () => {
        if (formData.page <= -1 || formData.fields <= 0) {
            setError("Error: Debe poner un page mayor a 0 y un count mayor o igual a 1")
        } else {
            try {
                const response = await axios.get()
                setFields(response.data)
            } catch (error) {
                console.log(error, "hay error");
            }
        }
    }

    const formSend = (
        <form onSubmit={sentToApi}>
            <div className="MainDivForm">
                <div className="DivFormText">
                    <label>
                        Canchas por página:
                        <input className="labelinput" type="number" name="fields" value={formData.fields} data-testid="inputfields" onChange={handleChange} />
                    </label>
                </div>
                <div className="DivFormText">
                    <label>
                        Pagina:
                        <input className="labelinput" type="number" name="page" value={formData.page} data-testid="inputpage" onChange={handleChange} />
                    </label>
                </div>
                <div className="DivFormSummit">
                    <button className="FieldsButtons" type="submit">Mostrar canchas</button>
                </div>
            </div>
        </form>
    )


    useEffect(() => {
        sentToApi(5, 1)
    }, [])

    return (
        <div className="DivPrincipalSearch">
            <div className="DivTitle">
                <h1 className="title">Espacios deportivos</h1>
            </div>
            <div className="ErrorDiv">
                <h2>{errorhook}</h2>
            </div>

            {formSend}

            <div className="MainDivListFields">
                {Array.isArray(fields_shown) && fields_shown.length > 0 ? (
                    fields_shown.map(r => {
                        return (
                            <div key={r.id}>
                                <h3>{r.name}</h3> <a href={`/canchas/${r.name}`}><button>Ver cancha</button></a>
                            </div>

                        )
                    })) : (
                    <div className="DivNoFields">
                        <p>No hay canchas que mostrar</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default SearchField;