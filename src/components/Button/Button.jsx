import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, className, type, disabled }) => {
    return (
        <button
            className={className}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}
Button.propType = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    severity: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
}
export default Button
