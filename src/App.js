import React from "react";
import "./Assets/CSS/App.css"
import Fond from "./Assets/Images/Home.jpg"
import SocketIOClient from "socket.io-client"
import { useNavigate } from "react-router-dom";

function App() {

    const navigate=useNavigate() ; 
    

    return (
        <div id="Main-div-app">
            <div id="Div-1"> 
                <img src={Fond} id="Fond" alt="Brise le silence"/>
            </div>

            <div id="Div-2"> 
                <h1> Brise le silence </h1>
                <button onClick={() => {navigate("/Room")}}> Créer une salle </button>
            </div>
        </div>
    )
  }

export default App ;