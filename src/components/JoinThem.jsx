// src/components/JoinThem.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const JoinThem = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  // Load data from the JSON file
  useEffect(() => {
    fetch("/data/join_them.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error loading join them data:", error));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  // Function to handle button click
  const navigateToLocation = (event, link) => {
    event.preventDefault();
    navigate(`/${link}`); // Use the navigate function to go to the specified link
  };

  return (
    <section id="join_them">
      {/* Text and Button */}
      <p className="text-lg text-center mb-4">
        {data.text}{" "}
        <button
          className="bg-gray-50 rounded-lg border border-gray-200 py-2 px-4 shadow-sm hover:bg-gray-100 transition-colors cursor-pointer font-bold text-sm sm:text-base"
          onClick={(event) => navigateToLocation(event, data.buttonLink)}
        >
          {data.buttonText}
        </button>
      </p>

      {/* Images */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6">
        {data.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="h-8 sm:h-10 w-auto" // Adjust size for mobile and larger screens
          />
        ))}
      </div>
    </section>
  );
};

export default JoinThem;
