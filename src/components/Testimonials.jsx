// src/components/Testimonials.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error loading testimonials:", error));
  }, []);

  // Function to handle "Read Story" button click
  const handleReadStory = (index) => {
    navigate(`/testimonial/${index}`);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">All teams love the way</span>
          <br />
          <span className="gradient-text">to use ZUZZUU!</span>
        </h1>
        <p className="text-gray-800 text-base md:text-lg">
          Supercharge your sales and marketing.
          <br />
          All of your needs, in one place.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-[16px] shadow-lg overflow-hidden max-w-[350px] text-left"
          >
            <img
              src={testimonial.card_image}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-auto"
            />
            <div className="p-7 flex flex-col items-start">
              <p className="text-gray-700">
                “With Zuzzuu we’ve seen a <strong>40% improvement</strong> in
                our total go-to-market efficiency!”
              </p>
              <div
                className="w-full mt-6 flex justify-center"
                onClick={() => handleReadStory(index)}
              >
                <span className="bg-gray-50 rounded-lg border border-gray-200 py-2 px-4 shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">
                  Read Story →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
