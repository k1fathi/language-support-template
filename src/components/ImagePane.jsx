import React, { useState, useEffect, useRef } from "react";

const ImagePane = ({ imageUrl, isLoading, className = "", alt = "" }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const loadedImages = useRef(new Set());
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isLoading && imageUrl) {
      if (loadedImages.current.has(imageUrl) && !isFirstLoad.current) {
        setCurrentImage(imageUrl);
        setImageLoaded(true);
        setShowLoader(false);
        return;
      }

      setShowLoader(true);
      setImageLoaded(false);
      const img = new Image();
      img.onload = () => {
        loadedImages.current.add(imageUrl);
        setCurrentImage(imageUrl);
        setImageLoaded(true);
        setShowLoader(false);
        isFirstLoad.current = false;
      };
      img.src = imageUrl;
    } else {
      setShowLoader(false);
    }
    return () => setImageLoaded(false);
  }, [imageUrl, isLoading]);

  // Inline styles for the loader
  const loaderStyles = {
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderLeftColor: "#7083ff", // Using the purple color directly
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
  };

  // Keyframes for the spin animation
  const spinKeyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  // Default classes for the image
  const defaultImageClasses =
    "max-w-full max-h-[80vh] object-contain transition-opacity duration-1000 ease-in-out";

  // Combine default classes with the className prop
  const combinedImageClasses = `${defaultImageClasses} ${
    imageLoaded ? "opacity-100" : "opacity-0"
  } ${className}`;

  return (
    <div className="w-full max-w-6xl flex justify-center items-center min-h-[300px]">
      {/* Inject the keyframes into a style tag */}
      <style>{spinKeyframes}</style>

      {showLoader ? (
        <div className="flex justify-center items-center">
          <div style={loaderStyles}></div>
        </div>
      ) : currentImage ? (
        <img
          src={currentImage}
          alt={alt} // Use the alt prop here
          className={combinedImageClasses.trim()} // Trim to remove extra spaces
        />
      ) : (
        <div className="text-gray-600">
          Please select a category to load the image.
        </div>
      )}
    </div>
  );
};

export default ImagePane;
