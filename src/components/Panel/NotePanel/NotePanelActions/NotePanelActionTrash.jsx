import { useRef, useContext } from "react";

import { NotesContext } from "../../../../store/NotesContext.jsx";

import Modal from "../../../UI/Modal.jsx";
import Button from "../../../UI/Button.jsx";
import TrashIcon from "../../../Icons/TrashIcon.jsx";

export default function NotePanelActionTrash({ selectedNote }) {
    const modal = useRef();
    const { handleDeleteNote } = useContext(NotesContext);

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
                title="Delete this note?"
                text="You can restore it from the trash after deletion"
                btnText="Delete"
                btnAction={() => handleDeleteNote(selectedNote)}
            />
        </>
    );
}
