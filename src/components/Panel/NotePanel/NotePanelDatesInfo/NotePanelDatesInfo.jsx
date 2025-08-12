import { formatTimeAgo } from "../../../../utils/helpers.js";

export default function NotePanelDatesInfo({ selectedNote }) {
    return (
        <>
            <div className="note-panel__info text-sm note-panel__due-date">
                <span className="note-panel__info-title">Created</span>
                <span className="note-panel__info-value">
                    {formatTimeAgo(selectedNote["date-created"])}
                </span>
            </div>
            <div className="note-panel__info text-sm note-panel__due-date">
                <span className="note-panel__info-title">Last edited on</span>
                <span className="note-panel__info-value">
                    {formatTimeAgo(selectedNote["last-update"])}
                </span>
            </div>
        </>
    );
}
