import Search from "../UI/Search.jsx";
import TagsFilters from "../TagsFilters/TagsFilters.jsx";

import QuickviewNotesHeader from "../QuickviewNotes/QuickviewNotesHeader.jsx";
import QuickviewNotesList from "../QuickviewNotes/QuickviewNotesList.jsx";

export default function SidebarRight() {
    return (
        <div className="sidebar__right">
            <div className="sidebar__right-header">
                <Search />
                <TagsFilters />
            </div>
            <QuickviewNotesHeader />
            <QuickviewNotesList />
        </div>
    );
}
