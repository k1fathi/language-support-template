import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImagePane from "../components/ImagePane"; // Ensure the path is correct

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/caseStudies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch case studies");
        }
        return response.json();
      })
      .then((data) => {
        const foundStudy = data.find((study) => study.id === parseInt(id));
        if (foundStudy) {
          setStudy(foundStudy);
        } else {
          setError("Case study not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching case studies:", error);
        setError("Failed to fetch case studies");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div
          className="animate-pulse text-2xl font-bold"
          style={{
            background: "var(--zuzzuu-pink-rainbow-color)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div
          className="text-2xl"
          style={{
            background: "var(--zuzzuu-pink-rainbow-color)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {error}
        </div>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div
          className="text-2xl"
          style={{
            background: "var(--zuzzuu-pink-rainbow-color)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Case study not found.
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="detail-page-container">
        {/* Case Study Card */}
        <ImagePane
          imageUrl={study.image}
          alt={study.title}
          isLoading={loading}
          className="header-image"
        />
        {/* Content */}

        {/* Title */}
        <h1 className="gradient-text">{study.title}</h1>

        {/* Client */}
        <p className="text-gray-700 mb-6 text-lg">
          <span className="font-semibold">Client:</span> {study.client}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[study.industry, study.region, study.campaign].map((tag, index) => (
            <span
              key={index}
              className="bg-gray-50 text-gray-500 px-1 py-0.5 rounded-sm text-xs italic"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Sections */}
        {[
          { title: "About the Client", content: study.about_the_client },
          {
            title: "What They Say About Us",
            content: study.what_they_say_about_us,
          },
          { title: "The Challenge", content: study.the_challenge },
          { title: "The Solution", content: study.the_solution },
          { title: "The Result", content: study.the_result },
        ].map((section, index) => (
          <div key={index} className={"w-full  text-left"}>
            <h2 className="gradient-text-h2">{section.title}</h2>
            <p className="text-justify">{section.content}</p>
          </div>
        ))}

        {/* Metrics */}
        {(study["re-attribution cost reduction"] ||
          study["revenue increase"] ||
          study["d7_roas_target_realization"]) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {study["re-attribution cost reduction"] && (
              <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20 hover:scale-105 transition-transform">
                <p className="text-center">
                  <span
                    className="block text-3xl font-bold mb-2"
                    style={{
                      background: "var(--zuzzuu-pink-rainbow-color)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {study["re-attribution cost reduction"]}%
                  </span>
                  <span className="text-gray-700 text-lg">Cost Reduction</span>
                </p>
              </div>
            )}
            {study["revenue increase"] && (
              <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20 hover:scale-105 transition-transform">
                <p className="text-center">
                  <span
                    className="block text-3xl font-bold mb-2"
                    style={{
                      background: "var(--zuzzuu-pink-rainbow-color)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {study["revenue increase"]}%
                  </span>
                  <span className="text-gray-700 text-lg">
                    Revenue Increase
                  </span>
                </p>
              </div>
            )}
            {study["d7_roas_target_realization"] && (
              <div className="p-6 backdrop-blur-sm bg-white/10 rounded-lg border border-white/20 hover:scale-105 transition-transform">
                <p className="text-center">
                  <span
                    className="block text-3xl font-bold mb-2"
                    style={{
                      background: "var(--zuzzuu-pink-rainbow-color)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {study["d7_roas_target_realization"]}x
                  </span>
                  <span className="text-gray-700 text-lg">ROAS Target</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyDetail;
