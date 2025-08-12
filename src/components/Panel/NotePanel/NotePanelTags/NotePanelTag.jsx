import { useContext } from "react";

import { NotesContext } from "../../../../store/NotesContext.jsx";

import TrashIcon from "../../../Icons/TrashIcon.jsx";

export default function NotePanelTag({ selectedNote, tag }) {
    const { handleRemoveTag } = useContext(NotesContext);

    return (
        <div className="note-panel__tag">
            # {tag.title}
            <button
                onClick={() => handleRemoveTag(selectedNote, tag.id)}
                className="note-panel__tag-bin"
            >
                <TrashIcon filled={true} className="note-panel__tag-bin-svg" />
            </button>
        </div>
    );
}
