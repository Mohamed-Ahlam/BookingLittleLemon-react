import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faInstagram,
faTwitter,
faFacebook
} from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div className="footer">
            <img src="./images/footerlogo.jpg" alt="footer logo"/>

            <div className="foot">
                <h4>Opening Hours</h4>
                <p>Mon-Friday 10am-9pm</p>
                <p>Sat 10am-11pm</p>
                <p>Sunday Closed</p>
            </div>

            <div className="foot" >
                <h4>Contact Us</h4>
                <p>(612) 212-9301</p>
                <p>littlelemon@hotmail.com</p>
            </div>

            <div className="foot">
                <h4>Connect</h4>
                <FontAwesomeIcon icon={faInstagram} size="xl" style={{marginRight:"10px"}}/>
                <FontAwesomeIcon icon={faTwitter} size="xl" style={{marginLeft:"10px", marginRight:"10px"}}/>
                <FontAwesomeIcon icon={faFacebook} size="xl" style={{marginLeft:"10px", marginRight:"10px"}}/>
            </div>
        </div>
    )
}

export default Footer;