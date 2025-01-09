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
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header Image */}
      <img
        src={testimonial.header_image}
        alt={testimonial.title}
        className="w-full h-auto rounded-lg mb-6"
      />

      {/* Title */}
      <h1 className="gradient-text text-3xl md:text-4xl font-bold mb-6">
        {testimonial.title}
      </h1>

      {/* Story Content */}
      <div className="text-justify text-gray-800 text-base leading-7">
        {paragraphs.map((paragraph, index) => (
          <div key={index} className="mb-4">
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
