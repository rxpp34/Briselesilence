import React from "react";
import "../Assets/CSS/WaintingPage.css"
import { useNavigate } from "react-router-dom";



function WaitingPage() {
    const navigate=useNavigate()
    return(
        
        <div id="Main-div-WP"> 
            <p> Prenez connaissance de vos situations la partie commence bientôt ! </p>
            <button onClick={() => {navigate('/Game')}}>  Commencer  ! </button>
        </div>
    )

}

export default WaitingPage ; 