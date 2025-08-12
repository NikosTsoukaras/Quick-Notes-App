import { useState, useRef, useEffect, useContext } from "react";

import { NotesContext } from "../../store/NotesContext.jsx";
import Button from "../UI/Button.jsx";
import FilterIcon from "../Icons/FilterIcon.jsx";
import TagsFiltersBox from "../TagsFilters/TagsFiltersBox.jsx";

export default function TagsFilters() {
    const [isActive, setIsActive] = useState(false);
    const filterRef = useRef(null);
    const { searchTags, searchData } = useContext(NotesContext);
    const searchTagsLength = searchTags?.length;
    const searchDataExists = searchData.searchText.length > 0;

    function handleClick() {
        setIsActive((prev) => !prev);
    }

    useEffect(() => {
        function handleMouseDown(event) {
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target)
            ) {
                setIsActive(false);
            }
        }

        document.addEventListener("mousedown", handleMouseDown);
    }, []);

    const classes = isActive ? "filter filter--active" : "filter";

    return (
        <div className={classes} ref={filterRef}>
            {searchTagsLength > 0 && (
                <div className="filter__number">{searchTagsLength}</div>
            )}
            <Button
                onClick={handleClick}
                icon={<FilterIcon className="theme-btn-restore-icon" />}
                isText={false}
                extraClasses="theme-btn--filter"
                disabled={searchDataExists}
            />
            <TagsFiltersBox />
        </div>
    );
}
