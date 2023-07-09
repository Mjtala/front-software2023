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
				<div>
					<h4>Horarios</h4>
					<div className="">
						{fields.map((field) => (
							<div key={field.id}>
								{allHours.map((particularhour) => (
									<div key={particularhour}>
										<p>{particularhour}:00 - {particularhour+1}:00</p>
										{field.unavailablehours.includes(particularhour) ? (
											<button className="botonHoursTableNo" disabled>Cancha no disponible</button>
										) : field.playerperhour[particularhour] === field.maxplayers ? (
											<button className="botonHoursTableNo" disabled>Cancha llena</button>
										) : (
											<button className="botonHoursTableYes" onClick={() => handleReservarCupo(field.id, particularhour)}>Registrarse</button>
										)}
									</div>
								))}
							</div>
						))}
					</div>
				</div>) : (
				<div className="DivNoFields">
					<p>No hay canchas ni horarios que mostrar 2</p>
				</div>
			)}
		</div>
	);
}

HoursTable.propTypes = {
    fields: PropTypes.func.isRequired,
};

export default HoursTable;