import { useContext } from "react";

import useNoteInput from "../../../../hooks/useNoteInput.js";

import { NotesContext } from "../../../../store/NotesContext.jsx";

export default function NotePanelTextarea({ selectedNote }) {
    const { handleInput } = useContext(NotesContext);

    const { handleInput: handleTextInput, input: textInput } = useNoteInput(
        selectedNote,
        "text"
    );

    return (
        <div className="note-panel__text">
            <label
                htmlFor="note-text"
                className="note-panel__text-title title-2"
            >
                Description
            </label>
            <textarea
                onBlur={(event) => handleInput(event, selectedNote, "text")}
                className="note-panel__textarea text"
                name="note-text"
                id="note-text"
                onChange={handleTextInput}
                value={textInput}
                placeholder="Add description here ..."
            ></textarea>
        </div>
    );
}
