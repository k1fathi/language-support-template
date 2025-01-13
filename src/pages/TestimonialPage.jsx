import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagePane from "../components/ImagePane"; // Ensure the path is correct

const TestimonialPage = () => {
  const { index } = useParams();
  const [testimonial, setTestimonial] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from the JSON file
  useEffect(() => {
    setIsLoading(true);
    fetch("/data/testimonials.json")
      .then((response) => response.json())
      .then((data) => {
        setTestimonial(data[index]); // No need to decode if the JSON is not encoded
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading testimonial:", error);
        setIsLoading(false);
      });
  }, [index]);

  if (!testimonial) {
    return <div>Loading...</div>;
  }

  // Split the story text by newlines
  const paragraphs = testimonial.story.split("\n");

  return (
    <section className="w-full flex justify-center">
      <div className="detail-page-container">
        {/* Header Image using ImagePane */}
        <div>
          <ImagePane
            imageUrl={testimonial.header_image}
            isLoading={isLoading}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Title */}
        <h1 className="gradient-text text-3xl font-bold mb-6">
          {testimonial.title}
        </h1>

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