// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Router>
      <div
        className={`min-h-screen ${
          theme === "light" ? "bg-white" : "bg-gray-900"
        }`}
      >
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        {/* Rest of your app content */}
      </div>
    </Router>
  );
}

export default App;
