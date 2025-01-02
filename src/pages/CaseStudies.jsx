import React, { useState, useEffect } from "react";
import CaseStudyCard from "../components/CaseStudyCard";

const CaseStudiesPage = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [filters, setFilters] = useState({
    industry: "",
    clientType: "",
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
      (filters.clientType === "" || study.clientType === filters.clientType) &&
      (filters.region === "" || study.region === filters.region) &&
      (filters.campaign === "" || study.campaign === filters.campaign)
    );
  });

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="gradient-text text-4xl md:text-5xl font-bold">
          Sharing the Success
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Don’t just take our word for it. <br/> Discover inspiring stories of players
          who transformed their leisure time into a world of fun and challenges
          with ZUZZUU.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select
              name="industry"
              class="w-full max-w-xs p-3 border border-gray-300 rounded-full"
            >
              <option value="">Select Industry</option>
              <option value="Retail">Retail</option>
              <option value="Food &amp; Beverage">Food &amp; Beverage</option>
              <option value="Fashion">Fashion</option>
              <option value="Gaming">Gaming</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Jewelry">Jewelry</option>
            </select>
            <select
              name="clientType"
              class="w-full max-w-xs p-3 border border-gray-300 rounded-full"
            >
              <option value="">Select Client Type</option>
              <option value="B2C">B2C</option>
              <option value="B2B">B2B</option>
            </select>
            <select
              name="region"
              class="w-full max-w-xs p-3 border border-gray-300 rounded-full"
            >
              <option value="">Select Region</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Global">Global</option>
            </select>
            <select
              name="campaign"
              class="w-full max-w-xs p-3 border border-gray-300 rounded-full"
            >
              <option value="">Select Campaign</option>
              <option value="Black Friday">Black Friday</option>
              <option value="Retargeting">Retargeting</option>
              <option value="Scaling">Scaling</option>
              <option value="Deep Learning">Deep Learning</option>
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
