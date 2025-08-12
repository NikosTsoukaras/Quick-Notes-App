import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../../store/NotesContext.jsx";

export default function TagFiltersItem({ title }) {
    const { handleFilterTags } = useContext(NotesContext);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (isClicked) {
            handleFilterTags(title, "add");
        } else {
            handleFilterTags(title, "remove");
        }
    }, [isClicked, handleFilterTags]);

    return (
        <fieldset className="offset-box__item">
            <input
                className="offset-box__checkbox"
                name={title}
                id={title}
                type="checkbox"
            />
            <label
                onClick={() => setIsClicked((prev) => !prev)}
                className="offset-box__label text-sm"
                htmlFor={title}
            >
                {title}
            </label>
        </fieldset>
    );
}
