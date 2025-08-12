import { createContext, useState, useEffect, useCallback } from "react";

import { CATEGORIES, reviveDates } from "../utils/helpers.js";

export const NotesContext = createContext();

const STORAGE_APP_DATA = localStorage.getItem("QuickNotesAppData");

export function NotesContextProvider({ children }) {
    const [appData, setAppData] = useState(() => {
        if (!STORAGE_APP_DATA) {
            const initialData = {
                selectedNote: undefined,
                selectedCategory: CATEGORIES[0],
                notes: [],
            };
            localStorage.setItem(
                "QuickNotesAppData",
                JSON.stringify(initialData)
            );
            return initialData;
        }
        return reviveDates(JSON.parse(STORAGE_APP_DATA));
    });

    const [searchData, setSearchData] = useState({
        searchText: "",
        resultsItems: [],
    });

    const [searchTags, setSearchTags] = useState([]);

    useEffect(() => {
        localStorage.setItem("QuickNotesAppData", JSON.stringify(appData));
    }, [appData]);

    function handleCreateNote() {
        setAppData((prevData) => {
            return { ...prevData, selectedNote: null };
        });
    }

    function handleCloseNote() {
        setAppData((prevData) => {
            return { ...prevData, selectedNote: undefined };
        });
    }

    function handleInput(event, selectedNote, identifier) {
        if (!event.target.value) return;

        if (selectedNote === null) {
            setAppData((prevData) => {
                const noteId = (Math.random() * 100).toFixed(2);
                let title;

                if (identifier !== "title") {
                    const numberOfUntitledNotes = prevData.notes.reduce(
                        (accumulator, currentNote) =>
                            currentNote.title
                                .toLowerCase()
                                .startsWith("untitled")
                                ? accumulator + 1
                                : accumulator,
                        0
                    );

                    title = `untitled ${
                        numberOfUntitledNotes === 0 ? "" : numberOfUntitledNotes
                    }`;
                }

                const date = new Date();

                let newNote = {
                    id: +noteId,
                    ["date-created"]: date,
                    ["last-update"]: date,
                    category: CATEGORIES[0],
                    ...(identifier !== "title" && { title }),
                    [identifier]: event.target.value,
                };

                return {
                    ...prevData,
                    notes: [newNote, ...prevData.notes],
                    selectedNote: newNote,
                };
            });
        } else {
            setAppData((prevData) => {
                const updatedNote = {
                    ...selectedNote,
                    [identifier]: event.target.value,
                    ["last-update"]: new Date(),
                };

                const updatedNotes = prevData.notes.map((prevNote) =>
                    prevNote.id === selectedNote.id
                        ? {
                              ...updatedNote,
                          }
                        : prevNote
                );

                return {
                    ...prevData,
                    notes: updatedNotes,
                    selectedNote: updatedNote,
                };
            });

            if (
                searchData.searchText.length > 0 &&
                searchData.resultsItems.length > 0
            ) {
                setSearchData((prevData) => {
                    const updatedNote = {
                        ...selectedNote,
                        [identifier]: event.target.value,
                        ["last-update"]: new Date(),
                    };

                    const updatedNotes = searchData.resultsItems.map(
                        (prevNote) =>
                            prevNote.id === selectedNote.id
                                ? {
                                      ...updatedNote,
                                  }
                                : prevNote
                    );

                    return {
                        ...prevData,
                        resultsItems: updatedNotes,
                    };
                });
            }
        }
    }

    function handleQuickviewProjectClick(note) {
        setAppData((prevAppData) => {
            return { ...prevAppData, selectedNote: note };
        });
    }

    function handleAddTag(selectedNote, tag) {
        setAppData((prevData) => {
            const tagId = (Math.random() * 100).toFixed(2);

            const updatedNote = {
                ...selectedNote,
                ["last-update"]: new Date(),
                tags: [...(selectedNote.tags ?? ""), { id: tagId, title: tag }],
            };

            const updatedNotes = prevData.notes.map((prevNote) =>
                prevNote.id === selectedNote.id
                    ? {
                          ...updatedNote,
                      }
                    : prevNote
            );

            return {
                ...prevData,
                notes: updatedNotes,
                selectedNote: updatedNote,
            };
        });
    }

    function handleRemoveTag(selectedNote, tagId) {
        setAppData((prevData) => {
            const updatedNote = {
                ...selectedNote,
                ["last-update"]: new Date(),
                tags: selectedNote.tags.filter((tag) => tag.id !== tagId),
            };

            const updatedNotes = prevData.notes.map((prevNote) =>
                prevNote.id === selectedNote.id
                    ? {
                          ...updatedNote,
                      }
                    : prevNote
            );

            return {
                ...prevData,
                notes: updatedNotes,
                selectedNote: updatedNote,
            };
        });
    }

    function handleAddToFavorites(selectedNote) {
        setAppData((prevData) => {
            const updatedNote = { ...selectedNote, category: CATEGORIES[1] };

            const updatedNotes = prevData.notes.map((prevNote) =>
                prevNote.id === selectedNote.id
                    ? {
                          ...updatedNote,
                      }
                    : prevNote
            );

            return {
                ...prevData,
                notes: updatedNotes,
                selectedNote: updatedNote,
            };
        });
    }

    function handleRemoveFromFavorites(selectedNote) {
        setAppData((prevData) => {
            const updatedNote = { ...selectedNote, category: CATEGORIES[0] };

            const updatedNotes = prevData.notes.map((prevNote) =>
                prevNote.id === selectedNote.id
                    ? {
                          ...updatedNote,
                      }
                    : prevNote
            );

            return {
                ...prevData,
                notes: updatedNotes,
                selectedNote: updatedNote,
            };
        });
    }

    function handleCategoryClick(selectedNotecategoryName) {
        setAppData((prevData) => {
            return {
                ...prevData,
                selectedCategory: selectedNotecategoryName,
            };
        });
        setSearchData({ searchText: "", resultsItems: [] });
    }

    function handleDeleteNote(selectedNote) {
        setAppData((prevData) => {
            const updatedNote = { ...selectedNote, category: CATEGORIES[2] };

            const updatedNotes = prevData.notes.map((prevNote) =>
                prevNote.id === selectedNote.id
                    ? {
                          ...updatedNote,
                      }
                    : prevNote
            );

            return {
                ...prevData,
                notes: updatedNotes,
                selectedNote: undefined,
            };
        });
    }

    function handleDeleteNotePermanently(selectedNote) {
        setAppData((prevData) => {
            const updatedNotes = prevData.notes.filter(
                (prevNote) => prevNote.id !== selectedNote.id
            );

            return {
                ...prevData,
                notes: updatedNotes,
                selectedNote: undefined,
            };
        });
    }

    function handleRestoreNote(selectedNote) {
        setAppData((prevData) => {
            const updatedNote = { ...selectedNote, category: CATEGORIES[0] };

            const updatedNotes = prevData.notes.map((prevNote) =>
                prevNote.id === selectedNote.id
                    ? {
                          ...updatedNote,
                      }
                    : prevNote
            );

            return {
                ...prevData,
                notes: updatedNotes,
                selectedNote: undefined,
            };
        });
    }

    function handleSearch(inputText) {
        if (inputText.trim() === "") {
            setSearchData({ searchText: "", resultsItems: [] });
            setAppData((prevData) => {
                return {
                    ...prevData,
                    selectedCategory: CATEGORIES[0],
                };
            });
        } else {
            const lowerCaseInput = inputText.toLowerCase();

            const resultsItems = appData.notes.filter((note) => {
                return (
                    note.title.toLowerCase().includes(lowerCaseInput) ||
                    note.text.toLowerCase().includes(lowerCaseInput)
                );
            });

            setSearchData({ searchText: lowerCaseInput, resultsItems });
            setAppData((prevData) => {
                return {
                    ...prevData,
                    selectedCategory: CATEGORIES[3],
                };
            });
        }
    }

    const handleFilterTags = useCallback(function handleFilterTags(
        tag,
        condidtion
    ) {
        if (condidtion === "add") {
            setSearchTags((tags) => [tag, ...tags]);
        }

        if (condidtion === "remove") {
            setSearchTags((tags) =>
                tags.filter((currentTag) => currentTag !== tag)
            );
        }
    },
    []);

    useEffect(() => {
        if (searchTags.length > 0) {
            setAppData((prevData) => {
                return {
                    ...prevData,
                    selectedCategory: CATEGORIES[4],
                };
            });
        }

        if (searchTags.length === 0) {
            setAppData((prevData) => {
                return {
                    ...prevData,
                    selectedCategory: CATEGORIES[0],
                };
            });
        }
    }, [searchTags.length]);

    const contextValues = {
        handleCreateNote,
        handleCloseNote,
        handleInput,
        selectedNote: appData.selectedNote,
        appData,
        selectedCategory: appData.selectedCategory,
        handleQuickviewProjectClick,
        handleAddTag,
        handleRemoveTag,
        handleAddToFavorites,
        handleRemoveFromFavorites,
        handleCategoryClick,
        handleDeleteNote,
        handleDeleteNotePermanently,
        handleRestoreNote,
        handleSearch,
        searchData,
        handleFilterTags,
        searchTags,
    };

    return (
        <NotesContext.Provider value={contextValues}>
            {children}
        </NotesContext.Provider>
    );
}
