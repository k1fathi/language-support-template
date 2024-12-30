// src/components/Header.js
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ theme, toggleTheme }) => {
  const { language, toggleLanguage, languages } = useContext(LanguageContext);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-2xl font-bold">Logo</div>
      </div>
      <nav className="flex items-center space-x-4">
        <a href="/contact" className="hover:underline">
          Contact
        </a>
        <a href="/features" className="hover:underline">
          Features
        </a>
        <a href="/games" className="hover:underline">
          Games
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <select
          value={language}
          onChange={toggleLanguage}
          className="bg-gray-700 text-white p-2 rounded"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <button onClick={toggleTheme} className="text-2xl">
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
