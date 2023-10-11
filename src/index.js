import React from 'react';
import ReactDOM from 'react-dom'; // Modifiez cette ligne
import App from "./App";
import Room from './Room';
import Undercover from './Undercover';
import Kahoot from "./Kahoot" ; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/Undercover" element={<Undercover />} />
        <Route path="/Kahoot" element={<Kahoot />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
