import React from "react";

import SideBar from '../components/structure/SideBar';
import NavBar from '../components/structure/NavBar';

function Layout(){
    return(
    <div>
        <SideBar></SideBar>
        <main className='main-content position-relative max-height-vh-100 h-100 border-radius-lg ps ps--active-y'><NavBar></NavBar></main>
    </div>
    )
}

export default Layout;