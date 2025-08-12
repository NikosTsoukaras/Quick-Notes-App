import { useContext } from "react";

import { NotesContext } from "../../store/NotesContext";

import { formatMonthAgo } from "../../utils/helpers.js";
import CalendarIcon from "../Icons/CalendarIcon.jsx";

export default function QuickviewNotesNoteItem({ prevNote, boxClasses }) {
    const { handleQuickviewProjectClick } = useContext(NotesContext);

    return (
        <li
            key={prevNote.id}
            className="quickview-notes-list__item"
            onClick={() => handleQuickviewProjectClick(prevNote)}
        >
            <div className={boxClasses}>
                <h2 className="quickview-notes-list__title text-sm">
                    {prevNote.title}
                </h2>

                {prevNote.tags?.length > 0 && (
                    <ul className="quickview-notes-list__tags">
                        {prevNote.tags.map((tag) => (
                            <li
                                className="quickview-notes-list__tag text-sm"
                                key={tag.id}
                            >
                                {`#${tag.title}`}
                            </li>
                        ))}
                    </ul>
                )}
                <p className="quickview-notes-list__text text-sm ">
                    {prevNote.text}
                </p>
                <p className="quickview-notes-list__date text-sm">
                    <CalendarIcon classes="quickview-notes-list__icon" />
                    {formatMonthAgo(prevNote["date-created"])}
                </p>
            </div>
        </li>
    );
}
