import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

const ImageLoader = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedImage, setLoadedImage] = useState(null);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    // Fetch the button data from the JSON file
    fetch("/data/features.json")
      .then((response) => response.json())
      .then((data) => setButtons(data))
      .catch((error) => console.error("Error loading button data:", error));
  }, []);

  const handleButtonClick = (buttonId, largeImgFrame) => {
    setActiveButton(buttonId);
    setIsLoading(true);
    setLoadedImage(null);

    // Simulate image loading
    setTimeout(() => {
      setIsLoading(false);
      setLoadedImage(largeImgFrame);
    }, 2000); // Adjust the timeout as needed
  };

  const handleScroll = (direction) => {
    const container = document.querySelector(".button-container");
    const scrollAmount = 100; // Adjust scroll amount as needed
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        {/* Left scroll button with React Icon */}
        <button
          onClick={() => handleScroll("left")}
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaChevronLeft /> {/* React Icon for left scroll */}
        </button>

        {/* Button container with horizontal scroll */}
        <div
          className="button-container"
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "10px",
            padding: "10px 40px", // Add padding for scroll buttons
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE/Edge
          }}
        >
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id, button.largeImgFrame)}
              style={{
                flex: "0 0 calc(33.33% - 10px)", // Show 3 buttons at a time
                backgroundImage: `url(${
                  activeButton === button.id
                    ? button.darkImgBtn
                    : button.lightImgBtn
                })`,
                backgroundSize: "cover",
                height: "50px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: activeButton === button.id ? "#fff" : "#000",
                fontWeight: "bold",
                minWidth: "100px", // Ensure buttons have a minimum width
              }}
            >
              {button.name}
            </button>
          ))}
        </div>

        {/* Right scroll button with React Icon */}
        <button
          onClick={() => handleScroll("right")}
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaChevronRight /> {/* React Icon for right scroll */}
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#f0f0f0",
          width: "100%",
          height: "1080px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <div>Loading...</div>
        ) : loadedImage ? (
          <img
            src={loadedImage}
            alt="Loaded content"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <div>Please select a category to load the image.</div>
        )}
      </div>
    </div>
  );
};

export default ImageLoader;
