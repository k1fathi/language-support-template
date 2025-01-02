import React from "react";
import { useParams } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Black Friday Promos Reverberate Right Through November for Audio Lovers",
    client: "Tavial",
    industry: "Retail",
    region: "North America",
    campaign: "Black Friday",
    image: "https://via.placeholder.com/800x400", // Replace with actual image URL
    description:
      "Tavial leveraged RTB House's retargeting solutions to boost Black Friday sales, resulting in a 735% increase in conversions year-over-year.",
    results: [
      "735% increase in conversions (YoY)",
      "20% above ROI/S goal",
      "6.5x boost in Black Friday budget",
    ],
  },
  {
    id: 2,
    title: "World’s Leading Restaurant Gets a Taste of Retargeting Success",
    client: "Export Experience",
    industry: "Food & Beverage",
    region: "Europe",
    campaign: "Retargeting",
    image: "https://via.placeholder.com/800x400", // Replace with actual image URL
    description:
      "Export Experience used RTB House's retargeting technology to increase customer engagement and drive higher sales.",
    results: [
      "30% increase in customer retention",
      "25% higher average order value",
      "40% boost in repeat purchases",
    ],
  },
  // Add more case studies as needed
];

const CaseStudyDetail = () => {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const study = caseStudies.find((study) => study.id === parseInt(id));

  if (!study) {
    return <div>Case study not found.</div>;
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <a
            href="/case-studies"
            className="text-blue-500 hover:underline"
          >
            ← Back to Case Studies
          </a>
        </div>

        {/* Case Study Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{study.title}</h1>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Client:</span> {study.client}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
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
            <p className="text-gray-700 mb-6">{study.description}</p>
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <ul className="list-disc list-inside text-gray-700">
              {study.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;