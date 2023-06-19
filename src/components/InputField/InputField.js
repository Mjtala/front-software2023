import React from "react";
import PropTypes from 'prop-types';

const InputField = ({ name, placeholder, value, onChange }) => {
    return (
        <div className="">
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

InputField.propTypes = {
    name: PropTypes.func.isRequired,
    placeholder: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,

};
export default InputField;
