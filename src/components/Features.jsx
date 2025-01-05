import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageLoader = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedImage, setLoadedImage] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    // Fetch the button data from the JSON file
    fetch("/data/features.json")
      .then((response) => response.json())
      .then((data) => setButtons(data))
      .catch((error) => console.error("Error loading button data:", error));

    // Check if buttons container needs arrows
    const checkOverflow = () => {
      const container = document.querySelector(".button-container");
      if (container) {
        setShowArrows(container.scrollWidth > container.clientWidth);
      }
    };

    // Initial check
    checkOverflow();

    // Add resize listener
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [buttons]);

  const handleButtonClick = (buttonId, largeImgFrame) => {
    setActiveButton(buttonId);
    setIsLoading(true);
    setLoadedImage(null);

    setTimeout(() => {
      setIsLoading(false);
      setLoadedImage(largeImgFrame);
    }, 2000);
  };

  const handleScroll = (direction) => {
    const container = document.querySelector(".button-container");
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Arrow buttons - only shown when needed */}
        {showArrows && (
          <>
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 
                       bg-white bg-opacity-80 rounded-full flex items-center justify-center
                       hover:bg-opacity-100 transition-all duration-200 shadow-md"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 
                       bg-white bg-opacity-80 rounded-full flex items-center justify-center
                       hover:bg-opacity-100 transition-all duration-200 shadow-md"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </>
        )}

        {/* Button container */}
        <div
          className="button-container flex overflow-x-auto scrollbar-hide 
                      scroll-smooth gap-4 px-4 py-4 md:px-8"
        >
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id, button.largeImgFrame)}
              className={`flex-none min-w-[120px] h-12 bg-cover bg-center 
                         flex items-center justify-center font-bold
                         transition-all duration-200 ${
                           activeButton === button.id
                             ? "text-white"
                             : "text-black"
                         }`}
              style={{
                backgroundImage: `url(${
                  activeButton === button.id
                    ? button.darkImgBtn
                    : button.lightImgBtn
                })`,
              }}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>

      {/* Image display area */}
      <div
        className="w-full h-full flex justify-center items-center
                    px-4 md:px-8"
      >
        {isLoading ? (
          <div>Loading...</div>
        ) : loadedImage ? (
          <img
            src={loadedImage}
            alt="Loaded content"
            className="max-w-full max-h-full object-contain mt-2"
          />
        ) : (
          <div>Please select a category to load the image.</div>
        )}
      </div>
    </div>
  );
};

export default ImageLoader;
