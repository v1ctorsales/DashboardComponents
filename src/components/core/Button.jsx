import React from "react";

import '../../styles/components-styles/Button.css'

function Button({ btnLink, btnType, btnWidth }) {

    const buttonTypes = {
        1: "bg-gradient-primary",
        2: "bg-gradient-secondary",
        3: "bg-gradient",
        4: "btn-white",
        5: "btn-outline-primary"
    };

    const buttonClass = buttonTypes[btnType] || "bg-gradient-primary";
    const widthClass = btnWidth ? `w-${btnWidth}` : 100;

    return (
        <a href={btnLink} className={`btn ${buttonClass} w-${widthClass}`}>
            Botão
        </a>
    );
}

export default Button;
