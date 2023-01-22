import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  GameDetails, 
  Games, 
  Home, 
  Leaderboard,
  Profile,
} from "./pages"
import { Navbar, Footer } from "./components";
import Leader from "./components/leaderboard/Leaderboard"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Gamadetails" element={<GameDetails />} />
          <Route path="/Leader" element={<Leader />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
