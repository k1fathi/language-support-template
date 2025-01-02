import React from "react";
import { Card, CardContent } from "../components/CaseStudyCard";

const CaseStudyPage = ({ data }) => {
  const defaultData = {
    title: "Black Friday Promos Reverberate Right Through November for Audio Lovers",
    clientName: "Teufel",
    image: "https://via.placeholder.com/400x300",
    stats: [
      { value: "6.5x", label: "Black Friday budget boost" },
      { value: "735%", label: "Conversion increase (YoY)" },
      { value: "20%", label: "Delivery above ROI/S goal" },
    ],
    aboutClient:
      "Teufel was founded in Berlin in 1979 and is known for producing high-quality audio equipment for music enthusiasts worldwide.",
    testimonial: {
      quote:
        "The Novembermania strategy is a bold play, and we need to work with partners that are brave enough to make that play with us, and who have the technology stack to back up those ambitions. We're now in our fourth wave of cooperation that they are that partner.",
      author: "Walter Network",
    },
    challenge:
      "Teufel has been working consistently with its advertising partners to ensure successful campaigns. However, Black Friday campaigns bring additional pressure to deliver significant results within a limited timeframe.",
    solution:
      "Since branded ads and the Novembermania strategy were implemented, Teufel saw a unique way to attract customers during Black Friday campaigns.",
    results: [
      "Teufel saw an exceptional approach to the Black Friday sales period, achieving growth year-over-year.",
      "Emotional e-commerce drove exceptional results for the company, exceeding their ROI/S goals.",
    ],
  };

  const {
    title,
    clientName,
    image,
    stats,
    aboutClient,
    testimonial,
    challenge,
    solution,
    results,
  } = data || defaultData;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <Card className="mb-16">
        <CardContent className="p-8 flex flex-col md:flex-row items-center md:items-start">
          <img
            src={image}
            alt={clientName}
            className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-8"
          />
          <div>
            <div className="text-sm uppercase mb-4 text-gray-500">
              Client Case Study
            </div>
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            <div className="font-bold text-lg text-gray-700">{clientName}</div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center p-6">
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* About Client */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-lg font-bold mb-4">About the Client</h2>
          <p className="text-gray-700">{aboutClient}</p>
        </CardContent>
      </Card>

      {/* Testimonial Section */}
      <Card className="mb-16">
        <CardContent className="p-8 bg-gradient-to-r from-[#29d7ff]/10 via-[#7083ff]/10 to-[#e000ff]/10">
          <h2 className="text-lg font-bold mb-4">What They Say About Us</h2>
          <blockquote className="text-xl font-medium mb-4 text-gray-700">
            "{testimonial.quote}"
          </blockquote>
          <cite className="text-gray-500 not-italic">- {testimonial.author}</cite>
        </CardContent>
      </Card>

      {/* Challenge Section */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-lg font-bold mb-4">The Challenge</h2>
          <p className="text-gray-700">{challenge}</p>
        </CardContent>
      </Card>

      {/* Solution Section */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-lg font-bold mb-4">The Solution</h2>
          <p className="text-gray-700">{solution}</p>
        </CardContent>
      </Card>

      {/* Results Section */}
      <Card className="mb-16">
        <CardContent className="p-8">
          <h2 className="text-lg font-bold mb-4">The Results</h2>
          <ul className="list-disc pl-6 space-y-4">
            {results.map((result, index) => (
              <li key={index} className="text-gray-700">
                {result}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseStudyPage;
