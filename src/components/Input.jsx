import React from 'react'

import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import FormLabel from "./FormLabel";

const Input = ({
   name,
   label,
   placeholder,
   className,
   isNumber = false,
   containerClassName,
   required = false,
   autocomplete = false,
}) => {

    return (
        <span
            className={classNames({
                [containerClassName]: !!containerClassName,
            })}
        >
            {label && <FormLabel labelFor={name}>{label}</FormLabel>}
            <Field
                name={name}
                render={({ input }) => (
                    <>
                        <div>
                            <InputText
                                {...input}
                                type={isNumber ? 'number' : 'text'}
                                required={required}
                                id={name}
                                className={classNames('w-full', {
                                    'p-invalid': required && !input.value,
                                    [className]: !!className,
                                })}
                                placeholder={placeholder}
                                autoComplete={autocomplete ? 'on' : 'off'}
                            />
                        </div>
                    </>
                )}
            />
        </span>
    )
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    required: PropTypes.bool,
    isNumber: PropTypes.bool,
}

export default Input
