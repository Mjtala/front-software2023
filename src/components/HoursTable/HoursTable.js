import axios from "axios";
import "./HoursTable.css"

function HoursTable({ canchas }) {

	const horariosDisponibles = Array.from({ length: 16 }, (_, index) => index + 8); // Horarios disponibles de 8am a 11pm

	const handleReservarCupo = async (canchaId, horario) => {
		try {
			const mensaje = { 'cancha': canchaId, 'horario': horario }
			const response = await axios.post(``) // Link1234
		} catch (error) {
			console.log(error, "hay error");
		}
	};

	return (
		<div className="DivHours">
			{Array.isArray(canchas) && canchas.length > 0 ? (
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
				{canchas.map((cancha) => (
					<tr key={cancha.id}>
					<td>{cancha.nombre}</td>
					{horariosDisponibles.map((horario) => (
						<td key={horario}>
						{cancha.horariosNoDisponibles.includes(horario) ? (
							<button className="botonHoursTableNo" disabled>Cancha no disponible</button>
						) : cancha.horariosJugadores[horario] === cancha.maxJugadores ? (
							<button className="botonHoursTableNo" disabled>Cancha llena</button>
						) : (
							<button className="botonHoursTableSi" onClick={() => handleReservarCupo(cancha.id, horario)}>Registrarse</button>
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