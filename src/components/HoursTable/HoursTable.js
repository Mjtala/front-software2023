import axios from "axios";
import "./HoursTable.css"

function HoursTable({ fields }) {

	const horariosDisponibles = Array.from({ length: 16 }, (_, index) => index + 8); // Horarios disponibles de 8am a 11pm

	const handleReservarCupo = async (canchaId, horario) => {
		try {
			const mensaje = { 'field': canchaId, 'horario': horario }
			const response = await axios.post(``) // Link1234
		} catch (error) {
			console.log(error, "hay error");
		}
	};

	return (
		<div className="DivHours">
			{Array.isArray(fields) && fields.length > 0 ? (
			<table>
				<thead>
				<tr>
					<th>Cancha</th>
					{horariosDisponibles.map((horario) => (
					<th key={horario}>{horario}:00</th>
					))}
				</tr>
				</thead>
				<tbody>
				{fields.map((field) => (
					<tr key={field.id}>
					<td>{field.nombre}</td>
					{horariosDisponibles.map((horario) => (
						<td key={horario}>
						{field.horariosNoDisponibles.includes(horario) ? (
							<button className="botonHoursTableNo" disabled>Cancha no disponible</button>
						) : field.horariosJugadores[horario] === field.maxJugadores ? (
							<button className="botonHoursTableNo" disabled>Cancha llena</button>
						) : (
							<button className="botonHoursTableSi" onClick={() => handleReservarCupo(field.id, horario)}>Registrarse</button>
						)}
						</td>
					))}
					</tr>
				))}
				</tbody>
			</table> ) : (
				<div className="DivNoFields">
					<p>No hay canchas ni horarios que mostrar</p>
				</div>
            )}
		</div> 
	  );
}
export default HoursTable;