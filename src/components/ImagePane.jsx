import React, { useState, useEffect } from "react";

const ImagePane = ({ imageUrl, isLoading }) => {
  const [showLoader, setShowLoader] = useState(true); // State to control loader visibility

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true); // Show loader when isLoading is true

      // Set a timer to hide the loader after 500ms
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 500);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    } else {
      setShowLoader(false); // Hide loader immediately if isLoading is false
    }
  }, [isLoading]); // Trigger effect when isLoading changes

  return (
    <div className="w-full max-w-6xl flex justify-center items-center min-h-[300px]">
      {showLoader ? (
        // Show loading spinner in the center
        <div className="flex justify-center items-center">
          <div className="spinner-loader"></div>
        </div>
      ) : imageUrl ? (
        // Show the image with fade-in effect
        <img
          src={imageUrl}
          alt="Loaded content"
          className="max-w-full max-h-[80vh] object-contain transition-opacity duration-500 ease-in-out opacity-100"
        />
      ) : (
        // Default message when no image is selected
        <div className="text-gray-600">
          Please select a category to load the image.
        </div>
      )}
    </div>
  );
};

export default ImagePane;
