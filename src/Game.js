import React, { useState } from "react";
import "./Assets/CSS/Game.css"
import PlayerCard from "./Component/PlayerCard";



function Game() 
{
    const [NbrVote,setNbrVote]=useState(4)
    const [NbrTotal,setNbrTotal]=useState(10)
    return(
        <div id="Main-div">
            <div id="Players">
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
               
            </div>

            <div id="div-vote">
                <p> {NbrVote} / {NbrTotal} ont voté </p>
            </div>
            
        </div>

    )
}

export default Game ; 