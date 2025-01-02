import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Black Friday Promos Reverberate Right Through November for Audio Lovers",
      client: "Tavial",
      industry: "Retail",
      region: "North America",
      campaign: "Black Friday",
      image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    },
    {
      id: 2,
      title: "World’s Leading Restaurant Gets a Taste of Retargeting Success",
      client: "Export Experience",
      industry: "Food & Beverage",
      region: "Europe",
      campaign: "Retargeting",
      image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Results at Scale for a Vinram Brand Redefining Fashion Retail",
      client: "REVOLVE",
      industry: "Fashion",
      region: "North America",
      campaign: "Scaling",
      image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    },
    {
      id: 4,
      title: "Club Vegas Cashes in with Calibrated Retargeting for Social Casino",
      client: "Bagelcode",
      industry: "Gaming",
      region: "Global",
      campaign: "Retargeting",
      image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    },
    {
      id: 5,
      title: "Building Ideal Retargeting Scenarios for a Price Comparison Champion",
      client: "Price Comparison Plus",
      industry: "E-commerce",
      region: "Asia",
      campaign: "Retargeting",
      image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    },
    {
      id: 6,
      title: "Chow Sang Sang leverages Deep Learning to generate 27% higher average order values",
      client: "周生生 (Chow Sang Sang)",
      industry: "Jewelry",
      region: "Asia",
      campaign: "Deep Learning",
      image: "https://via.placeholder.com/400x300", // Replace with actual image URL
    },
  ];

  // State for filters
  const [filters, setFilters] = useState({
    industry: "",
    clientType: "",
    region: "",
    campaign: "",
  });

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
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Sharing the Success
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Don’t just take our word for it. Read the compelling stories of businesses that broke through barriers with RTB House.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <select
            name="industry"
            value={filters.industry}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Industry</option>
            <option value="Retail">Retail</option>
            <option value="Food & Beverage">Food & Beverage</option>
            <option value="Fashion">Fashion</option>
            <option value="Gaming">Gaming</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Jewelry">Jewelry</option>
          </select>
          <select
            name="clientType"
            value={filters.clientType}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Client Type</option>
            <option value="B2C">B2C</option>
            <option value="B2B">B2B</option>
          </select>
          <select
            name="region"
            value={filters.region}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Region</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Global">Global</option>
          </select>
          <select
            name="campaign"
            value={filters.campaign}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Campaign</option>
            <option value="Black Friday">Black Friday</option>
            <option value="Retargeting">Retargeting</option>
            <option value="Scaling">Scaling</option>
            <option value="Deep Learning">Deep Learning</option>
          </select>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{study.title}</h2>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Client:</span> {study.client}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    {study.industry}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    {study.region}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                    {study.campaign}
                  </span>
                </div>
                <Link
                  to={`/case-study/${study.id}`}
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;