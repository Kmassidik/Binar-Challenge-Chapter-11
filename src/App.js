import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Leaderboard from "./pages/Leaderboard"
import Games from "./pages/games/Games";
import LandingGame from "./pages/landingGame/LandingGames";
import { Navbar, Footer } from "./components";
import Leader from "./components/leaderboard/Leaderboard"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/LandingGames" element={<LandingGame />} />
          <Route path="/Leader" element={<Leader />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
