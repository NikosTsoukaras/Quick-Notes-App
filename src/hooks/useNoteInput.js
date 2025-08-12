import { useEffect, useState } from "react";

export default function useNoteInput(selectedNote, identifier) {
    const [input, setInput] = useState("");

    const isNoteExist = selectedNote !== null;

    useEffect(() => {
        if (isNoteExist) {
            setInput(selectedNote[identifier]);
        } else {
            setInput("");
        }
    }, [isNoteExist, selectedNote, identifier]);

    function handleInput(e) {
        setInput(e.target.value);
    }

    return {
        input,
        handleInput,
        setInput,
        isNoteExist,
    };
}
