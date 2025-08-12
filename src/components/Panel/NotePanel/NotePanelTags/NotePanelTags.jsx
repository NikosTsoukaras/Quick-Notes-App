import NotePanelAddTagBtn from "./NotePanelAddTagBtn.jsx";
import NotePanelTag from "./NotePanelTag.jsx";

export default function NotePanelTags({ selectedNote }) {
    return (
        <div className="note-panel__info note-panel__info--tags text-sm">
            <span className="note-panel__info-title">Tasks</span>
            <div className="note-panel__tags-wrapper">
                {selectedNote?.tags &&
                    selectedNote.tags.map((tag) => (
                        <NotePanelTag
                            key={tag.id}
                            selectedNote={selectedNote}
                            tag={tag}
                        />
                    ))}

                <NotePanelAddTagBtn selectedNote={selectedNote} />
            </div>
        </div>
    );
}
