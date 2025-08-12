import { useContext } from "react";

import { NotesContext } from "../../../../store/NotesContext.jsx";

import Button from "../../../UI/Button.jsx";
import FavoritesIcon from "../../../Icons/FavoritesIcon.jsx";
import { CATEGORIES } from "../../../../utils/helpers.js";

export default function NotePanelActionFavorites({ selectedNote }) {
    const { handleAddToFavorites, handleRemoveFromFavorites } =
        useContext(NotesContext);

    let isFilled = selectedNote.category === CATEGORIES[1];

    function handleClick() {
        if (selectedNote.category === CATEGORIES[0]) {
            handleAddToFavorites(selectedNote);
            isFilled = true;
        } else if (selectedNote.category === CATEGORIES[1]) {
            handleRemoveFromFavorites(selectedNote);
            isFilled = false;
        }
    }

    return (
        <Button
            onClick={handleClick}
            icon={<FavoritesIcon filled={isFilled} />}
            isText={false}
            extraClasses="theme-btn--fav theme-btn--panel-action"
        />
    );
}
