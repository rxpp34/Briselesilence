import React, { useState } from "react";
import "./Assets/CSS/Room.css"
import PlayerCard from "./Component/PlayerCard";
import WaitingPage from "./Component/WaitingPage";


function Room () 
{

    const [RoomCode,setRoomCode]=useState("776 890 987")
    const [StartParty , setStartParti] =useState(false)

    return(
        !StartParty ? 
        <div id="Main-div">
            <div id="Players">
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
                <PlayerCard/>
            </div>

            <p id="X345"> ROOM CODE </p>

            <div id="RoomCode"> 
                <p> {RoomCode} </p>
            </div>

            <div id="StartParty"> 
                <button onClick={() => {setStartParti(true)}}> Commencer la partie</button>
                <button> Annuler la partie</button>

            </div>
        </div>

        : 

        <WaitingPage/>

    )
}


export default Room; 