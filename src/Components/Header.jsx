import React from 'react';
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <HashLink to={"/#home"} ><h1>Techystar</h1></HashLink>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/Contact"}>Contact</HashLink>
            <HashLink to={"/about"}>About</HashLink>
            <HashLink to={'/brand'}>Brands</HashLink>
            <HashLink to={"/service"}>Services</HashLink>
        </main>
    </nav>
  )
}

export default Header