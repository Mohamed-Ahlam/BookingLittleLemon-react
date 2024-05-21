import React from "react";
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div className="primaryHeader">
            <div className="logo"><img src="./images/logo.png" alt="little lemon logo"/></div>
        
        <nav className="nav">
           
        <Link to="/" style={{ color: "white"}}><div><a href="#">Home</a></div></Link>
        <Link to="/" style={{ color: "white"}}><div><a href="#">About</a></div></Link>
        {/* <Link to="/" style={{ color: "white"}}><div><a href="#">Services</a></div></Link> */}
        <Link to="/" style={{ color: "white"}}><div><a href="#">Menu</a></div></Link>
        <Link to="/booking" style={{ color: "white"}}><div><a href="#">Reservation</a></div></Link>
        <Link to="/" style={{ color: "white"}}><div><a href="#">Order Online</a></div></Link>

                {/* <div><a href="#">Login</a></div> */}

        </nav>

        {/* make a mobile nav */}
        
        </div>
    )
}

export default Nav;