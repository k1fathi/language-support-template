import React, { useState, useEffect, useRef } from "react";

const ImagePane = ({ imageUrl, isLoading }) => {
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
          className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-1000 ease-in-out ${
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
