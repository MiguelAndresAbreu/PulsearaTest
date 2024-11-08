import React from "react";

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import styles from "./Modal.module.css";
import Form from "./Form/Form";
import ProceduresForm from "./ProceduresForm";
import Check from "../svg/Check.svg";

const ModalForm = ({ dialogHeader, visible, onHide, initialData, onSubmit }) => {
    const addNewProcedure = ([_], state, {changeValue}) => {
        const id = `TMP_${Math.random() * (1000 - 1) + 1}`
        changeValue(state, "input", (procedures = []) => [...procedures, {id}])
    }
    const deleteProcedure = ([{id}], state, {changeValue}) => {
        changeValue(state, "input", (procedures) =>
            procedures.filter((procedure) => procedure?.id !== id)
        )
    }
    return (
        <Dialog className={styles.procedureTitle} header={<span>{dialogHeader}</span>} visible={visible} onHide={onHide}>
            <Form initialValues={initialData} onSubmit={onSubmit} className={styles.formArray} mutators={{addNewProcedure, deleteProcedure}}>
                <ProceduresForm />
                <div className={styles.buttonContainer}>
                    <Button label="Cancelar" className={styles.cancelButton} onClick={onHide} />
                    <Button
                        icon={<img className={styles.checkImage} src={Check} alt="Editar"/>}
                        label="Guardar cambios"
                        type="submit"
                        className={styles.saveButton}
                    />
                </div>
            </Form>
        </Dialog>
    );
};

export default ModalForm;
