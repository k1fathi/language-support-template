// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Header = ({ theme, toggleTheme, language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-5 py-4 shadow-md relative bg-white">
      {/* Logo Container */}
      <div className="logo-container flex-1">
        <Link to="/">
          <img
            src="http://vibte.online/assets/images/zuzzuu_logo.svg"
            alt="Zuzzuu Logo"
            className="cursor-pointer w-auto h-10"
          />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-800 p-2"
          aria-label="Toggle menu"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <ul
          className={`nav-items ${
            isMenuOpen ? "open" : ""
          } md:flex md:space-x-8 md:items-center`}
        >
          <li>
            <Link
              to="/games"
              className="font-outfit text-gray-700 hover:text-gray-900"
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="font-outfit text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="font-outfit text-gray-700 hover:text-gray-900"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-outfit text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="get-started px-6 py-2 font-outfit font-bold"
            >
              GET STARTED
            </Link>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle and Language Select */}
      <div className="flex items-center space-x-4 ml-4">
        <select
          value={language}
          onChange={toggleLanguage}
          className="font-outfit bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
