import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CaseStudyDetail = () => {
  const { id } = useParams(); // Get the `id` parameter from the URL
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/caseStudies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch case studies");
        }
        return response.json();
      })
      .then((data) => {
        // Find the case study with the matching `id`
        const foundStudy = data.find((study) => study.id === parseInt(id));
        if (foundStudy) {
          setStudy(foundStudy);
        } else {
          setError("Case study not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching case studies:", error);
        setError("Failed to fetch case studies");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!study) {
    return <div>Case study not found.</div>;
  }

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <a href="/case-studies" className="text-blue-500 hover:underline">
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
            <h1 className="text-4xl font-bold mb-4 gradient-text">
              {study.title}
            </h1>
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
              {(study.results || []).map((result, index) => (
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
