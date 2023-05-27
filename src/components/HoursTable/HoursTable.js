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
							<button disabled>Cancha no disponible</button>
						) : cancha.horariosJugadores[horario] === cancha.maxJugadores ? (
							<button disabled>Cancha llena</button>
						) : (
							<button onClick={() => handleReservarCupo(cancha.id, horario)}>Registrarse</button>
						)}
						</td>
					))}
					</tr>
				))}
				</tbody>
			</table>
		</div>
	  );
}
export default HoursTable;