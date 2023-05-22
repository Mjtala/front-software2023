import { useEffect, useState } from "react";
import axios from "axios";

function SearchField() {

    // Creamos los hooks para almacenar la informacion

    // Primero el hook para ver cuantas canchas mostramos.
    const [formData, setFormData] = useState({ page:0, fields:0})

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

    const sentToApi = async() => {
        if (formData.page <= -1 || formData.fields <= 0) {
            setError("Error: Debe poner un page mayor a 0 y un count mayor o igual a 1")
        } else {
            try {
                const response = await axios.get(``) // Falta colocar links.
                setFields(response.data)
            } catch (error) {
                console.log(error, "hay error");
            }
        }
    }

    const formSend = (
        <form onSubmit={sentToApi}>
            <label>
                Canchas por pagina:
                <input type="number" name="fields" value={formData.fields} onChange={handleChange}/>
            </label>
            <label>
                Pagina:
                <input type="number" name="page" value={formData.page} onChange={handleChange}/>
            </label>
        </form>
    )

    // Creamos el useEffet para cargar la informacion inicial, tomando valores basicos.

    useEffect(() => {
        sentToApi(5,0) // Los valores van hardcodeados.
    })

    // Por ultimo creamos el return:
    return (
        <>
            <h1>Espacios deportivos</h1>
            {formSend}
            {Array.isArray(fields_shown) && fields_shown.length > 0 ? (
                fields_shown.map(r => {
                    let link = `/fields/${r.name}`
                    return (
                    <div>
                        <h3>{r.name}</h3> <a href={link}><button>Ver cancha</button></a>
                    </div>
                    
                )
            }) ) : (
                <p>No hay canchas que mostrar</p>
            ) }
        </>
        
    )
}

export default SearchField;