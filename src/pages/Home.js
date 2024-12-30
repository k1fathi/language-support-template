// src/pages/Home.js
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Home = () => {
  const { language, toggleLanguage, languages } = useContext(LanguageContext);

  return (
    <div>
      <h1>{languages[language].home}</h1>
      <button onClick={toggleLanguage}>
        {language === "en" ? "Switch to Spanish" : "Switch to English"}
      </button>
      <p>Welcome to the home page.</p>
    </div>
  );
};

export default Home;
