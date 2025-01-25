import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const styles = {
    height: "300vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    zIndex: -2,
  };

  return (
    <>
      <Navbar />
      <div>
      </div>
    </>
  );
}

export default App;
