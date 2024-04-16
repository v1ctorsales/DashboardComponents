import React from "react";

import '../../styles/components-styles/sidenav.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBarButton(props){
    return(
        <li className="nav-item">
            <a href={props.btnLink} className="nav-link">
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                <svg width="12px" height="12px">  
                    <FontAwesomeIcon icon={props.btnIcon}></FontAwesomeIcon>
                    </svg>
                </div>
                <span className="nav-link-text ms-1">{props.btnName}</span>
            </a>
        </li>
    )
}

export default SideBarButton;


