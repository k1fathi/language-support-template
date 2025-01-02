// src/contexts/LanguageContext.js
import React, { createContext, useState } from "react";
import { translations } from "./translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "tr" : "en"));
  };

  const value = {
    language,
    toggleLanguage,
    languages: translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
