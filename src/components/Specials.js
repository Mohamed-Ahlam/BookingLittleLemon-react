import React from "react";
import Button from "./Button"

function Specials(){
    return (
        <div className="specials">
            <div className="specialsHeader">
            <h2>This Weeks Specials!</h2>
            <Button input="Online Menu"/>
            </div>


            <div className="specialsGrid">
                <div className="card">
                    <img src="./images/salad.jpg" alt="greek salad" style={{width:"100%"}}/>
                    <div className="cardHeader">
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                    </div>
                    <div className="cardDescription">
                        <p>Refreshing salad made with tomato, lettuce, feta cheese, and olives dressed with salt, hot pepper, and olive oil</p>
                        <Button input="Order for Delivery"/>
                    </div>
                </div>
                {/* gs */}

                <div className="card">
                    <img src="./images/salad.jpg" alt="greek salad" style={{width:"100%"}}/>
                    <div className="cardHeader">
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                    </div>
                    <div className="cardDescription">
                        <p>Refreshing salad made with tomato, lettuce, <br/> feta cheese, and olives dressed with salt, hot <br/>pepper, and olive oil</p>
                        <Button input="Order for Delivery"/>
                    </div>
                </div>

                {/* fs */}

                <div className="card">
                    <img src="./images/salad.jpg" alt="greek salad" style={{width:"100%"}}/>
                    <div className="cardHeader">
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                    </div>
                    <div className="cardDescription">
                        <p>Refreshing salad made with tomato, lettuce, <br/> feta cheese, and olives dressed with salt, hot <br/>pepper, and olive oil</p>
                        <Button input="Order for Delivery"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials;