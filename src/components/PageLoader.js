// src/components/PageLoader.js (Improved)
import React from "react";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
