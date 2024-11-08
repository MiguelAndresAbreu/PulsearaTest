import React, {useContext} from "react";

import styles from "./Modal.module.css";
import TrashImage from "../svg/trash.svg";
import Input from "./Input";
import NumericInput from "./NumericInput";
import FormFieldsArray from "./FormFieldsArray";

import FormContext from "./Form/FormContext";

const ProceduresForm = () => {
    const form = useContext(FormContext)
    return (
        <div>
            <div className={styles.header}>
                <span className={styles.addProcedure}>
                    <span className={styles.title}>Procedimientos</span> <span onClick={() => form.mutators.addNewProcedure()} className={styles.text}>+ Añadir procedimiento</span>
                </span>
            </div>
            <FormFieldsArray name="input">
                {({ name, item, index }) => {
                    return <div className={styles.procedureItem}>
                        <img src={TrashImage}  alt="Eliminar" onClick={() =>form.mutators.deleteProcedure(item)} />

                        <div className={styles.inputContainer}>
                            <span className={styles.procedureLabel}>Procedimiento {(index + 1).toString().padStart(2, '0')}</span>
                            <Input name={`${name}.procedureName`} placeholder="Ej: Nombre del procedimiento" className={styles.inputField} />
                        </div>
                        <div className={styles.inputContainer}>
                            <span className={styles.procedureLabel}>Código</span>
                            <Input name={`${name}.Code`} placeholder="Ej: A4563523" className={styles.inputField} />
                        </div>

                        <div className={styles.inputContainer}>
                            <span className={styles.procedureLabel}>Reclamado RD$</span>
                            <NumericInput name={`${name}.Reclaimed`} placeholder="Ej:4563523" className={styles.inputField} />
                        </div>

                        <div className={styles.inputContainer}>
                            <span className={styles.procedureLabel}>Diferencia RD$</span>
                            <NumericInput name={`${name}.difference`} placeholder="Ej:4563523" className={styles.inputField} />
                        </div>

                        <div className={styles.inputContainer}>
                            <span className={styles.procedureLabel}>Autorizado RD$</span>
                            <NumericInput name={`${name}.Authorized`} placeholder="Ej: 4563523" type="number" className={styles.inputField} />
                        </div>
                    </div>
                }}
            </FormFieldsArray>
        </div>
    )
}

export default ProceduresForm;