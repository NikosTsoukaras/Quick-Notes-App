import { useRef, useContext } from "react";

import { NotesContext } from "../../../../store/NotesContext.jsx";

import Modal from "../../../UI/Modal.jsx";
import Button from "../../../UI/Button.jsx";
import TrashIcon from "../../../Icons/TrashIcon.jsx";

export default function NotePanelActionDeletePermanently({ selectedNote }) {
    const modal = useRef();
    const { handleDeleteNotePermanently } = useContext(NotesContext);

    function handleTrashClick() {
        modal.current.open();
    }

    return (
        <>
            <Button
                onClick={handleTrashClick}
                icon={<TrashIcon />}
                isText={false}
                extraClasses="theme-btn--trash theme-btn--panel-action"
            />
            <Modal
                ref={modal}
                title="Permanently delete this note?"
                text="Once deleted permanently, this note cannot be restored"
                btnText="Permanently delete"
                btnAction={() => handleDeleteNotePermanently(selectedNote)}
            />
        </>
    );
}
