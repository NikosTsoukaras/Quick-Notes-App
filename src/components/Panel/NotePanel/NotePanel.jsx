import NotePanelTitleInput from "./NotePanelFields/NotePanelTitleInput.jsx";
import NotePanelActions from "./NotePanelActions/NotePanelActions.jsx";
import NotePanelDatesInfo from "./NotePanelDatesInfo/NotePanelDatesInfo.jsx";
import NotePanelTags from "./NotePanelTags/NotePanelTags.jsx";
import NotePanelTextarea from "./NotePanelFields/NotePanelTextarea.jsx";

export default function NotePanel({ selectedNote }) {
    const isNoteExist = selectedNote !== null;

    return (
        <div className="note-panel">
            <div className="note-panel__title">
                <NotePanelTitleInput selectedNote={selectedNote} />
                <div className="note-panel__actions">
                    <NotePanelActions
                        isNoteExist={isNoteExist}
                        selectedNote={selectedNote}
                    />
                </div>
            </div>
            {isNoteExist && (
                <>
                    <div className="note-panel__info-wrapper">
                        <NotePanelDatesInfo selectedNote={selectedNote} />
                        <NotePanelTags selectedNote={selectedNote} />
                    </div>
                </>
            )}
            <NotePanelTextarea selectedNote={selectedNote} />
        </div>
    );
}
