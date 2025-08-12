import { useEffect, useContext, useState } from "react";
import { NotesContext } from "../../store/NotesContext.jsx";
import TagFiltersItem from "./TagsFiltersItem.jsx";

export default function TagsFiltersBox() {
    const { appData } = useContext(NotesContext);
    const [uniqueTags, setUniqueTags] = useState([]);

    useEffect(() => {
        const tagSet = new Set();

        for (let i = 0; i < appData.notes?.length; i++) {
            const noteTags = appData.notes[i]?.tags;
            if (Array.isArray(noteTags)) {
                noteTags.forEach((tag) => tagSet.add(tag.title));
            }
        }

        setUniqueTags(Array.from(tagSet));
    }, [appData.notes]);

    return (
        <div className="offset-box">
            <p className="offset-box__title text-sm">
                Choose tag(s) to filter your notes
            </p>
            {uniqueTags.map((tag) => (
                <TagFiltersItem key={tag} title={tag} />
            ))}
        </div>
    );
}
