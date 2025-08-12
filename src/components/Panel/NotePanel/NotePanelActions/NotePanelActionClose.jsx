import { useContext } from "react";

import Button from "../../../UI/Button.jsx";
import CancelIcon from "../../../Icons/CancelIcon.jsx";
import { NotesContext } from "../../../../store/NotesContext.jsx";

export default function NotelPanelActionClose() {
    const { handleCloseNote } = useContext(NotesContext);

    return (
        <Button
            onClick={handleCloseNote}
            extraClasses="theme-btn__icon--close"
            isText={false}
            icon={<CancelIcon />}
        />
    );
}
