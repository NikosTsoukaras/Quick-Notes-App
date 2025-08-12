import { useContext } from "react";

import { NotesContext } from "../../../../store/NotesContext.jsx";

import Button from "../../../UI/Button.jsx";
import RestoreIcon from "../../../Icons/RestoreIcon.jsx";

export default function NotePanelActionRestore({ selectedNote }) {
    const { handleRestoreNote } = useContext(NotesContext);

    return (
        <Button
            onClick={() => handleRestoreNote(selectedNote)}
            icon={<RestoreIcon className="theme-btn-restore-icon" />}
            isText={false}
            extraClasses="theme-btn--restore theme-btn--panel-action"
        />
    );
}
