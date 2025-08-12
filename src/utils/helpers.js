export const CATEGORIES = [
    "Notes",
    "Favorites",
    "Trash",
    "Search results",
    "Search results by tag names",
];

export const PANEN_MODES = ["Default", "Note-Edit"];

export function formatTimeAgo(date) {
    const day = date.getDate(); // 4
    const month = date.toLocaleString("en-GB", { month: "short" }); // "Aug"
    const year = date.getFullYear(); // 2025

    const hours = String(date.getHours()).padStart(2, "0"); // 18
    const minutes = String(date.getMinutes()).padStart(2, "0"); // 16
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`;
}

export function formatMonthAgo(date) {
    const day = date.getDate(); // 4
    const month = date.toLocaleString("en-GB", { month: "short" }); // "Aug"

    return `${day} ${month} `;
}

export function reviveDates(data) {
    return {
        ...data,
        notes: data.notes.map((note) => ({
            ...note,
            ["date-created"]: new Date(note["date-created"]),
            ["last-update"]: new Date(note["last-update"]),
        })),
        selectedNote:
            data.selectedNote && Object.keys(data.selectedNote).length > 0
                ? {
                      ...data.selectedNote,
                      ["date-created"]: new Date(
                          data.selectedNote["date-created"]
                      ),
                      ["last-update"]: new Date(
                          data.selectedNote["last-update"]
                      ),
                  }
                : undefined,
    };
}
