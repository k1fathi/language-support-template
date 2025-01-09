import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/testimonials.json");
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleReadStory = (index) => {
    navigate(`/testimonial/${index}`);
  };

  if (isLoading) {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">Loading testimonials...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-red-600">Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">All teams love the way</span>
          <br />
          <span className="gradient-text">to use ZUZZUU!</span>
        </h2>
        <p className="text-gray-800 text-base md:text-lg">
          Supercharge your sales and marketing.
          <br />
          All of your needs, in one place.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="bg-white rounded-[16px] shadow-lg overflow-hidden max-w-[350px] text-left"
          >
            <img
              src={testimonial.card_image}
              alt={`${testimonial.name}'s testimonial`}
              className="w-full h-auto"
            />
            <div className="p-7 flex flex-col items-start">
              <p className="text-gray-700">{testimonial.quote}</p>
              <button
                onClick={() => handleReadStory(index)}
                className="mt-6 bg-gray-50 rounded-lg border border-gray-200 py-2 px-4 shadow-sm hover:bg-gray-100 transition-colors cursor-pointer w-full"
                aria-label={`Read ${testimonial.name}'s story`}
              >
                Read Story →
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
