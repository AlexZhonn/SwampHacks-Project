import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analyze from "./components/Analyze";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyze" element={<Analyze />} />
    </Routes>
    
  )
}

export default App;
