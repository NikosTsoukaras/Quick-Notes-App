import { useContext, memo } from "react";

import { NotesContext } from "../../store/NotesContext.jsx";

const MenuItem = memo(function MenuItem({ icon, title }) {
    const { selectedCategory, handleCategoryClick } = useContext(NotesContext);

    const menuItemClasses =
        selectedCategory === title
            ? "menu__item menu__item--active"
            : "menu__item";

    return (
        <li className={menuItemClasses}>
            <button
                onClick={() => handleCategoryClick(title)}
                className="menu__button text"
            >
                <span className="menu__button-icon">{icon}</span>
                <span className="menu__button-text">{title}</span>
            </button>
        </li>
    );
});

export default MenuItem;
