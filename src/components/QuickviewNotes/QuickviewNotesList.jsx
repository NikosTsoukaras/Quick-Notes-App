import { useContext } from "react";

import { NotesContext } from "../../store/NotesContext";
import QuickviewNotesNoteItem from "./QuickviewNotesNoteItem.jsx";
import NoData from "../UI/NoData.jsx";

export default function QuickviewNotesList() {
    const { appData, searchData, searchTags } = useContext(NotesContext);

    let content;

    if (searchData.searchText.length > 0) {
        if (searchData.resultsItems.length === 0) {
            content = (
                <NoData
                    title="No notes found"
                    text="Please try search something else"
                />
            );
        } else {
            content = (
                <ul className="quickview-notes-list">
                    {searchData.resultsItems.map((prevNote) => {
                        let boxClasses =
                            appData.selectedNote?.id === prevNote.id
                                ? "quickview-notes-list__box quickview-notes-list__box--active"
                                : "quickview-notes-list__box";
                        return (
                            <QuickviewNotesNoteItem
                                key={prevNote.id}
                                prevNote={prevNote}
                                boxClasses={boxClasses}
                            />
                        );
                    })}
                </ul>
            );
        }
    } else if (searchTags.length > 0) {
        content = (
            <ul className="quickview-notes-list">
                {appData.notes.map((prevNote) => {
                    const hasTag = prevNote.tags.some((tag) =>
                        searchTags.includes(tag.title)
                    );

                    if (hasTag) {
                        let boxClasses =
                            appData.selectedNote?.id === prevNote.id
                                ? "quickview-notes-list__box quickview-notes-list__box--active"
                                : "quickview-notes-list__box";
                        console.log(`hasTag: ${hasTag}`);
                        return (
                            <QuickviewNotesNoteItem
                                key={prevNote.id}
                                prevNote={prevNote}
                                boxClasses={boxClasses}
                            />
                        );
                    }

                    return null;
                })}
            </ul>
        );
    } else {
        const hasNotes = appData.notes.some(
            (note) => note.category === appData.selectedCategory
        );

        if (hasNotes) {
            content = (
                <ul className="quickview-notes-list">
                    {appData.notes.map((prevNote) => {
                        let boxClasses =
                            appData.selectedNote?.id === prevNote.id &&
                            appData.selectedCategory === prevNote.category
                                ? "quickview-notes-list__box quickview-notes-list__box--active"
                                : "quickview-notes-list__box";

                        return prevNote.category ===
                            appData.selectedCategory ? (
                            <QuickviewNotesNoteItem
                                key={prevNote.id}
                                prevNote={prevNote}
                                boxClasses={boxClasses}
                            />
                        ) : (
                            ""
                        );
                    })}
                </ul>
            );
        } else {
            content = (
                <NoData
                    title={`No ${appData.selectedCategory.toLowerCase()} found`}
                />
            );
        }
    }

    return <>{content}</>;
}
