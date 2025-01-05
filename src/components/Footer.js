// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light_grayish_cyan mx-4 mt-16 p-8 rounded-t-[0.625rem] sm:mx-2 md:mx-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo Column */}
        <div className="text-sm text-black max-w-[300px]">
          <img
            src="/images/zuzzuu_logo.svg"
            alt="Zuzzuu Logo"
            className="mb-4"
          />
          <address className="not-italic leading-relaxed">
            <strong className="block mb-2">ZUZZUU Support</strong>
            E-Mail:{" "}
            <a href="mailto:info@zuzzuu.com" className="hover:underline">
              info@zuzzuu.com
            </a>
            <br />
            Phone: 0549 407 65 54
            <br />
            Address: İTÜ Teknokent ARI 2 <br />
            Binasi B Blok No: 501
            <br />
            34467, Sariyer/Istanbul
          </address>
        </div>

        {/* Resources Column */}
        <div>
          <strong className="block mb-4">Resources</strong>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Help Docs
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                On-Demand Demo
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                API
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Partners
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-sm text-black hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Features Column */}
        <div>
          <strong className="block mb-4">Features</strong>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Dashboards
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Customer Journeys
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Games
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Analytics
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Awards
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Data Tracking
              </Link>
            </li>
          </ul>
        </div>

        {/* Learn Column */}
        <div>
          <strong className="block mb-4">Learn</strong>
          <ul className="space-y-2">
            <li>
              <Link to="/blog" className="text-sm text-black hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm text-black hover:underline">
                Software Team Hub
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Column */}
        <div>
          <strong className="block mb-4">Follow Us:</strong>
          <div className="flex gap-2">
            <a
              href="https://x.com/usezuzzuu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
            >
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/usezuzzuu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/zuzzuu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-sm text-left">
        All Rights Reserved © {new Date().getFullYear()} ZUZZUU
      </div>
    </footer>
  );
};

export default Footer;