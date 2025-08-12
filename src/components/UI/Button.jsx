import { memo } from "react";

const Button = memo(function Button({
    isText = true,
    text,
    icon,
    extraClasses,
    ...props
}) {
    let classes = "theme-btn ";
    classes += !isText ? "theme-btn--icon " : " ";

    if (extraClasses) {
        classes += extraClasses;
    }

    return (
        <button className={classes} {...props}>
            <span className="theme-btn__icon">{icon}</span>
            {text && <span className="theme-btn__text text-sm">{text}</span>}
        </button>
    );
});

export default Button;
