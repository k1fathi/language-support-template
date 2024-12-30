// src/pages/About.js
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const About = () => {
  const { language, toggleLanguage, languages } = useContext(LanguageContext);

  return (
    <div>
      <h1>{languages[language].about}</h1>
      <button onClick={toggleLanguage}>
        {language === "en" ? "Switch to Spanish" : "Switch to English"}
      </button>
      <p>Welcome to the about page.</p>
    </div>
  );
};

export default About;
