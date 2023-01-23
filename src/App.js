import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  GameDetails, 
  Games, 
  Home, 
  Leaderboard,
  Profile,
  Table
} from "./pages"
import { Navbar, Footer } from "./components";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Gamedetails" element={<GameDetails />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Games/Table" element={<Table />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
