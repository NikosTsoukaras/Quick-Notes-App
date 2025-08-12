import Logo from "../UI/Logo.jsx";
import MenuItem from "../UI/MenuItem.jsx";
import NotesIcon from "../Icons/NotesIcon.jsx";
import FavoritesIcon from "../Icons/FavoritesIcon.jsx";
import TrashIcon from "../Icons/TrashIcon.jsx";

export default function SidebarLeft() {
    return (
        <div className="sidebar__left">
            <Logo />
            <nav className="menu">
                <ul className="menu__list">
                    <MenuItem icon={<NotesIcon />} title="Notes" />
                    <MenuItem icon={<FavoritesIcon />} title="Favorites" />
                    <MenuItem icon={<TrashIcon />} title="Trash" />
                </ul>
            </nav>
        </div>
    );
}
