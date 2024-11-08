import React from 'react'

import PropTypes from 'prop-types'

import styles from './FormLabel.module.css'

const FormLabel = ({ labelFor, children }) => {
    return (
        <div className={styles.container}>
            <label htmlFor={labelFor} className={styles.label}>
                {children}
            </label>
        </div>
    )
}

FormLabel.propTypes = {
    labelFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default FormLabel