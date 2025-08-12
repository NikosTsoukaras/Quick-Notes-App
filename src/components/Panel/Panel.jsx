import { useContext } from "react";

import { NotesContext } from "../../store/NotesContext.jsx";
import DefaultPanel from "./DefaultPanel.jsx";
import NotePanel from "./NotePanel/NotePanel.jsx";

export default function Panel() {
    const { selectedNote } = useContext(NotesContext);

    let content;

    if (selectedNote === undefined) {
        content = <DefaultPanel />;
    } else {
        content = <NotePanel selectedNote={selectedNote} />;
    }

    return <section className="panel">{content}</section>;
}
