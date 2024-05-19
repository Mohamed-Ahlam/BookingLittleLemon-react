import React from "react";

// MAKE LINKS WORK LATER 

function Nav(){
    return(
        <div className="primaryHeader">
            <div className="logo"><img src="./images/logo.png" alt="little lemon logo"/></div>
        
        <nav className="nav">
           
                <div><a href="#">Home</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Services</a></div>
                <div><a href="#">Menu</a></div>
                <div><a href="#">Reservation</a></div>
                <div><a href="#">Order Online</a></div>

                {/* <div><a href="#">Login</a></div> */}

        </nav>

        {/* make a mobile nav */}
        
        </div>
    )
}

export default Nav;