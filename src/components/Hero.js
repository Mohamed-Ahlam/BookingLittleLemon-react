import React from "react";

function Hero(){
    return (
        <div className="hero">
            <div className="heroText">
                <h1>Little Lemon</h1>
                <h2>Minneapolis</h2>
                <div>
                <h3>We are a family owned Mediterranean restaurent located <br/>on Maldova Street in Minneapolis, Minnesota. We focus <br/> on traditional recipes served with a modern twist</h3>
                    </div>
                <button type="submit">Reserve a table</button>
            </div>

            <div className="heroImg"><img src="./images/heroImg.jpg" alt="hero image"/></div>
        </div>
    )
}

export default Hero;