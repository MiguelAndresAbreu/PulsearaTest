import React, { useRef } from 'react'

import { InputNumber } from 'primereact/inputnumber'
import { classNames } from 'primereact/utils'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import FormLabel from './FormLabel'

const NumericInput = ({
    name,
    disabled = false,
    label,
    placeHolder,
    className,
    containerClassName,
    required = false,
    autocomplete = false,
}) => {
    const inputRef = useRef()

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
                        <InputNumber
                            {...input}
                            inputRef={inputRef}

                            required={required}
                            disabled={disabled}
                            inputId={name}
                            className={classNames({
                                'p-invalid': required && !input.value,
                                [className]: !!className,
                            })}
                            placeholder={placeHolder}
                            autoComplete={autocomplete ? 'on' : 'off'}
                        />
                    </>
                )}
            />
        </span>
    )
}

NumericInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    containerClassName: PropTypes.string,
    required: PropTypes.bool,
}

export default NumericInput
