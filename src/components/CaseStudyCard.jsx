import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Import an icon from react-icons

const CaseStudyCard = ({ study }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={study.image}
        alt={study.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{study.title}</h2>
        <p className="bg-zuzzuu-blue text-gray-700 mb-3 pl-3 rounded-xl shadow-sm">
          <span className="font-semibold text-gray-900">Client:</span>{" "}
          {study.client}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-50 text-gray-500 px-1 py-0.5 rounded-sm text-xs italic">
            {study.industry}
          </span>
          <span className="bg-gray-50 text-gray-500 px-1 py-0.5 rounded-sm text-xs italic">
            {study.region}
          </span>
          <span className="bg-gray-50 text-gray-500 px-1 py-0.5 rounded-sm text-xs italic">
            {study.campaign}
          </span>
        </div>
        <Link
          to={`/case-study/${study.id}`}
          class="flex items-center text-blue-500 hover:text-blue-600 text-xs transition-colors duration-200 ease-in-out gap-2 cursor-pointer rounded-full px-2 py-1"
        >
          <span className="mr-2">Read More</span>
          <FaArrowRight className="inline-block" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
