import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const styles = {
    background: "linear-gradient(to right, black, black)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  return (
    <>
      <Navbar />
      <div style={styles}>
        <h1>Vite + React</h1>
      </div>
    </>
  );
}

export default App;
