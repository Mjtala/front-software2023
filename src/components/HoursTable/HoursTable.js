import axios from "axios";

function HoursTable(props) {
	
	const horarios = Array.from({ length: 15 }, (_, index) => {
		const startHour = 8;
		const hour = startHour + index;
		const formattedHour = `${hour}:00-${hour + 1}:00`;
		return formattedHour;
	});

	const fields = props.fields; // Asigna props.fields a la constante fields

	const handleReservarCupo = async (canchaId, horario) => {
		try {
			const mensaje = { 'cancha': canchaId, 'horario': horario }
			const response = await axios.post(``) // Link1234
		} catch (error) {
			console.log(error, "hay error");
		}
	};

	return (
		<table>
			<thead>
				<tr>
					<th>Cancha</th>
					{horarios.map((horario) => (
						<th key={horario}>{horario}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{fields.map((field) => (
					<tr key={field.id}>
						<td>{field.nombre}</td>
						{horarios.map((horario) => (
							<td key={horario}>
								{field.disponibilidad[horario] ? (
									<>
										<button
											onClick={() => handleReservarCupo(field.id, horario)}
										>
											{field.cupos[horario]} cupos disponibles
										</button>
									</>
								) : (
									'No disponible'
								)}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
export default HoursTable;