import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchField.css"

function SearchField() {

    // Creamos los hooks para almacenar la informacion

    // Primero el hook para ver cuantas canchas mostramos.
    const [formData, setFormData] = useState({ page: 0, fields: 5 })

    // Luego el hook para mostrar errores
    const [errorhook, setError] = useState('')

    // Luego creamos el hook para mostrar las canchas.
    const [fields_shown, setFields] = useState([])

    // Creamos el form y sus funciones asociadas.

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(name, value)
    };

    const sentToApi = async () => {
        if (formData.page <= -1 || formData.fields <= 0) {
            console.log(formData.page, formData.fields)
            setError("Error: Debe poner un page mayor a 0 y un count mayor o igual a 1")
        } else {
            try {
                const response = await axios.get(``) // Link1234
                setFields(response.data)
            } catch (error) {
                console.log(error, "hay error");
            }
        }
    }

    const formSend = (
        <form onSubmit={sentToApi}>
            <div className="DivFormPrincipal">
                <div className="DivFormText">
                    <label>
                        Canchas por pagina:
                        <input className="labelinput" type="number" name="fields" value={formData.fields} onChange={handleChange} />
                    </label>
                </div>
                <div className="DivFormText">
                    <label>
                        Pagina:
                        <input className="labelinput" type="number" name="page" value={formData.page} onChange={handleChange} />
                    </label>
                </div>
                <div className="DivFormSummit">
                    <button className="botonmostrarcanchas" type="submit">Mostrar canchas</button>
                </div>
            </div>
        </form>
    )

    // Creamos el useEffet para cargar la informacion inicial, tomando valores basicos.

    useEffect(() => {
        sentToApi(5, 1) // Los valores van hardcodeados.
    })

    // Por ultimo creamos el return:
    return (
        <div className="DivPrincipalSearch">
            <div className="DivTitle">
                <h1 className="titulo">Espacios deportivos</h1>
            </div>
            <div className="ErrorDiv">
                <h2>{errorhook}</h2>
            </div>
            
            {formSend}

            <div className="DivListFieldsPrincipal">
                {Array.isArray(fields_shown) && fields_shown.length > 0 ? (
                    fields_shown.map(r => {
                        let link = `/fields/${r.name}`
                        return (
                            <div>
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