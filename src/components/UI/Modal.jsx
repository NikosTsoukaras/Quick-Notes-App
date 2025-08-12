import { useImperativeHandle, useRef } from "react";

import { createPortal } from "react-dom";

export default function Modal({ ref, title, text, btnText, btnAction }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    function closeDialog() {
        dialog.current.close();
    }

    return createPortal(
        <dialog className="dialog" ref={dialog}>
            <h2 className="dialog__title title-1">{title}</h2>
            <p className="dialog__text title-2">{text}</p>
            <div className="dialog__actions">
                <button className="dialog__btn" onClick={btnAction}>
                    {btnText}
                </button>
                <button
                    className="dialog__btn dialog__btn--close"
                    onClick={closeDialog}
                >
                    Close
                </button>
            </div>
        </dialog>,
        document.getElementById("modal")
    );
}
