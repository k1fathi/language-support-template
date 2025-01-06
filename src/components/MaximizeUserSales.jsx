import React, { useState, useEffect } from "react";

const MaximizeUserSales = () => {
  const [activeTab, setActiveTab] = useState("1"); // Set the first tab as default
  const [tabsData, setTabsData] = useState([]); // State to store the fetched data
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/data/maximizeYourSales.json")
      .then((response) => response.json())
      .then((data) => {
        setTabsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  // Find the active tab data
  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  // Show a loading state while fetching data
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-loader"></div>
      </div>
    );
  }

  // Show an error message if no data is found
  if (!tabsData.length) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Failed to load data. Please try again later.
      </div>
    );
  }

  return (
    <section
      id="mazimize_your_sales"
      class="flex flex-col justify-center items-center"
    >
      <span className="gradient-text">
        Maximize Your Sales <br />
        with ZUZZUU!
      </span>
      <p className="text-gray-700 text-base md:text-lg mb-8">
        Supercharge your sales and marketing. All of your needs, in one place.
      </p>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Large Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            {activeTabData && (
              <img
                src={activeTabData.image}
                alt={activeTabData.title}
                className="w-full max-w-md object-contain"
              />
            )}
          </div>

          {/* Right Side: Tabs and Content */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col space-y-4">
              {/* Tabs */}
              <div className="flex flex-wrap gap-4">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTabData && (
                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {activeTabData.bold_text}
                  </h2>
                  <p className="mt-4 text-gray-600">
                    {activeTabData.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaximizeUserSales;
