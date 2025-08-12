import { memo } from "react";

import LOGO from "../../assets/logo.svg";

const Logo = memo(function Logo() {
    return (
        <div className="logo">
            <img src={LOGO} className="logo__img" alt="logo" />
            <span className="logo__text title-2">Quick Notes</span>
        </div>
    );
});

export default Logo;
