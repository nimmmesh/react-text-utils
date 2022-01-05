import React, { useState } from "react";

import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [isDarkModeEnabled, setisDarkModeEnabled] = useState(false);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (isDarkModeEnabled) {
      setisDarkModeEnabled(false);
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utils | Light Mode";
    } else {
      setisDarkModeEnabled(true);
      document.body.style.backgroundColor = "rgb(19 29 46)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils | Dark Mode";
    }
    // setInterval(() => {
    //   document.title = "Text Utils is an amazing utility";
    // }, 2000);
    // setInterval(() => {
    //   document.title = "Install Text Utils now";
    // }, 1500);
  };

  return (
    <>
      <Navbar darkMode={isDarkModeEnabled} setisDarkModeEnabled={toggleMode} />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analzye:"
        darkMode={isDarkModeEnabled}
        setisDarkModeEnabled={toggleMode}
      />
      {/* <About /> */}
    </>
  );
}

export default App;
