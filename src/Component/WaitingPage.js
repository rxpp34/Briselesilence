import React from "react";
import { useState } from "react";
import "../Assets/CSS/WaintingPage.css"
import { useNavigate } from "react-router-dom";



function WaitingPage() {
    const navigate=useNavigate()
    const [Game,setGame]=useState("Undercover")

    function GoToGame()
    {
        if(Game==="Undercover")
        {
            navigate("./Undercover")
        }
        else
        {
            navigate("./Kahoot")
        }
    }

    return(
        
        <div id="Main-div-WP"> 
            <p> Prenez connaissance de vos situations la partie commence bientôt ! </p>
            <button onClick={() => {GoToGame()}}>  Commencer  ! </button>
        </div>
    )

}

export default WaitingPage ; 