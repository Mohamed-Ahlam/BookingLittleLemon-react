import React from "react";


function Button(props){
    return(
        <div className="btn">
        <button type="submit">{props.input}</button>

        </div>
    )
}

export default Button;