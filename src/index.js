import React from 'react';
import ReactDOM from 'react-dom'; // Modifiez cette ligne
import App from "./App";
import Room from './Room';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/Room" element={<Room />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
