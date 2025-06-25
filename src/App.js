import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <div style={{ height: "50px" }}>
          {" "}
          <Alert alert={alert} />
        </div>
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                  alert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
// !CWH part 20 00:00
// http://192.168.1.3:3000
