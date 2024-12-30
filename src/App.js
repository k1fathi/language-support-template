// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyles } from "./global";
import Home from "./pages/Home";
import About from "./pages/About";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <LanguageProvider>
          <Router>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </>
    </ThemeProvider>
  );
}

export default App;
