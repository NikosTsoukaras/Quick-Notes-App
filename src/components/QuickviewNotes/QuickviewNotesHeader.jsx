import { useContext } from "react";

import { NotesContext } from "../../store/NotesContext.jsx";
import Button from "../UI/Button.jsx";
import AddIcon from "../Icons/AddIcon.jsx";
import { CATEGORIES } from "../../utils/helpers.js";

export default function QuickviewNotesHeader() {
    const { appData, handleCreateNote } = useContext(NotesContext);

    return (
        <>
            <div className="sidebar__header">
                <h1 className="sidebar__header-title">
                    {appData.selectedCategory}
                </h1>

                {appData.selectedCategory === CATEGORIES[0] && (
                    <Button
                        onClick={handleCreateNote}
                        icon={<AddIcon />}
                        extraClasses="sidebar__header-btn"
                        text="Add Note"
                    />
                )}
            </div>
        </>
    );
}
