import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagePane from "../components/ImagePane"; // Ensure the path is correct

const TestimonialDetail = () => {
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
   return (
     <div className="flex justify-center items-center min-h-screen">
       <div className="dot-loading">
         <span>.</span>
         <span>.</span>
         <span>.</span>
       </div>
     </div>
   );
  }

  // Split the story text by newlines
  const paragraphs = testimonial.story.split("\n");

  return (
    <section>
      <div className="detail-page-container">
        {/* Header Image using ImagePane */}
        <div>
          <ImagePane
            imageUrl={testimonial.header_image}
            isLoading={isLoading}
            className="header-image"
          />
        </div>

        {/* Title */}
        <h1 className="gradient-text">
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

export default TestimonialDetail;