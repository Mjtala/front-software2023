import axios from "axios";
import React, { useState } from "react";
import "./HoursTable.css"
import PropTypes from 'prop-types';
import { useLocalStorage } from 'usehooks-ts';
import config from '../../config'

function HoursTable(field) {

	const [userConnectedData] = useLocalStorage("UserInfo", null)

	const [success, setSuccess] = useState(false)

	const allHours = Array.from({ length: 16 }, (_, index) => index + 8);

	const handleReservarCupo = async (field, hour) => {
		try {
			const configaxios = {
				headers: {
					"Authorization": userConnectedData.id,
					withCredentials: true
				}
			};
			console.log(configaxios)
			const url = `${config.route}player/booking` //TODO:
			const data = { 'enclousureid': field['id'], 'hour': hour, 'date': field.day }
			console.log(data)
			const response = await axios.post(url, data, configaxios)
			if (response.status === 200) {
				setSuccess(true)
			}
			console.log(response.data, "response.data")
			console.log(data, "data")
		} catch (error) {
			console.log(error, "hay error")
		}
	};

	const field_modified = field.field
	return (
		<>
			<div>{success && <h2>Registro con exito</h2>}</div>
			<div className="DivHours">

				{field_modified ? (
					<div>
						<h4>Horarios</h4>
						<div className="">
							<div key={field_modified.id}>
								{allHours.map((particularhour) => (
									<div key={particularhour}>
										<p>{particularhour}:00 - {particularhour + 1}:00</p>
										{field_modified && field_modified.playerperhour && field_modified.playerperhour[particularhour] === field_modified.maxplayers ? (
											<button className="botonHoursTableNo" disabled>Cancha llena</button>
										) : (
											<button className="botonHoursTableYes" onClick={() => handleReservarCupo(field_modified, particularhour)}>Registrarse</button>
										)}
									</div>
								))}
							</div>

						</div>
					</div>) : (
					<div className="DivNoFields">
						<p>No hay canchas ni horarios que mostrar</p>
					</div>
				)}
			</div>
		</>
	);
}

HoursTable.propTypes = {
	field: PropTypes.object,
};

export default HoursTable;