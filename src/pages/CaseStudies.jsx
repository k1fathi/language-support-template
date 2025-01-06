import React, { useState, useEffect } from "react";
import CaseStudyCard from "../components/CaseStudyCard";

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [filters, setFilters] = useState({
    industry: "",
    region: "",
    campaign: "",
  });

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/caseStudies.json")
      .then((response) => response.json())
      .then((data) => setCaseStudies(data))
      .catch((error) => console.error("Error fetching case studies:", error));
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter case studies based on selected filters
  const filteredCaseStudies = caseStudies.filter((study) => {
    return (
      (filters.industry === "" || study.industry === filters.industry) &&
      (filters.region === "" || study.region === filters.region) &&
      (filters.campaign === "" || study.campaign === filters.campaign)
    );
  });

  // Get unique options for dropdowns dynamically
  const getOptions = (key) => {
    return [...new Set(caseStudies.map((study) => study[key]))];
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
         <span className="gradient-text">
          Sharing the Success
        </span>
        <p className="text-gray-700 mt-4 text-lg">
          Don’t just take our word for it. <br /> Discover inspiring stories of
          players who transformed their leisure time into a world of fun and
          challenges with ZUZZUU.
        </p>
      </div>

      <div className="bg-white rounded-xl p-2">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <select
            name="industry"
            value={filters.industry}
            onChange={handleFilterChange}
            className="w-full max-w-xs p-3 border border-gray-300 rounded-full"
          >
            <option value="">Select Industry</option>
            {getOptions("industry").map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="region"
            value={filters.region}
            onChange={handleFilterChange}
            className="w-full max-w-xs p-3 border border-gray-300 rounded-full"
          >
            <option value="">Select Region</option>
            {getOptions("region").map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="campaign"
            value={filters.campaign}
            onChange={handleFilterChange}
            className="w-full max-w-xs p-3 border border-gray-300 rounded-full"
          >
            <option value="">Select Campaign</option>
            {getOptions("campaign").map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCaseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;
