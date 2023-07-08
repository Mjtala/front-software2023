import React, { useEffect, useState } from "react";
import Select from 'react-select';
import './PlayerProfileRateBookings.css';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

const Estrellas = (props) => {

    return (
        <div className="estrellas">
            Calificación: {
                    [... new Array(5)].map((star, index)=>{
                        return index< props.score ? <AiFillStar key={star}/> : <AiOutlineStar />
                    })
                }
        </div>
    )
}

export const Modal = ({setModal}) => {

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

      const handleRatingBack = () => {
        setRate(true);
      }

    return (
        <div className="backshadow">
            <div className="custom-modal">
                <Rating value={value} />
                <button className="send-button" onClick={() => handleRatingBack(value) }>Enviar</button>
                {rate === true && (<Estrellas score={value}/>)}
                
                <div className="delete-icon"
                onClick={() => setModal(false)}>x</div>
            </div>
        </div>
    )
}

Modal.propTypes = {
     setModal: PropTypes.func
   };

Estrellas.propTypes = {
     score: PropTypes.number
 }

export default Modal;

