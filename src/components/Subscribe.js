// src/components/Subscribe.js
import React, { useState } from "react";
import subscribePhoto from "../assets/images/subscribe_photo.png";
import { FaChevronRight } from "react-icons/fa";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubscribe = () => {
    // Add your subscription logic here
    if (email && email.includes("@")) {
      setResponseMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setResponseMessage("Please enter a valid email address.");
    }
  };

  return (
    <section id="subscribe_us_for_more" className="py-16 px-4">
      <div className="subscribe-section max-w-6xl mx-auto">
        <div className="subscribe-content text-center">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-4">
            Subscribe us for more
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to stay up to date with new developments and news.
          </p>

          <div className="subscribe-area bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="subscribe-photo-div">
                <img
                  src={subscribePhoto}
                  alt="Subscribe"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>

              <div className="subscribe-form-container">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Stay up to date!
                </h3>
                <div className="subscribe-form flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    onClick={handleSubscribe}
                    className="subscribe-button flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#29d7ff] to-[#e000ff] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <span>Subscribe</span>
                    <FaChevronRight />
                  </button>
                  {responseMessage && (
                    <span className="text-sm text-gray-600 mt-2">
                      {responseMessage}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;