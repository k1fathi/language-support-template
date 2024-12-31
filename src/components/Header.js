// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Button from "./Button";

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center px-5 py-4 shadow-md relative font-['Outfit']">
      {/* Logo Container */}
      <div className="logo-container flex-1">
        <Link to="/">
          <img
            src="http://vibte.online/assets/images/zuzzuu_logo.svg"
            alt="Zuzzuu Logo"
            className="cursor-pointer"
            style={{ width: "auto", height: "40px" }}
          />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger-menu md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-800"
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
              className="block px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
          </li>
          <li>
            <Button to="/contact">GET STARTED</Button>
          </li>
        </ul>
      </nav>

      {/* Language Select */}
      <div className="flex items-center ml-4">
        <select
          value={language}
          onChange={toggleLanguage}
          className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
