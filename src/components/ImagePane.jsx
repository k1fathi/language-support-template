import React, { useState, useEffect, useRef } from "react";
import "animate.css"; // Import animate.css

const ImagePane = ({
  imageUrl,
  isLoading,
  className = "",
  alt = "",
  animation = "flipInY", // Default animation type
  animationDuration = "1s", // Default animation duration
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loadError, setLoadError] = useState(false); // Track image load errors
  const loadedImages = useRef(new Set());
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!isLoading && imageUrl) {
      if (loadedImages.current.has(imageUrl) && !isFirstLoad.current) {
        // If image is already loaded, skip loading state
        setCurrentImage(imageUrl);
        setImageLoaded(true);
        setShowLoader(false);
        setLoadError(false);
        return;
      }

      // Start loading new image
      setShowLoader(true);
      setImageLoaded(false);
      setLoadError(false);

      const img = new Image();
      img.onload = () => {
        // Image loaded successfully
        loadedImages.current.add(imageUrl);
        setCurrentImage(imageUrl);
        setImageLoaded(true);
        setShowLoader(false);
        isFirstLoad.current = false;
      };
      img.onerror = () => {
        // Handle image load error
        setLoadError(true);
        setShowLoader(false);
        setImageLoaded(false);
      };
      img.src = imageUrl;
    } else {
      // No image URL or loading state
      setShowLoader(false);
    }
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

  // Use className if provided, otherwise use default classes
  const imageClasses = className || defaultImageClasses;

  // Add opacity and animation classes based on imageLoaded state
  const combinedImageClasses = `${imageClasses} ${
    imageLoaded ? "opacity-100" : "opacity-0"
  } ${imageLoaded ? `animate__animated animate__${animation}` : ""}`;

  return (
    <div className="w-full max-w-6xl flex justify-center items-center min-h-[15rem]">
      {/* Inject the keyframes into a style tag */}
      <style>{spinKeyframes}</style>

      {showLoader ? (
        <div className="flex justify-center items-center">
          <div style={loaderStyles}></div>
        </div>
      ) : loadError ? (
        <div className="text-center text-red-500">
          Failed to load image. Please try again.
        </div>
      ) : currentImage ? (
        <img
          src={currentImage}
          alt={alt} // Use the alt prop here
          className={combinedImageClasses.trim()} // Apply combined classes
          style={{ animationDuration }} // Apply custom animation duration
        />
      ) : null}
    </div>
  );
};

export default ImagePane;
