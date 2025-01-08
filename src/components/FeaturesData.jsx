// src/components/Features.js
import React from "react";

const FeaturesData = ({ features }) => {
  return (
    <section>
      <div className="features-content">
        {features.map((feature, index) => (
          <div key={index} style={{ marginBottom: "1.5rem" }}>
            {" "}
            {/* Added margin for spacing */}
            <h3 className="gradient-text-h2">{feature.title}</h3>
            <p style={{ textAlign: "justify" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesData;
