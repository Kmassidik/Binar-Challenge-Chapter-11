import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Leaderboard from "./pages/Leaderboard"
import Games from "./pages/Games";
import { Navbar } from "./components";
import Footer from "./components/footer/footer";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
