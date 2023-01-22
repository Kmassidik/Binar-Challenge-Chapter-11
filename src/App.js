import React from "react";
import "./App.css";
import { ModalLogin } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home/>
      <ModalLogin></ModalLogin>
    </div>
  );
}

export default App;
