// src/pages/TestimonialPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TestimonialPage = () => {
  const { index } = useParams();
  const [testimonial, setTestimonial] = useState(null);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonial(data[index]); // No need to decode if the JSON is not encoded
      })
      .catch((error) => console.error("Error loading testimonial:", error));
  }, [index]);

  if (!testimonial) {
    return <div>Loading...</div>;
  }

  // Split the story text by newlines
  const paragraphs = testimonial.story.split("\n");

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="detail-page-container">
        {/* Header Image */}
        <img
          src={testimonial.header_image}
          alt={testimonial.title}
          className="w-full h-auto rounded-lg mb-6"
        />

        {/* Title */}
        <h1 className="gradient-text">{testimonial.title}</h1>

        {/* Story Content */}
        <div className="text-justify">
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="mb-4">
              {paragraph}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialPage;
