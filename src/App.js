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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Games" element={<Games />} />
          <Route exact path="/Gamedetails" element={<GameDetails />} />
          <Route exact path="/Leaderboard" element={<Leaderboard />} />
          <Route exact path="/Games/Table" element={<Table />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
