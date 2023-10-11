import React, { useState } from "react";
import "./Assets/CSS/App.css"
import Fond from "./Assets/Images/Home.jpg"
import { useNavigate } from "react-router-dom";
import callAPI from "./CallAPI"


function App() {

    const navigate=useNavigate() ; 
    const [socketResult,setSocketResult]=useState()

    async function fetchData(endpointName) {
        try {
          const result = await callAPI(endpointName);
          console(result);
        } catch (error) {
          console.error("Une erreur s'est produite :", error);
        }
      }

    return (
        <div id="Main-div-app">
            <div id="Div-1"> 
                <img src={Fond} id="Fond" alt="Brise le silence"/>
            </div>

            <div id="Div-2"> 
                <h1> Brise le silence </h1>
               <button onClick={() => {fetchData("setHost")}}> Créer une salle </button>
            </div>
        </div>
    )
  }

export default App ;