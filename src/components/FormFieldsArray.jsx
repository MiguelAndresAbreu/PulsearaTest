import React from 'react'

import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

const FormFieldsArray = ({ children, name }) => {
    return (
        <>
            <Field name={name}>
                {({ input: { value = [] } }) => {
                    return (
                        <>
                            {value.map((parent, index) => {
                                return children({ name: `${name}[${index}]`, item: parent, index })
                            })}
                        </>
                    )
                }}
            </Field>
        </>
    )
}

FormFieldsArray.propTypes = {
    children: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default FormFieldsArray
