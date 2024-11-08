import React, {useContext} from "react";

import TrashImage from "../svg/trash.svg";
import Input from "./Input";
import FormFieldsArray from "./FormFieldsArray";
import Plus from "../svg/Plus.svg";

import styles from "./Modal.module.css";

import FormContext from "./Form/FormContext";

const ProceduresForm = () => {
    const form = useContext(FormContext)
    return (
        <div>
            <div className={styles.header}>
                <span className={styles.addProcedure}>
                    <span className={styles.title}>Procedimientos</span><img className={styles.imageAdd} src={Plus} alt="+"/> <span onClick={() => form.mutators.addNewProcedure()} className={styles.text}>Añadir procedimiento</span>
                </span>
            </div>
            <div className={styles.proceduresContainer}>
                <FormFieldsArray name="input">
                    {({ name, item, index }) => {
                        return <div className={styles.procedureItem}>
                            <img src={TrashImage}  alt="Eliminar" onClick={() =>form.mutators.deleteProcedure(item)} className={styles.trash} />

                            <div className={styles.inputContainer}>
                                <span className={styles.procedureLabel}>Procedimiento {(index + 1).toString().padStart(2, '0')}</span>
                                <Input name={`${name}.procedureName`} placeholder="Ej: Biopsia" className={styles.inputField} />
                            </div>
                            <div className={styles.inputContainer}>
                                <span className={styles.procedureLabel}>Código</span>
                                <Input name={`${name}.Code`} placeholder="Ej: A4563523" className={styles.inputField} />
                            </div>

                            <div className={styles.inputContainer}>
                                <span className={styles.procedureLabel}>Reclamado RD$</span>
                                <Input name={`${name}.reclaimed`} placeholder="Ej:4563523" className={styles.inputField} isNumber />
                            </div>

                            <div className={styles.inputContainer}>
                                <span className={styles.procedureLabel}>Diferencia RD$</span>
                                <Input name={`${name}.difference`} placeholder="Ej:4563523" className={styles.inputField} isNumber />
                            </div>

                            <div className={styles.inputContainer}>
                                <span className={styles.procedureLabel}>Autorizado RD$</span>
                                <Input name={`${name}.authorized`} placeholder="Ej: 4563523" className={styles.inputField} isNumber />
                            </div>
                        </div>
                    }}
                </FormFieldsArray>
            </div>
        </div>
    )
}

export default ProceduresForm;