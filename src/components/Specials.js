import React from "react";
import Button from "./Button"

function Specials(){
    return (
        <div className="specials">
            <div className="specialsHeader">
                <h2>This Weeks Specials!</h2>
                <Button  input="Online Menu"/>
            </div>

            <div className="specialsGrid">
                <div className="card">
                    <img src="./images/salad.jpg" alt="greek salad"/>

                    <div className="cardInfo">

                    
                        <div className="cardHeader">
                            <h3>Greek Salad</h3>
                            <p>$12.99</p>
                        </div>
                            <p>Refreshing salad made with tomato, lettuce, feta cheese, and olives dressed with salt, hot pepper, and olive oil</p>
                            
                        <Button input="Order for Delivery"/>
                    </div>
                </div>

                <div className="card">
                    <img src="./images/pasta.jpg" alt="pasta"/>
                    <div className="cardInfo">
                            <div className="cardHeader">
                                <h3>Pasta</h3>
                                <p>$13.11</p>
                            </div>
                            <p>Special homemade pasta, topped with tomato, basil, cheese, and lemon</p>

                            {/* to make all btn on each card SAME placement make the cardDescription have SAME height so then itll push the btn to be the same place */}
                            <Button input="Order for Delivery"/>
                    </div>
                </div>


                <div className="card">
                    <img src="./images/bruschetta.jpg" alt="bruschetta"/>

                    <div className="cardInfo">
                        <div className="cardHeader">
                            <h3>Bruschetta</h3>
                            <p>$16.79</p>
                        </div>
                        <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                        <Button input="Order for Delivery"/>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Specials;