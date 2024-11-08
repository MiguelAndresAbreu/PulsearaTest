import React from 'react'

import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import FormLabel from "./FormLabel";

const Input = ({
   name,
   label,
   placeHolder,
   className,
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
                                required={required}
                                id={name}
                                className={classNames('w-full', {
                                    'p-invalid': required && !input.value,
                                    [className]: !!className,
                                })}
                                placeholder={placeHolder}
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
    placeHolder: PropTypes.string,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    required: PropTypes.bool,
}

export default Input
