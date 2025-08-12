import { useState, useContext } from "react";

import { NotesContext } from "../../../../store/NotesContext.jsx";

import AddIcon from "../../../Icons/AddIcon.jsx";
import CheckIcon from "../../../Icons/CheckIcon.jsx";
import CancelIcon from "../../../Icons/CancelIcon.jsx";

export default function NotePanelAddTagBtn({ selectedNote }) {
    const { handleAddTag } = useContext(NotesContext);

    const [inputStates, setInputStates] = useState({
        isClicked: false,
        value: "",
    });

    function handleButtonClick() {
        setInputStates((prevState) => {
            return { ...prevState, isClicked: !prevState.isClicked };
        });
    }

    function handleInput(event) {
        setInputStates((prevState) => {
            return { ...prevState, value: event.target.value };
        });
    }

    function handleAddTagClick() {
        handleAddTag(selectedNote, inputStates.value);
        setInputStates((prevState) => {
            return {
                ...prevState,
                isClicked: !prevState.isClicked,
                value: "",
            };
        });
    }

    return (
        <>
            {!inputStates.isClicked && (
                <button
                    onClick={handleButtonClick}
                    className="note-panel__tag note-panel__tag--btn"
                >
                    Add new Tag
                    <AddIcon />
                </button>
            )}
            {inputStates.isClicked && (
                <div className="note-panel__tag note-panel__tag--btn">
                    <input
                        onChange={handleInput}
                        className="note-panel__tag-input"
                        placeholder="Enter task..."
                    />
                    <button
                        onClick={handleAddTagClick}
                        disabled={inputStates.value === ""}
                        className="note-panel__svg-btn note-panel__svg-btn--check"
                    >
                        <CheckIcon />
                    </button>
                    <button
                        onClick={handleButtonClick}
                        className="note-panel__svg-btn note-panel__svg-btn--cancel"
                    >
                        <CancelIcon />
                    </button>
                </div>
            )}
        </>
    );
}
