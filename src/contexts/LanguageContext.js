// src/contexts/LanguageContext.js
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const languages = {
  en: { home: "Home Page", about: "About Page" },
  es: { home: "Página Principal", about: "Página de Información" },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};
