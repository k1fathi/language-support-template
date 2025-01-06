import React, { useState, useEffect } from "react";

const MaximizeUserSales = () => {
  const [activeSection, setActiveSection] = useState("1");
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-gradient">Maximize Your Sales</span>
          <br />
          <span className="text-gradient">with ZUZZUU!</span>
        </h1>
        <p className="text-gray-800 text-lg">
          Supercharge your sales and marketing.
          <br />
          All of your needs, in one place.
        </p>
      </div>

      <div className="container-maximize-your-sale">
        {/* Left Side - Accordion */}
        <div className="accordion">
          {sections.map((section) => (
            <div
              key={section.id}
              className="space-y-6 mb-8 cursor-pointer"
              onClick={() => setActiveSection(section.id)}
            >
              <h2
                className={`text-4xl font-bold transition-colors duration-300 ${getFeatureColor(
                  section.id
                )}`}
              >
                {section.title}
              </h2>
              {section.id === activeSection && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-gray-800 font-semibold">
                    {section.bold_text}
                  </h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="maximize-your-sale-large-image-container">
          <img
            src={sections.find((s) => s.id === activeSection)?.image}
            alt="Large Feature"
            className="maximize-your-sale-large-image"
            style={{ opacity: 1, transition: "opacity 2s" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MaximizeUserSales;
