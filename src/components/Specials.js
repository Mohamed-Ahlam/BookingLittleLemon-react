import React from "react";
import Button from "./Button"

function Specials(){
    return (
        <div className="specials">
            <div className="specialsHeader">
            <h2 className="pushRight">This Weeks Specials!</h2>
            <Button  input="Online Menu"/>
            </div>

            <div className="specialsGrid">
                <div className="card">
                    <img src="./images/salad.jpg" alt="greek salad" style={{width:"100%"}}/>

                    <div className="cardInfo">

                    
                    <div className="cardHeader">
                        <h3>Greek Salad</h3>
                        <p>$12.99</p>
                    </div>
                    <div className="cardDescription">
                        <p>Refreshing salad made with tomato, lettuce, feta cheese, and olives dressed with salt, hot pepper, and olive oil</p>
                        
                    </div>
                    <Button input="Order for Delivery"/>
                    </div>
                </div>
                {/* gs */}

                <div className="card">
                    <img src="./images/bruschetta.jpg" alt="bruschetta" style={{width:"100%"}}/>

                    <div className="cardInfo">
                        <div className="cardHeader">
                            <h3>Bruschetta</h3>
                            <p>$16.79</p>
                        </div>
                        <div className="cardDescription">
                            <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                            
                        </div>
                        <Button input="Order for Delivery"/>
                    </div>
                </div>

                {/* fs */}

                <div className="card">
                    <img src="./images/pasta.jpg" alt="pasta" style={{width:"100%"}}/>
                    <div className="cardInfo">

                        <div className="cardHeader">
                            <h3>Pasta</h3>
                            <p>$13.11</p>
                        </div>
                        <div className="cardDescription">
                            <p>Special homemade pasta, topped with tomato, basil, cheese, and lemon</p>
                        </div>

                        {/* to make all btn on each card SAME placement make the cardDescription have SAME height so then itll push the btn to be the same place */}
                        <Button input="Order for Delivery"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials;