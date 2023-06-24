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
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,

};
export default InputField;
