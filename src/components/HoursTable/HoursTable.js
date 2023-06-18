import axios from "axios";
import React from "react";
import "./HoursTable.css"
import PropTypes from 'prop-types';

function HoursTable({ fields }) {

	const allHours = Array.from({ length: 16 }, (_, index) => index + 8);

	const handleReservarCupo = async (fieldId, hour) => {
		try {
			const data = { 'field': fieldId, 'hour': hour }
			const response = await axios.post(``)
			console.log(response.data, "response.data")
			console.log(data, "data")
		} catch (error) {
			console.log(error, "hay error")
		}
	};

	return (
		<div className="DivHours">
			{Array.isArray(fields) && fields.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Cancha</th>
							{allHours.map((particularhour) => (
								<th key={particularhour}>{particularhour}:00</th>
							))}
						</tr>
					</thead>
					<tbody>
						{fields.map((field) => (
							<tr key={field.id}>
								<td>{field.name}</td>
								{allHours.map((particularhour) => (
									<td key={particularhour}>
										{field.unavailablehours.includes(particularhour) ? (
											<button className="botonHoursTableNo" disabled>Cancha no disponible</button>
										) : field.playerperhour[particularhour] === field.maxplayers ? (
											<button className="botonHoursTableNo" disabled>Cancha llena</button>
										) : (
											<button className="botonHoursTableYes" onClick={() => handleReservarCupo(field.id, particularhour)}>Registrarse</button>
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>) : (
				<div className="DivNoFields">
					<p>No hay canchas ni horarios que mostrar</p>
				</div>
			)}
		</div>
	);
}

HoursTable.propTypes = {
    fields: PropTypes.func.isRequired,
};

export default HoursTable;