import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Animated 404 Number */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-blue-600 opacity-10 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-bounce">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600">
            The page you're looking for seems to have wandered off into the
            digital void.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <FaHome />
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        {/* Animated Search Icon */}
        <div className="mt-12 animate-bounce">
          <FaSearch size={48} color="#9CA3AF" />
        </div>

        {/* Fun Facts */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 mb-2">
            Did you know?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
