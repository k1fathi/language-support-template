// src/pages/Features.js
import React, { useEffect, useState } from "react";
import FeaturesData from "../components/FeaturesData";
import Features from "../components/Features";

const FeaturesPage = () => {
  const [features, setFeatures] = useState([]);

  // Load data from the JSON file
  useEffect(() => {
    fetch("/data/features_data.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error loading features data:", error));
  }, []);

  return (
    <div>
      <Features/>
      <FeaturesData features={features} />
    </div>
  );
};

export default FeaturesPage;
