import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    // <h1> Hello Ji</h1>
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
//  CWH part 12 00:00
