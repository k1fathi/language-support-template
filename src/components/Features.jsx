import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageLoader = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedImage, setLoadedImage] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [showArrows, setShowArrows] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false); // Control fade-in effect for large image
  const [hoveredButton, setHoveredButton] = useState(null); // Track hovered button

  useEffect(() => {
    // Fetch the button data from the JSON file
    fetch("/data/features.json")
      .then((response) => response.json())
      .then((data) => {
        setButtons(data);

        // Set the default image to Dashboards
        const dashboardButton = data.find(
          (button) => button.name === "Dashboards"
        );
        if (dashboardButton) {
          setLoadedImage(dashboardButton.largeImgFrame);
          setActiveButton(dashboardButton.id);
          setIsImageVisible(true); // Show the default image with fade-in effect
        }
      })
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
  }, []);

  const handleButtonClick = (buttonId, largeImgFrame) => {
    setActiveButton(buttonId);
    setIsLoading(true);
    setIsImageVisible(false); // Hide the current image before loading the new one

    setTimeout(() => {
      setIsLoading(false);
      setLoadedImage(largeImgFrame);
      setIsImageVisible(true); // Fade in the new image after loading
    }, 2000); // Adjust the delay to match the fade-in duration
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
    <section id="features" className="flex flex-col justify-center">
      <div className="relative w-full max-w-6xl">
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
          className="flex overflow-x-auto scrollbar-hide-mobile 
         scroll-smooth px-4 md:px-8 
         flex-row flex-nowrap content-around justify-evenly items-center"
          style={{ height: "10rem" }}
        >
          {buttons.map((button) => (
            <div
              key={button.id}
              onClick={() => handleButtonClick(button.id, button.largeImgFrame)}
              onMouseEnter={() => setHoveredButton(button.id)} // Track hover
              onMouseLeave={() => setHoveredButton(null)} // Clear hover
              className={`flex-none min-w-[120px] flex flex-col items-center justify-center 
                         transition-all duration-200 cursor-pointer ${
                           activeButton === button.id
                             ? "scale-110" // Scale up active button
                             : "scale-100"
                         }`}
            >
              <img
                src={
                  activeButton === button.id || hoveredButton === button.id
                    ? button.darkImgBtn // Show dark image for active or hovered button
                    : button.lightImgBtn // Show light image for inactive buttons
                }
                alt={button.name}
                className="button-3d w-14 h-14" // Adjust size as needed
              />
              <span className="text-sm font-medium text-gray-700 mt-2">
                {button.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image display area */}
      <div className="w-full max-w-6xl flex justify-center items-center">
        {isLoading ? (
          <div className="spinner-loader"></div>
        ) : loadedImage ? (
          <img
            src={loadedImage}
            alt="Loaded content"
            className={`max-w-full max-h-[80vh] object-contain transition-opacity duration-500 ${
              isImageVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div>Please select a category to load the image.</div>
        )}
      </div>

      {/* CSS for spinner loader */}
      <style jsx>{`
        .spinner-loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #333; /* Spinner color */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default ImageLoader;
