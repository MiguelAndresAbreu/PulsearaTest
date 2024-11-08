import React, { useState } from "react";

import ModalForm from "../ModalForm";
import NotDate from "../noFound/NotDate";
import { Button } from 'primereact/button';
import useQuery from "../../Hooks/useQuery";
import useMutation from "../../Hooks/useMutation";
import ProceduresListItem from "./ProceduresListItem";
import { listProcedures } from "../../graphql/queries";
import {createProcedure, deleteProcedure, updateProcedure} from "../../graphql/mutations";

import styles from "../noFound/NotFound.module.css";
import {isEqual} from "lodash/lang";
import EditImage from "../../svg/edit.svg";

const Procedures = () => {
    const { data, loading, executor } = useQuery(listProcedures);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [createProc] = useMutation(createProcedure);
    const [deleteProc] = useMutation(deleteProcedure);
    const [updateProc] = useMutation(updateProcedure);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    const onSubmit = async (formData) => {
       const newProcedures = formData.input.filter((procedure) => procedure.id.startsWith("TMP_"));
       const deletedProcedures = data.listProcedures.items ? data.listProcedures.items.filter((procedure) => !formData.input.find((p) => p.id === procedure.id)) : [];
       const modifiedProcedures = formData.input.filter(
           (procedure) => !procedure.id.startsWith("TMP_")
                && !deletedProcedures.find((p) => p.id === procedure.id)
               && !isEqual(procedure, data.listProcedures.items.find((p) => p.id === procedure.id))
       );
        if (newProcedures.length) {
            await Promise.all(newProcedures.map(({createdAt, updatedAt, id, __typename, ...procedure }) => createProc({ input: procedure })));
        }
        if (deletedProcedures.length) {
            await Promise.all(deletedProcedures.map(({ id }) => deleteProc({ input: {id} })));
        }
        if (modifiedProcedures.length) {
            await Promise.all(modifiedProcedures.map(({createdAt, updatedAt, __typename, ...procedure}) => updateProc({ input: procedure })));
        }
        setIsModalVisible(false);
        executor();
    };

    const editProceduresClassName = data?.listProcedures?.items.length === 0 ? styles.emptyButtonContainer : styles.buttonContainer;
    return (
        <div>
            {loading && <p>Cargando...</p>}
            {!loading && data?.listProcedures?.items.length === 0 && <NotDate />}
            {!loading && data?.listProcedures && (
                <div className={styles.procedureListContainer}>
                    {data.listProcedures.items.map((procedure, index) => (
                        <ProceduresListItem
                            key={procedure.id}
                            procedure={procedure}
                            procedureNumber={index + 1}
                            onEdit={() => showModal(procedure)}
                        />
                    ))}
                </div>
            )}
            <div className={editProceduresClassName}>
                <Button className={styles.editButton}
                    icon={<img className={styles.editImage} src={EditImage} alt="Editar"/>}
                    label="Editar procedimientos"
                    onClick={() => showModal()}
                />
            </div>

            <ModalForm
                visible={isModalVisible}
                onHide={hideModal}
                initialData={{ input: data?.listProcedures?.items || []}}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default Procedures;
