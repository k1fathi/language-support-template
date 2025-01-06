import React from "react";

const ImagePane = ({ imageUrl, isLoading }) => {
  return (
    <div className="w-full max-w-6xl flex justify-center items-center min-h-[300px]">
      {isLoading ? (
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
