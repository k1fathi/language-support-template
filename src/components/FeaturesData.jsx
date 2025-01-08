// src/components/Features.js
import React from "react";

const FeaturesData = ({ features }) => {
  return (
    <section>
      <div className="px-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="mb-6">
            {" "}
            {/* Added margin for spacing */}
            <h3 className="gradient-text-h2">{feature.title}</h3>
            <p className="text-justify">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesData;
