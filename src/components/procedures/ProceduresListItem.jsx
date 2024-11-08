import React from 'react';

import styles from './ProceduresListItem.module.css';
const ProceduresListItem = ({ procedure, procedureNumber }) => {
    return (
        <div className={styles.procedureItem}>
            <div className={styles.procedureHeader}>
                <span className={styles.procedureLabel}>
                    Procedimiento {procedureNumber.toString().padStart(2, '0')}
                </span>
                <span className={styles.procedureLabel}>Código</span>
                <span className={styles.procedureLabel}>Reclamado</span>
                <span className={styles.procedureLabel}>Diferencia RD$</span>
                <span className={styles.procedureLabel}>Autorizado RD$</span>
            </div>
            <div className={styles.procedureContent}>
                <div>
                    <strong>{procedure.procedureName}</strong>
                </div>
                <div>{procedure.Code}</div>
                <div>RD$ {procedure.reclaimed}</div>
                <div>RD$ {procedure.difference}</div>
                <div>RD$ {procedure.authorized}</div>
            </div>
        </div>
    );
};

export default ProceduresListItem;
