import React, { useState } from "react";
import "../Assets/CSS/PlayerCard.css"
import PlayerIcon from "../Assets/Images/PlayerIcone.png"


function PlayerCard() {

    const [pseudo,setPseudo]=useState("Pseudoo")

    return (
        <div id="Main">
            <img src={PlayerIcon}/>

            <p id="PseudoLabel"> {pseudo}</p>
        </div>
    )
}

export default PlayerCard ;