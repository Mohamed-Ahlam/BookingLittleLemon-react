import React from "react";
import Button from "./Button"

function Hero(){
    return (

        <>
        <header>
        {/* <div className="hero"> */}
                <div className="heroText">
                    <h1>Little Lemon</h1>
                    <h2>Minneapolis</h2>
                    {/* <p>We are a family owned Mediterranean restaurent located <br/>on Maldova Street in Minneapolis, Minnesota. We focus <br/> on traditional recipes served with a modern twist</p> */}
                    <p>We are a family owned Mediterranean restaurent located on Maldova Street in Minneapolis, Minnesota. We focus on traditional recipes served with a modern twist</p>
                    <Button input="Reserve a table"></Button>
                </div>

                <div className="heroImg">
                    {/* <div className="imgContainer"> */}
                    <img src="./images/heroImg.webp" alt="hero image"/></div>
                    {/* </div> */}
                    
            {/* </div> */}
        </header>
        
        </>
            

    )
}

export default Hero;