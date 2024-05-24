import React from "react";
import {Link} from 'react-router-dom';
import { useState } from "react";

function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return(
        <div className="primaryHeader">


        <nav className={`navbar ${menuOpen ? "open": ""}`}>
        <a href="/" ><img src="./images/logo.png" alt="little lemon logo" className="logo"/></a>


        {/* <Link to="/" style={{ color: "white"}}><div><a href="#">Home</a></div></Link>
        <Link to="/" style={{ color: "white"}}><div><a href="#">About</a></div></Link>
        <Link to="/" style={{ color: "white"}}><div><a href="#">Menu</a></div></Link>
        <Link to="/booking" style={{ color: "white"}}><div><a href="#">Reservation</a></div></Link>
        <Link to="/" style={{ color: "white"}}><div><a href="#">Order Online</a></div></Link> */}
        
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservation</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
               
            </ul>
        </nav>

            
        </div>
    )
}

export default Nav;