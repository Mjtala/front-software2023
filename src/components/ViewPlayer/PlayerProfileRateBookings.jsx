import React, { useEffect, useState } from "react";
import Select from 'react-select';
import './PlayerProfileRateBookings.css';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { useLocalStorage } from 'usehooks-ts';
import config from '../../config'
import axios from "axios";

const Estrellas = (props) => {

  return (
    <div className="estrellas" key={0}>
      Calificación: {
        [... new Array(5)].map((star, index) => {
          return index < props.score ? <AiFillStar key={star} /> : <AiOutlineStar />
        })
      }
    </div>
  )
}

export const Modal = ({ setModal, fieldid, fieldname }) => {

  const [userConnectedData] = useLocalStorage("UserInfo", null)

  const [value, setValue] = useState(0);
  const [rate, setRate] = useState(false);

  useEffect(() => {
    console.log(value);
  }, [value]);

  const options = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' }
  ]

  const handleRatingChange = (selectedOption) => {
    setValue(selectedOption.value);
    setRate(false)
  };

  const Rating = () => (
    <Select options={options} className="selector" onChange={handleRatingChange}
      value={options.find(option => option.value === value)} />
  )

  const handleRatingBack = async () => {
    const configaxios = {
      headers: {
        "Authorization": userConnectedData.id,
        withCredentials: true
      }
    };
    const url = `${config.route}ratings/enclousures/${fieldid}` //TODO:
    console.log(url)
    const data = { 'rating': value }
    console.log(data)
    const response = await axios.post(url, data, configaxios)
    console.log(response.data)
    setRate(true);
    console.log(value, fieldid)
  }

  return (
    <div className="backshadow">
      <div className="custom-modal">
        <p>Agregando reseña para la cancha {fieldname}</p>
        <Rating value={value} />
        <button className="send-button" onClick={() => handleRatingBack(value)}>Enviar</button>
        {rate === true && (<Estrellas score={value} />)}

        <div className="delete-icon"
          onClick={() => setModal(false)}>x</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  setModal: PropTypes.func,
  fieldname: PropTypes.string,
  fieldid: PropTypes.number
};

Estrellas.propTypes = {
  score: PropTypes.number
}

export default Modal;

