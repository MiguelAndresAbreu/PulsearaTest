import React from 'react';

import noFoundImage from '../../svg/Group.svg';

import styles from './NotFound.module.css';
import PropTypes from "prop-types";

const NoData = () => {

    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <p>
                    <img src={noFoundImage} alt="No hay datos que mostrar" />
                </p>
                <div>
                    <b>No hay datos que mostrar</b>
                </div>
            </div>
        </div>
    )
}
NoData.propTypes = {
    addNewProcedures: PropTypes.func,
}

export default NoData
