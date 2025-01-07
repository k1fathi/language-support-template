import React, { useState, useEffect } from "react";

const ImagePane = ({ imageUrl, isLoading }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    setShowLoader(isLoading);
    if (!isLoading) {
      setImageLoaded(false);
      if (imageUrl) {
        const img = new Image();
        img.onload = () => {
          setCurrentImage(imageUrl);
          setImageLoaded(true);
          setShowLoader(false);
        };
        img.src = imageUrl;
      } else {
        setShowLoader(false);
      }
    }
    return () => setImageLoaded(false);
  }, [imageUrl, isLoading]);

  return (
    <div className="w-full max-w-6xl flex justify-center items-center min-h-[300px]">
      {showLoader ? (
        <div className="flex justify-center items-center">
          <div className="spinner-loader"></div>
        </div>
      ) : currentImage ? (
        <img
          src={currentImage}
          alt="Loaded content"
          className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-700 ease-in-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
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
