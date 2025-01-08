// src/components/Features.js
import React from "react";

const FeaturesData = ({ features }) => {
  return (
    <section>
      <div className="features-content">
        {features.map((feature, index) => (
          <div key={index}>
            <h3 className="gradient-text-h2">{feature.title}</h3>
            <p>{feature.description}</p>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesData;
