import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Header = ({ language, toggleLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "unset" : "hidden";
  };

  const menuItems = [
    // { to: "/games", label: "Games" },
    { to: "/features", label: "Features" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/case-studies", label: "Case Studies" },
  ];

  return (
    <header className="relative z-50">
      {/* Main Header Bar */}
      <div className="flex justify-between items-center px-5 py-4 shadow-md bg-white font-['Outfit']">
        {/* Logo Container */}
        <div className="logo-container">
          <Link to="/">
            <img
              src="/images/zuzzuu_logo.svg"
              alt="Zuzzuu Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation and Controls */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Desktop Menu Items */}
          <nav className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-gray-700 hover:text-gray-900 hover:gradient-text transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <Button to="/contact">GET STARTED</Button>

          {/* Language Select */}
          {/* <select
            value={language}
            onChange={toggleLanguage}
            className="bg-gray-100 border border-gray-300 rounded-xl px-2 py-1 text-sm"
          >
            <option value="en">EN</option>
            <option value="tr">TR</option>
          </select> */}
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Language Select - Mobile */}
          {/* <select
            value={language}
            onChange={toggleLanguage}
            className="bg-gray-100 border border-gray-300 rounded-xl px-2 py-1 text-sm"
          > 
            <option value="en">EN</option>
            <option value="tr">TR</option>
          </select> 

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <FaTimes className="text-2xl" />
        </button>

        {/* Mobile Menu Items */}
        <div className="pt-6 px-6">
          <nav className="flex flex-col">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.to}>
                <Link
                  to={item.to}
                  className="py-4 text-xl text-gray-800 hover:gradient-text transition-all duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
                {index < menuItems.length - 1 && (
                  <div className="h-px w-full bg-gray-200"></div>
                )}
              </React.Fragment>
            ))}
            <div className="pt-6">
              <Button to="/contact" onClick={toggleMenu} className="w-full">
                GET STARTED
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
