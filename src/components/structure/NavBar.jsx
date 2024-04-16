import React from "react";
import Button from "../core/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function NavBar(){
return(
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
        <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                    <li className="breadcrumb-item text-sm">
                        <a href="/" className="opacity-5 text-dark">Texto</a>
                    </li>
                    <li className="breadcrumb-item text-sm text-dark active">Texto2</li>
                </ol>
                <h6 className="font-weight-bolder mb-0">Texto2</h6>
            </nav>
            <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4 align-items-center">

                <ul className=" ms-md-auto navbar-nav  justify-content-end">
                    <li className="nav-item d-flex align-items-center"> <Button btnType={5} btnName={'Botao'}  btnBS={'w-100 mb-0 mr-2'}></Button></li>
                    <li className="nav-item d-flex align-items-center">
                        <a href="/" className="nav-link text-body font-weight-bold px-0">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        <span className="d-sm-inline d-none m-1">Criar uma conta</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default NavBar;