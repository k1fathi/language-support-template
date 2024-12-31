// src/components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="loader-container fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="loader border-[0.8rem] border-solid border-[#2ad8ff] border-t-[#2ad8ff] border-r-[#f3f3f3] border-b-[#f3f3f3] border-l-[#f3f3f3] rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
