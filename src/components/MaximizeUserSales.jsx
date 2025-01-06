import React, { useState, useEffect } from "react";
import ImagePane from "./ImagePane";

const MaximizeUserSales = () => {
  const [activeSection, setActiveSection] = useState("1");
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [isImageLoading, setIsImageLoading] = useState(false); // Loading state for image transitions

  useEffect(() => {
    fetch("/data/maximizeYourSales.json")
      .then((response) => response.json())
      .then((data) => {
        setSections(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const getFeatureColor = (id) => {
    if (id === activeSection) {
      return "text-[#29d7ff]";
    }
    return "text-[#8E97CD] hover:text-[#29d7ff] transition-colors duration-300";
  };

  const handleSectionClick = (id) => {
    setIsImageLoading(true); // Show loader when a section is clicked
    setActiveSection(id);

    // Simulate a delay for image loading (replace with actual image loading logic if needed)
    setTimeout(() => {
      setIsImageLoading(false); // Hide loader after the image is loaded
    }, 1000); // Adjust the delay as needed
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const activeImage = sections.find((s) => s.id === activeSection)?.image;

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Maximize Your Sales</span>
          <br />
          <span className="gradient-text">with ZUZZUU!</span>
        </h1>
        <p className="text-gray-800 text-base md:text-lg">
          Supercharge your sales and marketing.
          <br />
          All of your needs, in one place.
        </p>
      </div>

      {/* Container for Accordion and ImagePane */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side - Accordion */}
        <div className="w-full md:w-1/2 space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="cursor-pointer"
              onClick={() => handleSectionClick(section.id)}
            >
              <h2
                className={`text-2xl md:text-4xl font-bold transition-colors duration-300 ${getFeatureColor(
                  section.id
                )}`}
              >
                {section.title}
              </h2>
              {section.id === activeSection && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <h3 className="text-gray-800 font-semibold">
                    {section.bold_text}
                  </h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - ImagePane */}
        <div className="w-full md:w-1/2">
          <ImagePane
            imageUrl={activeImage}
            isLoading={isImageLoading} // Pass the image loading state
          />
        </div>
      </div>
    </section>
  );
};

export default MaximizeUserSales;
