import { useState, useContext, useEffect } from "react";

import { NotesContext } from "../../store/NotesContext";

import SearchIcon from "../Icons/SearchIcon";

export default function Search() {
    const { handleSearch, searchData, searchTags } = useContext(NotesContext);
    const [input, setInput] = useState("");

    const searchDataExist = searchTags.length > 0;

    function handleInput(event) {
        handleSearch(event.target.value);
        setInput(event.target.value);
    }

    useEffect(() => {
        if (searchData.searchText === "") {
            setInput("");
        }
    }, [searchData.searchText]);

    return (
        <div className="search">
            <input
                className="search__input"
                placeholder="Search..."
                name="search"
                type="text"
                onChange={handleInput}
                value={input}
                disabled={searchDataExist}
            />
            <SearchIcon className="search__icon" />
        </div>
    );
}
