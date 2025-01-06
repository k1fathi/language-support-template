import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ImagePane from "./ImagePane"; // Import the ImagePane component

const ImageLoader = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedImage, setLoadedImage] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [showArrows, setShowArrows] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

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

    setTimeout(() => {
      setIsLoading(false);
      setLoadedImage(largeImgFrame); // Update the image URL dynamically
    }, 500); // Simulate loading delay
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
    <section
      id="features"
      className="flex flex-col justify-center items-center"
    >
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
        <div class="flex overflow-x-auto scrollbar-hide-mobile scroll-smooth px-4 md:px-8 flex-row flex-nowrap content-around justify-evenly items-center h-24 md:h-32 lg:h-40">
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

      {/* Use the ImagePane component with dynamic imageUrl */}
      <div className="w-full flex justify-center items-center">
        <ImagePane imageUrl={loadedImage} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default ImageLoader;
