import React, { useState } from "react";
import "./Assets/CSS/Kahoot.css"

function Kahoot() 
{
    const [Question,setQuestion]=useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.")
    return(
        <div id="Question">
            <p> {Question} </p>
            <button> Question Suivante </button>
        </div>
    )
}


export default Kahoot ; 