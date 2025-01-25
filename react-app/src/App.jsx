import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Analyze from "./components/Analyze";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";



function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/analyze" element={<Analyze />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
  )
}

export default App;
