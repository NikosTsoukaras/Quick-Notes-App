import { useContext } from "react";

import useNoteInput from "../../../../hooks/useNoteInput.js";

import { NotesContext } from "../../../../store/NotesContext.jsx";

export default function NotePanelTitleInput({ selectedNote }) {
    const { handleInput } = useContext(NotesContext);

    const { handleInput: handleTitleInput, input: titleInput } = useNoteInput(
        selectedNote,
        "title"
    );

    return (
        <input
            className="note-panel__input title-1"
            type="text"
            onChange={handleTitleInput}
            value={titleInput}
            placeholder="Enter title"
            onBlur={(event) => handleInput(event, selectedNote, "title")}
        />
    );
}
