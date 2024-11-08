import React from 'react'

import PropTypes from 'prop-types'
import { Form as ReactFinalForm } from 'react-final-form'

import FormContext from './FormContext'

const Form = ({ children, onSubmit, initialValues = {}, validationFunction, mutators = {} }) => {
    const defaultMutators = {
        setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value)
        },
        resetField: ([field], state, { resetFieldState }) => {
            resetFieldState(field)
        },
    }

    return (
        <ReactFinalForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={validationFunction}
            mutators={{ ...defaultMutators, ...mutators }}
        >
            {({ handleSubmit, form }) => (
                <FormContext.Provider value={form}>
                    <form onSubmit={handleSubmit}>
                        {typeof children === 'function' ? children({ form }) : children}
                    </form>
                </FormContext.Provider>
            )}
        </ReactFinalForm>
    )
}

Form.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object,
    validationFunction: PropTypes.func,
    mutators: PropTypes.object,
}

export default React.memo(Form)
