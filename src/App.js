import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    // <h1> Hello Ji</h1>
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                  alert={showAlert}
                />
              }
            />
          </Routes>
          <Alert alert={alert} />
        </div>
      </Router>
    </>
  );
}

export default App;
// !CWH part 17 00:00
