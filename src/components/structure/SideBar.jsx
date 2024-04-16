import React from "react";

import SideBarButton from "../core/SideBarButton";
import Button from "../core/Button";

import '../../styles/ui/soft-ui-dashboard.min.css'
import '../../styles/components-styles/sidenav.css'

import { faHome, faChartSimple, faTable, faUser, faRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function SideBar(){
    return(
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y" itemID="sidenav-main">
            <div className="sidenav-header">
                <a className="navbar-brand m-0" href="/">
                    <img src={"https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct-dark.png"} alt="" className="navbar-brand-img h-100" />
                    <span className="ms-1 font-weight-bold">Título da Brand</span>
                </a>
            </div>
            <hr className="horizontal dark mt-0"/>
            <div className="collapse navbar-collapse w-auto ps" id="sidenav-collapse-main">
                <div className="navbar-nav">
                    <SideBarButton btnName={'Dashboard'} btnLink={'/'} btnIcon={faHome}></SideBarButton>
                    <SideBarButton btnName={'Gráficos'} btnLink={'aaaaaaaa'} btnIcon={faChartSimple}></SideBarButton>
                    <SideBarButton btnName={'Tabelas'} btnLink={'bbbb'} btnIcon={faTable}></SideBarButton>
                    <div className="nav-item mt-5"> <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6"> Meu Usuário</h6></div>
                    <SideBarButton btnName={'Perfil'} btnLink={'/'} btnIcon={faUser}></SideBarButton>
                    <SideBarButton btnName={'Entrar'} btnLink={'aaaaaaaa'} btnIcon={faRightToBracket}></SideBarButton>
                    <SideBarButton btnName={'Criar Conta'} btnLink={'bbbb'} btnIcon={faUserPlus}></SideBarButton>
                </div>

                
            </div>
            <div className="sidenav-footer mx-3 ">
                    <Button btnLink={"AA"} btnType={4}></Button>
                        <Button btnLink={"AA"} btnType={1}></Button>
                    </div>

        </aside>
    )

}

export default SideBar;