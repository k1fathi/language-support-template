import React from "react";
import { Card, CardContent }  from "../components/CaseStudyCard";

const CaseStudyPage = ({ data }) => {
  const defaultData = {
    title: "Black Friday Promos Reverberate Right Through November for Audio Lovers",
    clientName: "Teufel",
    stats: [
      { value: "6.5x", label: "Black Friday budget boost" },
      { value: "735%", label: "Conversion increase (YoY)" },
      { value: "20%", label: "Delivery above ROI/S goal" }
    ],
    aboutClient: "Teufel was founded in Berlin in 1979...",
    testimonial: {
      quote: "The Novembermania strategy is a bold play, and we need to work with partners that are brave enough to make that play with us, and who have the technology stack to back up those ambitions. We're now in our fourth wave of our cooperation that they are that partner.",
      author: "Walter Network"
    },
    challenge: "Teufel has been working consistently with...",
    solution: "Since branded ads and the Novembermania...",
    results: [
      "Teufel saw an exceptional approach to the Black Friday sales period...",
      "Emotional ecommerce drove exceptional results..."
    ]
  };

  const { title, clientName, stats, aboutClient, testimonial, challenge, solution, results } = data || defaultData;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header with gradient background */}
      <div className="mb-16 p-8 rounded-lg bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] text-white">
        <div className="text-sm uppercase mb-4 opacity-80">Client Case Study</div>
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <div className="flex items-center space-x-4 mb-8">
          <span className="font-bold text-xl">{clientName}</span>
        </div>
      </div>

      {/* Stats with gradient borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg border-2 border-transparent bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-padding"
            style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #29d7ff, #7083ff, #e000ff) border-box' }}
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* About Client */}
      <section className="mb-16">
        <h2 className="text-sm uppercase mb-4 bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-text text-transparent font-bold">
          About the client
        </h2>
        <div className="text-gray-700">{aboutClient}</div>
      </section>

      {/* Testimonial with gradient background */}
      <Card className="mb-16 overflow-hidden">
        <CardContent className="p-8 bg-gradient-to-r from-[#29d7ff]/10 via-[#7083ff]/10 to-[#e000ff]/10">
          <h2 className="text-sm uppercase mb-4 bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-text text-transparent font-bold">
            What they say about us
          </h2>
          <blockquote className="text-xl font-medium mb-4">"{testimonial.quote}"</blockquote>
          <cite className="text-gray-600 not-italic">- {testimonial.author}</cite>
        </CardContent>
      </Card>

      {/* Challenge */}
      <section className="mb-16">
        <h2 className="text-sm uppercase mb-4 bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-text text-transparent font-bold">
          The challenge
        </h2>
        <div className="text-gray-700">{challenge}</div>
      </section>

      {/* Solution with gradient border */}
      <section
        className="mb-16 p-6 rounded-lg border-2 border-transparent"
        style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #29d7ff, #7083ff, #e000ff) border-box' }}
      >
        <h2 className="text-sm uppercase mb-4 bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-text text-transparent font-bold">
          The solution
        </h2>
        <div className="text-gray-700">{solution}</div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-sm uppercase mb-4 bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] bg-clip-text text-transparent font-bold">
          The result
        </h2>
        <div className="space-y-4">
          {results.map((result, index) => (
            <p key={index} className="text-gray-700">{result}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;