import NotePanelActionFavorites from "./NotePanelActionFavorites.jsx";
import NotePanelActionTrash from "./NotePanelActionTrash.jsx";
import NotePanelActionRestore from "./NotePanelActionRestore.jsx";
import NotePanelActionDeletePermanently from "./NotePanelActionDeletePermanently.jsx";
import NotePanelActionClose from "./NotePanelActionClose.jsx";

import { CATEGORIES } from "../../../../utils/helpers.js";

export default function NotePanelActions({ selectedNote, isNoteExist }) {
    return (
        <>
            {((selectedNote?.category &&
                selectedNote?.category === CATEGORIES[0]) ||
                selectedNote?.category === CATEGORIES[1]) &&
                isNoteExist && (
                    <>
                        <NotePanelActionFavorites selectedNote={selectedNote} />
                        <NotePanelActionTrash selectedNote={selectedNote} />
                    </>
                )}

            {selectedNote?.category &&
                selectedNote?.category === CATEGORIES[2] &&
                isNoteExist && (
                    <>
                        <NotePanelActionRestore selectedNote={selectedNote} />
                        <NotePanelActionDeletePermanently
                            selectedNote={selectedNote}
                        />
                    </>
                )}
            <NotePanelActionClose />
        </>
    );
}
