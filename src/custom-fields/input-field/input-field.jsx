import React from "react";
import PropTypes from 'prop-types';

InputField.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
    inputClassName: "",
    labelClassName: "",
    disable: false,
};

function InputField(props) {
    const { field, type, label, placeholder, inputClassName, labelClassName, disable} = props;
    const { name, onChange, onBlur, value } = field;
    return ( 
        <div className="form-group">
            { label && 
                <label className={labelClassName} htmlFor={name}>
                    {label}
                </label>
            }
            <input
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={inputClassName}
                id={name} 
                placeholder={placeholder}
                disabled={disable}
            />
        </div>
    );
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
    inputClassName: PropTypes.string, 
    labelClassName: PropTypes.string,
};

export default InputField;